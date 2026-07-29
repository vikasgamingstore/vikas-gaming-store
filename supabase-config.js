/* ============================================================
   Vikas Gaming Store — shared config, cart & auth helpers
   Loaded on every page after the supabase-js CDN script.
   ============================================================ */

const SUPABASE_URL = "https://aaerbvnseepubjhrwlmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZXJidm5zZWVwdWJqaHJ3bG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMjk3NjQsImV4cCI6MjEwMDkwNTc2NH0.PlBN-OGeiz0fEuSuzR42Ws6ufhHx_j9NXID-CUcSLq8";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Meta Pixel was pointing at someone else's ad account ID — disabled.
   fbq() calls left in page markup won't error because of this stub.
   To enable real tracking later, replace with your own Pixel ID. */
window.fbq = window.fbq || function(){};

/* ---------- category / condition mappings ---------- */
const CATEGORY_LABELS = {
  playstation_console: "PlayStation Console",
  xbox_console: "Xbox Console",
  controller: "Controller",
  accessory: "Accessory",
  game: "Game"
};
const CATEGORY_ICONS = {
  playstation_console: "🎮",
  xbox_console: "🎮",
  controller: "🕹️",
  accessory: "🎧",
  game: "💿"
};
const CONDITION_LABELS = { new: "Brand New", pre_owned: "Pre-Owned" };

const ORDER_STATUS_LABELS = {
  pending_payment: "Pending Payment",
  payment_submitted: "Payment Submitted",
  confirmed: "Confirmed",
  packed: "Packed",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled"
};
/* maps DB status -> CSS pill class already defined in each page's <style> */
const ORDER_STATUS_PILL = {
  pending_payment: "pending",
  payment_submitted: "pending",
  confirmed: "confirmed",
  packed: "shipped",
  shipped: "shipped",
  delivered: "delivered",
  cancelled: "cancelled"
};

function formatINR(n){
  return "₹" + Number(n || 0).toLocaleString("en-IN");
}

/* ---------- cart (localStorage, per-browser) ---------- */
const CART_KEY = "vgs_cart";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(product, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if(existing){ existing.qty += qty; }
  else {
    cart.push({
      id: product.id, name: product.name, price: Number(product.price),
      image_url: product.image_url || null, condition: product.condition,
      category: product.category, qty: qty
    });
  }
  saveCart(cart);
}
function removeFromCart(id){
  saveCart(getCart().filter(i => i.id !== id));
}
function setQty(id, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}
function cartCount(){
  return getCart().reduce((n, i) => n + i.qty, 0);
}
function cartTotal(){
  return getCart().reduce((n, i) => n + (i.price * i.qty), 0);
}
function clearCart(){
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}
function updateCartBadge(){
  const n = cartCount();
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

/* ---------- WhatsApp helper ---------- */
function waLink(number, text){
  const clean = (number || "").replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

/* ---------- store settings (shared footer/contact info) ---------- */
async function applyStoreContactInfo(){
  const { data } = await sb.from("store_settings").select("*").eq("id", 1).single();
  if(!data) return data;
  document.querySelectorAll("[data-store-whatsapp]").forEach(el => {
    el.textContent = data.whatsapp_number || el.textContent;
  });
  document.querySelectorAll("[data-store-email]").forEach(el => {
    el.textContent = data.contact_email || el.textContent;
  });
  document.querySelectorAll("[data-store-phone]").forEach(el => {
    el.textContent = data.contact_phone || el.textContent;
  });
  document.querySelectorAll("[data-store-address]").forEach(el => {
    el.textContent = data.store_address || el.textContent;
  });
  document.querySelectorAll("[data-wa-btn]").forEach(el => {
    if(data.whatsapp_number){
      el.onclick = () => { fbq('track','Lead',{content_name:'WhatsApp Chat Click'}); window.open(waLink(data.whatsapp_number, "Hi Vikas Gaming Store, I have a question."), "_blank"); };
    }
  });
  return data;
}

/* ---------- auth helpers ---------- */
async function getSessionUser(){
  const { data: { session } } = await sb.auth.getSession();
  return session ? session.user : null;
}
async function requireAuth(redirectTo){
  const user = await getSessionUser();
  if(!user){
    window.location.href = "auth.html?redirect=" + encodeURIComponent(redirectTo || window.location.pathname.split("/").pop());
    return null;
  }
  return user;
}
async function requireAdmin(){
  const user = await getSessionUser();
  if(!user){ window.location.href = "admin-login.html"; return null; }
  const { data: profile } = await sb.from("profiles").select("is_admin").eq("id", user.id).single();
  if(!profile || !profile.is_admin){
    await sb.auth.signOut();
    window.location.href = "admin-login.html";
    return null;
  }
  return user;
}
async function doLogout(redirectTo){
  await sb.auth.signOut();
  window.location.href = redirectTo || "index.html";
}

/* ---------- auto: reflect login state in any .login-btn ---------- */
async function reflectAuthInHeader(){
  const btns = document.querySelectorAll(".login-btn");
  if(btns.length === 0) return;
  const user = await getSessionUser();
  if(user){
    btns.forEach(b => { b.textContent = "My Account"; b.href = "customer-dashboard.html"; });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  reflectAuthInHeader();
});
