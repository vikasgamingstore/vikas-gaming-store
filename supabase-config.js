/* ============================================================
   Brand assets embedded here so no separate image upload is
   needed — every page picks these up automatically.
   ============================================================ */
const VGS_LOGO = "data:image/webp;base64,UklGRt5KAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSDwjAAAB/yckSPD/eGtEpO4TEAO2DduAItvNC/f/wVZ+iOj/BLC3lfS3X72RpHxvwGYX5Aab+/wCfF/+L0kCSH7DsanoVSX5/e3xcRNXcnNNa9pnbMl0YJnn6czoeaBzzcyojVqlHebVRPI3yUtksybyBtAiBCozv9dhxoYZQcvtmUmOBg09JBFQVEmybUhY9jexCuhGvsnW+gW0tmWFNmzblu1NpeO87ueVz78v7u5J0zaN1CV1L86i06KFWTiD29ChFFuKLV8LmNXBdSjuTgVJLe7u9un7Ps99/Xjt+ZL0f0RMAGe9AFEbwVzC3c0yoegI59lcyCOYqVxOxvf1zUiPF1NPBgeyEydPVIfSzCPyZysBEbeOMeOLM+dMHtdbqQyjzpHooTKcHde+A6eO79py4OjxmCk6/uzjoJ65i6dOmlQs0VhFmvc9+/vXPfrnXcOOhJ5FJKnYMWPNyslOrUd3hERdd1wuFAAqm763e/fWvZlAzxKCZPLq584rA3h0FIJErjGCAjC8/bsXdxvPisLonPfG7+0EPEOWCPDdW4f3nT5wIktNxWK5bUL7pO5xk8oFgMwxgzc/584pJQOd0ySwibd/9o/RPUaSBBjc9tSGvUdpL3R1FQC5EqOszs72ObMnTZk9p8/AI5q46hWve+t14zxDOmcp0jb9gjXdQEbB4NDu3T/blY0pA0LIZKKxWSgkfZPn3LRkTjd4xET2689Mbcf9XOXd426/fAgyV5F4/NHvnOjvLiBJEMlXIilOvGDp6st7IDqBwfffNqs76FwkwtwbL3HIKIqTf3zo2IRCIoSTv5y6oW3Mhedfu7Idj7L2ZS96zsxwDgqlvutuAjKK8MzPf9lRlgSKtGrEJuoLB5LJS6+8fiVkEVt193NmBZ1jElt6Twl3LzL4+Dd3lGjotCryFTjWOes5t62w4BEWX3XegYFziRXH3rEaosxO/exL5TIIr9OyWNP7Q3lr9c3K41e+EgLRWdW+60QVnRtkxatuh0gQP/3cWIGI5Guav6t01QaLOdWd9JVvpricUuXJXac5J4p5d84nYsYvvzwCkjt5Gw8433z5KTw34Ud/+uMthKhoSo8fSM8B1jZn9QRc7tvfPy0gMYrGhXuzLD4PYzStWFz4L8MeMSbe0D0SzzZpbO/FREUGP3dhIRGjKjq+41nmvxyLRgNE4a5vRkUyOi+dkpxlaXhOCWScetHkRIyy6N0Q0xiPTB8tFJJJHz+KYfRO8dTPpo6O/g4Uxe8OSIy+eKfHzD8pMeoqdj78CHIywow+O2s89MwnQxxet8FF82b5WPEh9z9MIR8LTQHDex4ZAMEMMj87ZFo4GeGse2TAyDGxRrJ6BF7n/imM+rJGpkirMt+9eQ/uYri9nJwNLgu9iMDujf3RWxDXrKZ5qyPr2eLx0CSpjoEaAGvuUHN4dDYdRsCsFUl6FsT2ygDRGR4riVYD9/rv3rE81DHefDOqSXiNp1X/IKHGuOSdWI2Yd+et8btYc3XjcYRT3nsqnHGu5WMQnH5uDzmKvsfd490kAOUDQ9dj4DwzTxa09AkA08q9Q2MRBG4bdh+6OhdlKwAxMmV8eoYlyXCB2omYcsC4qTrsNxEgcLP7VwkQqiPj3SzrYNAg4V/d7yEB43k+Er8TpBwIdiiTw7jyQOFMUuZDA+AcO94tkauVv+snxpqBNOnX8U4VcDYuFSAtewaRaG3cthADs2Un/NhyjFw1EFMEQ9VyPHNcp7enIAZPpORt3Ob9dxGAwPP9nyCEEe9zgbKOzgGTeMDfigEJdw/7xzFytu7dg7iwrUd1xsRqxylwwtCg5ybr+okP/RVBsuI69y+0ZfbMUlErzt+pGP7Z/ak2kxLuGPCjy5Ub6VHvRM7ugVKmM0PD6zIQfeUOU24Ervfo74Uif+1p1X85b7Cv21XHS7OPzPyhp6m/iyLcNxL97zFyl9onZwC9QyfxMyKc3oHDUcXo5C+V1mUV/1Q7045m0av+5HnLJOqaFp63zqse08FlFD/qWXZ88WjgSvuV4ezbVzwjhgdLCJ9XKohRNd7qaep/uOAhT909e94d5UbIrro9c/fUv7/qN55W/QuIUY1haQmJHSPDZ0A4+TQuOv9mV4HRFVMPe0y9WnABeDTRZGYCcFU89Zg9TzY6CuO6wPFDp9FoaeQvFbnH7kcZ9cDnveqZMbquzDN/oguNDqSl2Qgb/Nmx0ZLtOGC4jU9LZ4Bu8czdNTq4e+ofxBj1tjEZOE9tko+KWDgEYnFXVaMnOrZ65gCOu4MEAscdhCTAYxy+hDB6qvaej+Bg5hqVtg8CPmGWOWdg4DNe9ehuRt4xyjyLv0rEmVhcVohAm9locPVeiFNvwDgzXpiNOLWHDhzYv/3k4ePePyj1FcaM75g6eeqkSQGII/4g4YwIPSvKuCb0u+enhX9xxOp5UWeEGH/Yfc9Tv39m27YT1G9LYjZM/c5pKy5Zutx9ZAV2RpDMusTR1LEVclf5o55Cd1finJniPQ+sWX8KZs9dMH7G1MK4knWXiKcHdbT/8LFt2zduTRl762fejTgzQ3r5HBfnMZiXZcNzpbhsQUHkLcnlcvc6CErX3LBmYZWcBw+u//PvOkHUFxIud8+JOOFiFIsT+i0nmNmFl186LiFnKXOnrrnXKfz7LhpWTg0fH86qIwUrxc6ejl6j/sEvdEk1UoY7tVLMR4XCLHdmzsxyGiovdNl580TOlnnb3LnTZm86duRPp1AdPe1wav/OvTu3bTo6dILhDEgo97RPmT9j7rSZk4v4yS5qFL1twoxLJu46+fiOfuS5EPyvVqAwZ9tILnH3CTm2PFg+Ipvy0iv6ImR+6tEv/Wi/BMb9v3j6ySczkXMyZvFlc3/1AQyk2Hb7q8IQwLGNv/qPLVIuyma8VHj3JLccfGBohrw4dWJCrkJ3vQjAYwB46n4QTUrgTanGncaCW+9NgejmBuvf8y3PBU+u7gBdODKYy+IymjCQKRdRfsdiMgnDwaVT7x2PAAmc6AAS4DgY4IAAgWh7z2KIKAgcdPAjnflghQMFnGNHrbVTRyfiNmWH5yKN/dQIWZEmo/lXuxDgNJTcqU0yp67kjkAUP+5kFmgcrTLV8lHcuUSuRScHWpH2F8zpGxgmV/FBxxOa9tQ/W5RoLBzmzJy6oL17/Ei6/8j6vSf3DIM5iM5/81QFmo5WHKooD+gfV4RSut9agIFZolDYQk5bBt0DrTr7K+b1JGfxzWumZTQ5dHLj73/w+ABCaQFEffc64AOHRvA84u4pcuYeczWnyb3BNc3wXHzriAi0Lk7TIDL/1UsAPIIcMAHxtw990214I079SBBZHTTweydPHRpux9uy0JyFK2fJC2N2ObnueoL6MUIaGyFfjwGieO3zIbphRkMnEuAb3b1ZJurHhFPHkOo4P3hGeVDZvUhY7wXNadxCg9lTB8nRtf9h6sfEIEmacJ3eR8DpvH4WmRLRsmd2YvF3twevF5MnH/zT7Bf/kHqq/HpY3po0sLDNNfbWQlO2YL5c0464clD62/2KNR6e/pN4aCNqgGv/PoyuMpkK5Br1h7nfT0XdmDz2Fjh47Mf9OIDb9kfIAa/4FLleMhM1kNv5Lu+bcELkse4xUZslX/sIzj2vXk9sAJycVtBU3Mg5C1/6v39RrCd/F8WqCsy8wY26f1qvHLCTU0tu81bQ7MTrcZvf7p6DBh+KeI2yByhlFFlwp4cGrtPP6T5I044jVM858u6PnJTXiWHTIRvGPfLvXVFAtIMfSOWtcapnBm6XlRrJVzle7BkUeT78Q3MAD8MDqkCszn1cNIx6YOlErJG7jNqIBGThK2/9jSINT1I3+NevzwKA+Lddijn4iVlyrp7qqkd5PjHh5115BG4bcKsBWSrA2xNUz23HoZ00djcxcHI4KYxPIBrufvfuE+aAZ9VKtneiGSj6XI+eOTh/NR/LwU7FXvcll4v6Pnshbsf+Qh6yu4lGjABG3ZGKARFQ9otL+/EGxqHPP/C2rcPFZObySy8rEGPytTe/SxEgJO4e/5qQ4NVbKhQIisinP9eUg3tppUVdVXDVyC92YH1CjsaK8W54MER5OMVqigDmRJ74zQXmNBz6yZc+/63HiajQu2LlbavF8eft+S11+NUD/7rJD14PcOXLOPD9nQ+n5vLSPRNQa7hdUXAuGUet4pgVxMDPUczj78iC28ZP9jtpG0SMwy9JUNd6RfhJf18jz3Y8eTQFgSehaLNvf272b1+7/p8N8EP3vx86P+Tx568dXDuGz34Kbr9ko6L5zDtkOTAyr1fMXqEamD4dD/1/JEfR+ycUbde91FU2p7KHwS8CXL9XdvLE26dQV3Qm1ZhGd3dMCklfT/ep/dXe5F3D7hPGE5IEPu3u7fCzr5CQPP6c03Iv/B15qNK91GL5crzOuAA8ZYqtGfdVPKTh+5RTIGYPXt/2jdcPByDZ+x2x7vgivI6zsk9AtPFlL3dUsXKhOjRU3eVt9xvvKZJBsDmDaVWx8HGSYdLC+u8oE4+PQa1hbcsVWTUO1cxzN76bmLcm/p9nBidVBYzVa+EVq3/pGaRK4dBl7U6tuGh2SWDT3nTNBCgRzSNppX/dw/+44Nj5n84MEIUNnhEGdygF3J4GefpCLAfXKmDFQkCxsIws+E4TLYvezS5AUYB8KSOU5iEAN7KjC0WtYs8HpgWcY1PX0OqOjnmb7/tiDDXq3euZiyhqYxGI/klCa0LTMe+dS+2YibhtHCqkeVwwG6uxGucnO2dy+BkiIKtwojKexn8+FFG84PkxGggXDjidEy6cwCq5QYFb06p7Jb6cgrDMrkWIJUlUS1DtqljkooILZpSALQWRx1UhC4hlMQWidt/57tPfRRmQxgUc3D+mnivbcCripYmJuahvNWqfMKkrzvnQezAx/hn3oUH37VPBUn8lsQDMHePkmEw7hTOzB2COI3YU84jhCoAQr7/v81UH17oXgyIgvfYmoqkequ5zIe9LXDTtHNhyjWW8+xMfh1se9+33zJr93N/6n24rMfkVU9zAfNYKlAMju4HpHeBhIjFhcyEH89lrMMD4t+1DrpGbDyZRpOO/1+6Ez4hqbyNikINPkVtzUElng/yN6375Z/f1cwHaf+P+9E8mUD+ylhzlxW3AuF5QaTJuI9vJQVzRGUVtnA1QJEaM0jIE7sRD/Y3MM0QywT005xwuzQOUjXXPshspmAosGcjcyUw1cB7eGrLdiHEzgLGTcR3sJ0dnLU5di7iGnbrlSnAhSEpqQuBUdyo4DtZAHNN4BMHTqu/ukUAKf/Fqagl1xZIeVw7V9R5i23mGj+sC9hfyiEynseEy1UtDABB9Y0I9eaEnCKW/3ZYFWqyMm1CDPPO/JNQQfuap01BMnEUO2KEBnHHBGWfA0ZK8JTFuHmpQqzTIQNEQtXZa9XDdOMaIWnfX3ZOLhfLsW3tdNWL/rC7qevSj48xA1rbRs2ay0tpc2LkfZ0IRxoHYk5DHrAnNZeH5Xwcil5CFOmPLGyZI9UZe+LAy4XakEtOeW6fWcTt1fPbrVAecNxwxg8q9xIQmneXkenAfzowC6iIax0XrYlohNuUcff0Tcq1Y6QYgb5/07Zk9XoPr+y89qghUQ2gb3jFT1K0MrX61q4GOHCfFb7/EjWbFeGJrch9E9HaR9OHGcXKdg5OzasCnPdbd4aoBe/iTfzrm8pAy6aJTXsd1uOcFt6XB6oD67r3H1/bhauG8sa6WYOQQ0NdNqR3M9+N5zKNVdwMyE3WzZO7WdefTwHXqW99aNxS956LlFRp6MvyK68Hd6kB4scCNFro7yeUU0DGGpIRr4AStK7NlLdUP1I2WnPpZ8bFL3OsRjeOHhwcoOrjq6dEDYy94wZr5RNXLUmFGqx295OkDCBIiBhZRS9A1C+VSPyb83VeKgUdvcNXD3agbTdQ6J78E0HPTW9ZQX4HWFQuzUEtOegCRlOnoACrD5NnWNhpZYfObAelHNxBVD9xrFKiflj6DuXmk/b4P1svXWUiOqg4gApTbgKE0BzG9j/yz4i/fg+FRI5pH3p61fW+DooMUuTGJ+cGEPPAOnGKZmAGVQg5gGgUKbQRqjSnjkOcRA8NVp2EhLmp35deN50ACJCU8BVTCWxLTLConMdkx6jvDOwjR1Zy7Kx7oR40EsxiFNnKtAmmV6hBQLKOWYDx5K5uwEqOxOL5+mJAJyQXuLoOnf5PiNClnHp5bgufRBpjIqkAcIU/lJTpm4DQ/9LN/PToWcDkIyJ764g8QzSuuuBrLS+RaAWKVrAKU23KxvOCOLldzLn75Hy+9ondmGaCye8sfHvnTQeQtIKaHLK9CLqGIM3iC6nBNbw7OLpSLWDQhihZdBuXxs3uHx1j/wR3HqhCcPG9sc+UznEvShVMdIK0pduYAR12eg2eTL0S0Hl2RJiV3cjSfdgOWz3HUkpwOYHBYlX5E6Mjl1Ah5ZrqQvIXqOU7eceL4qDx8Tw5QnghUonMEovpQS4qlh8pRLYk1RVdOZ+jqbldLwT9ybxZyKPTi9PcTT2FOJzmKTyzPrBWxcGIUZ6+kFXhL4jPzMsuhvQeoDhKPI5ibRLUU4p2v8dCCsgkLOcujTaNVZZ3vIken1AWcqMDBIWBWD60rK38Yb86tuBidZfIJY1ux+PIr3FrDyp3Algrs24HT26fWENfOjaYmXO44Z391AHkzmd0ncp0xgcSfdDiyETFzsucAXF7CQ73o7NnDubGwmxBddTwyvycqjzC33XVqY4TKXvDOBeQpSkPgsUYJezdxrjzw1FFCVidwpI08RbJMGSPHUxjeiUVm5AJxZNtrL1YNT35uNzpHOP71P0Wrc/qjh8m5PA1n537AdgzKWVjORyK549Pf+P4XPvKisWCcKxUorrhy1Ziw85FHn8CyfMbNAbacArR7H3DBZFceEGgcxDnUqJWDyMhVS2dgHBlxEXc/gZg1ixwVagtByIKoH+oKTDUZYAJCE6aaYI1kNUFNoWDumDwiIHpry9tiSB9L5Wj/r1AsLUOtjXb0mtroNCtFzkAzRtkLs4gcfBLA49MDFlkub0X0XXb19WuvvrzYlHTx1dffuPbyibB8nGwk/qUfLuwSvqZQxyIr+kjSyhUX1RPlVVZwu7IHNTJonzVdIXrMZHh13XE1Jyauwtm4rQZ27gNWjne1ELjA6z5XSaPAS7zuBXR8vQAle8EBxn4T0IlxCALJ376JWr8HqwnZ3/0vAP87rIFx/r9vmxForOzuYy3A0gUYTwYcXLt+g3z55bQiSn/Jqlkl+29CA1nvlliNFf8X6Muio10F+bQYifbnBBEY/7lbIkoLB+9EABZX/zogYny6JNUxXjPgTmygtPB3hGpT8o7Li1mo/r6fuiN/wKJdgrdA4ENe9cwPjEf1Ah/21LN4YpqYgVtmR0myqWTB9V1MCedtWJgmpMmmFxKo991bsgDE7DqsRnqPezUTDbPCiS/gtNi1Bmfvn6uqEeVL5Vw21dWCcUka3TO/W6GOfOtyoqf+fyiwnIizBWMmjvMPMTjzxgMO+04SqDWu99RrM7sYAeZXPhBjIlTP3T9sotWlnYjHxsjrVae3ORcvp1XR/qRnXo1fwGpcJ6e2uWe+vksFxuHAUxjzqH1DJiZ3IzAOH8eplfU86anH6C6uIgLiFRYNcRow9xMnf99FS8mlZMXqtwo0rHQsUtTioBYIPOhVz3z/WATI9yzDPPVXYAlTqd1CrCNenDIvceFi+yANjbd66nWNi5e6oWzcjZh7/5u+W4gUMp86sUzLYfz5jnadKno9ZelKOa+d62rpMo/umd9GqDkxyyKpf7toMhYiAptJbRZG4JLeyUThqu6oyutJ0/dmWYy7f+GZss4bEMaSCW6ZPvUeizRUK9KyBPhDl2jA8dCuOPcGp0XR8bRnXo2fqVElznVTNrASE8l05BrcQ+yZgZy9C2fjwjmxH9Ew8ElPPfXX3+Ip7pfiQJcc6Hwj9ZMgWooXkBWqPyrQZMZyc795cisEHvSqZ761HcHmZULunyBgTJmCnANHxIxuBEwECOzfiryBsbw/i1nc2zFpyD3o8u4oGEYk/trPPpZE58TjYK0oLlqJ288Ta4aB8cCNV7taujpG9xgvJajiY12wa4JE4KI2l7OtmjDdMsRUDMg276dZ40ueeupvRD/2KJ90IebsqOIoUH/w6ytQCyR3Egv8uKSmshgthhvLtKriOk+96h+h4LtWSvLe/0mAhBcq4mwlMAcHXIDd1IOaMNammWfx6bYCb3Mn41aItu27qgJpHQUfWIs1p+kXOHZ6R2hKTF3naex/MWoh8CGveuZPFcPeLygC937eIsBCHNgELKBWNVGP7bCskXbOCVFZeMHXSpWLfxcwrk8ipll7Pa2m1Jq82v7f06KaCdUrcPjmUZoW5Q94TP3hQivGmiy6x3gZnx6WW1y9aggHZzYgthOZU4dI3Z9l8nqKgzMxDz9fC2iTovl5S9wwFv/E3esAhXTK87Fm4tJLiYWhrw01h1i6I6bx5B3Wgig+4ZlX/UG+bpk8vI4QgcgChGVbSAtzMSASEU78JQ3YtQo39OKfJ5Uk/QROFq6TgcGVH/p6IvfuS0sOvhpvQuFOYuDHE2lp8n95TP1rZakpAvd71VP/yVWYW7xhSeaAvDQFc53aTeybjMDtS1eMuONh90bVsRHrdck4KVxeJACXuwMmGr78Px2pSLM2e6YTBj9bbAWKF+6IaTx2JS0YF8UYox99xlze+2KINYyfAs7uk4HpXQ4x+4juXtyRCefRg3Iwjlwk0WLgqvGZMAuFYgEIlbH7gzsjqJGKd3k0vjlOLQl7wGPmPxmLmhIdGz1zdzfEK6a5qDul5HJ2eMIcolL76nveX+BqBM4PkGNHprVF4e4NHBTH3Kwgmv3g+6PgIE0m519CtKHvFFtDnLfds8zfnTRH4GNedY8Zlk1d66LWmE+GswmxEAcetYJnY65w4db/a9y0bz4CGQ0FRC73Ii/+wXd/8IMfIMUJFwLGz/EGVvwHYuDXbeQpvc6zLO5dgFq4LIvu7sB9oQEsoHYzzmKE2BFVVbx2emZEe2qfEecWXFJ6KEtqPIwAxjXdNuOw11LrIrWf/EgNjDXHHDv42SDPw2e+HtAvDpo3I2//84JoELORSzHqBr7uqWfZWhLmIYw9GCR8wtNAFt7699zgseCcfO/2A6UqgvarPlFyOTf/8IH3VQL1ZZ5xyXIXdaM2/F74xJvayPvC6Y7S7ww3Rcj+9s3VBIb9C4j64nfVkUrq81GhO5Wr/zQCWdemWDWPfuOv/pw6sfS3NFn45aoY0nD/vz7Ti9W4XDIqk2ky/gQ5y6cWcyte2+Fo84ZKC2v+AOBHZqqB6B5yd3+4FFhgCA5mAghc6tQ+/b23Y4Rd3zXFeoXK374V4PGnXkbTp7+9E2+g0+tOmOKNF40oLzHtWnDWbZY3AcWXjyXwvisxGre95KX33PPidozxbw0WK04dxO2zO9qLh0Z6OsBPbsQy6ltctLZzZvXQgd52ay9H80EvJCc3rX8CUd9t3a9xeP5sJ3+/dJGjyo8HyFXk+3AWAbwOokVljLpo6H70zwhmj00YRc15IS4bOCJvKqlJQnNJrQAFAM9oGFQnIsCjwFEdmbvkrjouXOCuBrBuUPiSC9o1GoRyLzgHnm4OWUZD1QMEGGQ1IEA10WvAITjNK6RgRDlAyGixuGm78OJlRUZZ48cC7IlNyUGCQMsC5HVcABJ1kxRQijkuB2GZRejJ+mla3kQc2ovD+TMZNSbPdzmbjps3EJM/85cNG5/ZfDMF1qx76n9QYPmTTy5XgYv+/NTdI1/de9P9z3sY9Tz6x7G89BdPPv30hs9giFc/unnb1i3nf33L+vUbt25bkTzwp2N7H17JvCee2bTpiY8m3X9Yv2nL5s2LMUgP7EMwvrtgo4VpfiFCujOlvtT7hNceHqNgj7h/mxJ3u/8The4N7j+6k12nbuG2q7XSD9grvO7zSAIvcI8Dw7/u3Vdx9+zk3G+797vvL93sPjzsfvsc98pg9acTorkqz2TgYYxFRj+WVwPh5OCYegmv88cvGNs3xkh4ie8bONor7s+q+3v4N8/2cWl8jKmuP/Li7LvJkewdU/r6uoHA19KPtyXApHHfzt43qfev/Zkrxl22xy97afYfpcLnq6++LvuahcJxIkzpHDZ88rUh4QyULZkIjp3e6/Ueyt7NLfe+/JU91rbVX/hnvx6+7FV/4XWe+WOaz/qutmH3F7/GPzbbdzPx3ntecRkW+KY//dUvPdAteMzXwo+zv0L8MLvpfv/YjNWP+K2v8Wf+/Stfn4Vpz8kOBDOXZToT8LaOTgR7d3YGQDzid5bc3afyHv8S/x0/qPCE/39/amf/j/whlvLMeTzyA9/0XX/VlfF3hQfd/X0kgZtOubs/hPqOxUVW3urnlUp60i/+ktfu7/h3r10QGbtvT3TnxPGic2aqMjSCw5j2oRTRs8+Xc+P7Kutt2ql03S+3xV8x5kR2xQH3d37U320z2HQLBz+7y6Nf85rsS8y/7bHKdQRE+cIlb65uCMyPR3roPRxnwNLBgRkb/Jnj6bp5POKvW7R8AX6k1GfAhV2ZccYGG4dgkJKJ8p7sC6950X/6w/yX1z3RNbdyKPmU/9J+VL11anpi5Jp0N8+NQ9ms+3z7G+991QGfhcGdL/8fL/mE/wBuqv4elbbHn/z1G57y/2of6C/c7huSZEf1/S+5+2UzJi45CbCz0hU5cy3MbgfonpBa4F1ee/LCa33o2gsuWLHLn3e1P8nyn88snvY5N3OIq9kkvueVjnHbvPajssBqr63cIN7p36PIfV77SM8KPyDb5PeP8bprd04BUR5zkjPa40gZIBv77/3orgszvWMBL3zwuQDPf/DKRQ++CKDtfz+QrHjwbl774EI0/8E3GJPfcf/999+OsHjR3ZF46jsErvj0XZi45qP/8fcvbmPR398nbvzE8yd+PHjZuf10xAlDPXZmYZo4ADDhA/95JHNqDQhmRkMTrYu6olnRUNQVjf8+I51ykwzIhivOmR59234A/9ynN1TkJIYlASAkpiRQmyRYEgiJwJIElCRJEqhVqImAJQEgJEmSCCUBQuIxsWz564BA2QY5G4MMhB597yMDkXOwstk3ryRC+odKgbOzemQTgG3/4me3R51zLBZftJJoEI84Z2n0vYMQJR57/y+kc4sKTHhD5lHh2GbFswbSuO2tHRFp87/NFTqHSF3XvQai2YbTI5zNyo5f9a4riBg/eV4fOlcoabvon8cTvcDD3xjiLA9p+/xFBQdWXjQ1oHOAcF907xJw4/Rvt0c/21zE9ulTwel54bKJQTq7BDFZumoVRJf/cf+x6Jz9bsnQkmUSkUmvu64T6ewREU247BaInnBq3W9w59yYJn0zENBx6T33TEww6axQpDR9yc1tkIXAT382ROScGeOJzx/GPMOue8mrJhPdkc4kCfDSxOdcMQKRAtv/83eHKpxTq1ue/O5RAhlcfOdbbp8cAHSmCDDruvDqCyJkXmT3z79fknRukfc//tv1IwQy56LXvPnOJZPahQCNjkBg5YnLzrtsLJCqqOPf/uEYyZ1zrMuO/+xLP60SlGWUr3nyO++9dGIiaiW1phoHsGTsvBd98akqxKgSR37x5d4ycs7JVpx08fUv6IKMABz4y08PPnlk4FR0QHVc4CC8hlDsHT/zvCVtJ4CUorH14bU9CHEOH3PjDWsWiRgJgsrOjbt2bjh6/PDQIJH6Zh5DsdDR0zZuyoIZpQiQkiT0P/ajvR1InMMFIXRPXnvTFe1A5mYAp4YPP7L3aMX2HSmHAm2FciFOndgLnVkKkEUlCXHzjx5DJvEsqPLMGyfOvGEc4BkyUT9NlZqCBZrMoqxgVA88/f3DXWYWeTaUA8UxFy6ZuXJZF4BHByGjoRPdQQnB4MC23b/a1V4KJufZU+BJ94wZC1ct6ZlGvgKywcObDj+1u9xRkHj2lRNisatvyqSpfRMn9rRN6SlWlUBmigwfOnD0+OGdx72rAOJZXDiABZXaOpKUBKLhjJwuG3UlovxsAlZQOCB8JwAA0HAAnQEqoACgAD5NHotEIqGhGhy26CgExLYAY7USv53pjvj+p/tPo72H/KeSfsI6j8xfn3zmf5X9WPcV+gPYA/YzzvPUf/c/996hP6Z/mf2z94P/h/tV7of8D6g39P/zX//9rP/tewf/iP9x7DH7K+rv/3v3e+CL+s/8/9yv/d8hP86/wv/69gD/8+oB/2/UA7B/+dfi17iu5X7X/WP2g/dr1n/F/mP7b/Zf2k/uHtZfzfij5v/3Hkm+1X4T+5fuV/h/cT/Sflx5l/AH+j9QL8b/k/+M/sv7k/3X3svhP+J27em/4b/oeoF60fR/85/fv3m/xvo2/1noF9b/+B7gP8o/nf+n/Nn/Bf//6T/w3+4/svkRfYv8z/w/8B/Vf2j+wD+Uf0v/Pf3v/Kf8z/b/Sd/Ef83/If6L/vf8H2ifl/9z/5P+M/0n/n/yP///AP+Q/zz/T/2//Mf+L/Ef///1fdB7H/2L9jr9cPvUeYxJ3ISAePh5Ybi9UHojmvcY60wKOZjsiBQz2y+w51/aAOAh90rL4F0F5GMjW9J0Opu8/7cVx3dFws+Q4SXOWS8QwjRn7WrC48r4oZ65O/ZAFg7TBDiyc2qx3xZ7our0nnl6PL55GxcdL1g++cV3pOg4w6rQHd2sEmmcUWMrhxO3aRmFa99+yWN7Ne6mWInTtxH8TX2YqtovFGmIDGun8wVH3nXSOXkRYUddOhYVmwGV+X/CyuxwDIibm/C6vlIbZRQl8HvoBD9UTrGI8w2OHi6oKaR4jmdDZF2YSTzwdN6iat+MKxhxmTjMNrkA++uXNMlxw/puCQ3oVmUMFrFCjVbPApSnH3v21vR5KmTfK3PiRIDl8bAkeC1j8/E++UsjSfDG7GsMWXTp/4au0A5v50qd2w0kXWbrE9WP97QSvGJhlH8gtTCG15HSQ1LZMPzhj7Zo4Pb+CwOzlo5ir5yTTGmOXDvgOg0Cwenwx/vlFXgsLYLYkr/yWiIoOT/hVUH1P7Xud0cwFrzKeRght0sOh81ed5p8Zjmkdv+/vh75pvHMZOrDiNld1Z/D9SHxkCHMb0lpAaEkQA8eaC2iW3DyVKVkigEOkYGOx2uYWEm84ilcE5hv2/doeFiBCSrPSQvg2wd+Ol3RJTkpFzqsz8gP6wJL/wOIGwUrgjgFKNv/Y24l10mRJqhinQhOaxGU4pJ/Vdxx5Wq39PncK/i+pesfriUIZoAA/v8NZAX4YlOYYZPW6SRD1hPN4OwsWIJiU4uDVdEpFuIa/mxqOwz2hB+d62aBXv4wAnjqKozKPWZF4Di9967Nj7faONE98504wBhTWIYjCaVtk/IMNDBFJAhSLajwk93acC5kBJEakHLr+yFhqtBnXTF+LQwT/X4HjL2kTErKCN5iP/2D1SBzddxvFV6NByhCDrfPrUcuI9V8PeBt2Pr21iPXibJCn0gV6PzXPYvpg8EZZM5BSCq6gUK1ZoqXYTZq9n3WLPwVgz04sshDhAL3aPYGhuavK1+W2OZjP5aOXtIZj/PhdvCruckCgWezQQr5Q9swxqx/cfn2tLuZI8rPxsjAkuv+miDWHAUEfgGuFAAZaKnuXBA0ss3u+9qMhS6NA7XHGIex/cJn4WQb9TWlzgVpI/ILw76ofd5QBY/+eaQczvMuZM0FqjUZW2K2anuzcOBlsXqmjvlL1zHgzmfSJE7c83Xi1DLWmiCufCLf+aLv+rzlBuFFCEe6qdDAxKrMv9ixXUJ7RcL04DCHu7r6xbAq/6jpTrXlhMZNmHejMsbvT4t6se43iMY90l8/jrOdqq1LSB6/aOXHDBhDH02eDinoQKpzo8VfPq6PwF0qFS3tYdQkLBNgaA1wSm0GLmEirMLE0l07/8B9t8sgP0/A80Z2aGEZbabnH6ylFKzY1DzxZ7WZoZGUuyThnPROuCtomjFqhJHqWM7nrUsmRD0LC4YfNycrxwh3BIG5KacMVISpXhl1V+8bcT24fuzqgHtsbY/1PXkRinGTWCL1iHfgD3icAgAZD9pknu/u2vUK4S+me1HKWdYr5l023TVu7oq3XlpeiN/Z9SCYZBqBQAPpvXRxqGQ4lmFrtiF6wnA+Jve/J/rGl6x74jvz5FJGt/lj66wsiThBQg3XgS9h2iKP5tQAAUXAlD/dJvZz6RbYDqZ8zptI0BftkoatmAIZCTOCCIE+UneSTfDIgA5PeGNU4jcV7O16jjw5l7ySf8lnGBfoO11h1TDKFgCNfNfAFOJ3dPcKaDwkD7XsAIk9qlZSV7HUmz1M5q3qymiVjJ61+x7XZnhMKA5oaOPaGtvMR80f3Ofl/FZxcLe045JPKEI5K/ZPMSuiyoC5hqfD39HO8YgESfYNdXb9tb0VdVnpgx0vt/1FP8EAxzyOp0FqXBEdePLU5kw0AXthmh3Rpgm8RDkTts9odrggDs/JBftnRLEPyEMNwVF93BBRlB+DFLiJuz8uda4V7dQU8ONWSfAiNJWQkR5/cF6T3tk06/5BRP61ljmhvKnX2Kv4jZRqoQlFsEMFXueJnBm+CA66HDOpYt+o6HSSevwO3yAgJw0iMaHqu0bOYwgGvZnmccwqi+f50oTjzEIv0oKZ4pmLCUPFVvmx6lNa514o0YRBf15UAFmKLWW81v1ZLAgudKvdK4iBNnoCocQblKIn7nD0B69l379qCVbwEFqLCZ5Opdab9q77HvvSXiVINx6RvhB957uHiYR5GyG7QdfHvijTmX8FxPAfGItIkbxlDtjQkYMalweCLEdTxwADlTNUVXhM22TOVFIajMwqWxK26PwvmWt+d/lPa6oW/+p1VGA1snJL3V4bxTHLy9DI0RKH1Il1tZrBkb/M0eezS8eYBaOfz67kFx+FRq96j3jL5LPuGoi4WTBjP2TeNsMRrZ/jaP9J0RJFdxteoIdutefM9w9OZfJHjBgNLToDriFizhhzP2KlFjOvMm8h5kUdEw/28OYBdFanBIGhTkt7x8S/evT18C3/ENSoqyjh93NxiEZjN5hVF5RN0vDFmZAvf3K6u0LlAOrlg9kVzQ5TQRDyN/rILlcyyoUZtniia6zyfsjWBedr9YnIfePmFYkC06+awWb8VL5iWrQfBd6omTfB6yQsZCg9lhWgqYidZcM/z4CG7ykK7Dmq3mdlRHGv4A4n9j4k7w1JjXUh9FXcJcAF2f1wK5MPvCccI4+KWsyaHwrnEsrM9nm0v9Gzqpla5gJ6C9St4Cz2BghsJyw9rJnMwYxykWrPl8rE3eXZtXmw7ySu5njwMAhrdgDzlWQPAcIFkI6MBSKqkmbR0N+hfG60UKe1qMKOD9Wqx7wpARKv2Y0hRLDoWItEKd7Ud7nrSPEB4NxBni9cyTUq7tdFWTA6afVXMa14b+DlwsLtIvi+4ZIfnvxRX0tkfm2bxLCHaoqyaitplTsglC2moWMysNhZHpqgc0ID5UlCjSWfo6RsfxD+YC+/VWPF4/cc+x46LXUg+Md+zb1cU5rflrd0qgS48+1g6TvF9Hx1UFcjRUGz0TBQn84BOUcaMypKmhIjkvuUejkJHEfVucrvfVSV/dHqq/xXMlQBiVlYpxn7QyIj4yFMvuLoMmd5yQTiFxDDV+Yq9TA29mtm9I7JC4sUMqgyH43ct6/Lk9LEXMmZSJCXCNptwgC3BxYGTwj0RWGGfFjS27YswhN1prjhFfIl7Uy3YI9RCpPADOj793WJvI2QSjYEmNx81/uaKR2C+TzO0SotSxrq1nJfE/YfQkYEfCKvEecEMQtKNwJ1EVkLrdCvAl4gxDVyCxX9LIbDycsTVXEs/RsS9jKFNz5Z885v+9To2xQbfKFOufdQoDj96/NNFWrVw1v3gMme8x0SW9YEEBxkgF3Mib+F4f1y0J/Yco1BO7zWEi2O038y5pAB6Q0gQ3TTiOqFf7R41mfKKoWiUJ7gRHVgUncCRotn9GeokHDfPJrrHIWe9LvBFGMAusIk4uZs246d22QzPXvzKZWeIPvKem7s1v0O1GfbwYWjPXkwHKVlojG0B/uzb9HmaGvsnmBnpardI4vIOyDr5dF661ZW9zDk1jAN+A8tk3t2SjjQFRP91zBTp6TXFe4MTXJ9S/xaMIlXtKZhqzxDZaY2qdt+Z2ZNJDkUKk3ALt9i1mF9S3Dtvadh9eboQNDYgm8ZyeWlo23sBtNYYKO/EqDZvWpRVyXwKZ/nSjOl5NURmwOft/hIZiSr2hK77bJUTNxb/i2W7Ik2D8nZVrxUu75t/9EPv2t2Q09s2gSv97Os2b3Q2FbvfLdu9sMmxm2U2Su5aMmDEgJbJNw5kwuBQQffAdM2KcM+2NGqqP85RTSoapITKac30U+1BPeHwMBuGB7Z0naQLCDsgjelwKs0rAbWAj+s7mg0+NZsCVLfZh4+H4kge0v39aQb2kpGP7oLlnWjFKNB6c7pKezqlfukOd64ZyAA+tD3VCNMLDEXbz2OmgQx+gSd7Dqc8AhfBRklEJZvi2BoqqTPp1wXODwuacskRW1BlormIo4722cyHtYrehso2DIaeNKKGw4E/MnEFqlLKx1siG2WfSjqZ2QwOWAVon4vT0EYWSaM2vHIfVX31ApMpUlulcC6YaQeO0makIFvRku6nppQUeiuJJCnNTQ+k8nxUGmOvCO44ZVrzKkLD+k50uyi07+3GrfoH1BekUTF8zXoYaEiIeF37RqYmCHmjM1LL+1gnC7fhGUQ2K42KgzuSTewG2j7qbmm/ssj8q7UbEMEwmYvmh2l4pH1Mti49H0zLzOThc1h/mfhA9H7muC/T5SMGS6zhhPkjk8YtVYiqvsAskClQpaM3P8wLteELwQcArOaviS0kWLACM/iLwHmgo88QXz5j4RrkB0szGaDGEqhBRi1PgcVxDTwAwih09pme/ij08Q8/6g2hLQb/AbO1/v/S3vOq3a9XR8DX6vXF1BcssHpaKFh0QGD4CVgKfzHKnXqwRE8QUuFnR+AjLouTjKApRmJc/H3ZHXe+J5kuOxrP6Vz18vNv2Cgbq11ELxsUoKNvHea/MdpHys5TkQHz8d6IUBlRULmBKSJb7HntbyPTxCqoTHVE7CJoTVzmdJgxxbKxQJ14JdKQMKXXyOdLUSz4pEOCTyWYMeI2tktNuWoiL2pQu6nxMSypdoD8/WvBCrusixzuomPYKug/OclYChm3Uh2DlyAAMOrnqTrUfS0n0IcVOIXknkXNPR6odC2aBV94xtGeLMD3dABpRYi/CRXe0ujdCtPpi9THRtOflCD7Z+YVvRL+CCpLsJx8/e8KDMwvPK9CSPe17k5HXQo+cr4KNoFCM+MN2mqpoTxfZ0Bc041VJauD1Z6/R9NhsEDdQPwuiZo0+YdVWNQJHrBibkBomDhjHmnoQyjGpMTIOKqtgUndaSZX1MpGifkg/yvwVR+v4TSEnqZIJAvWBQG7Jv0RmPZAvqsU08ApVuRFzMibvKB6J4+O09bs52AkVKNsvGPIkevSL7LvKDAcAHHaEjpiGgnIWOW/x1icRtcT7qG508Ppqb1l0SGp3NGOlj2D40ZfDE9ToavNU4xTmg0qDLD1odz4GwdJEoPl6VKU2w354Q/GQbYAI9Us7XqFKuDFiK0YkORYePTbUiCtsRbmCgZBFW2zCl9LkgR9BeTyshsU8Shxwa9+7Jv6yprLawvDrRSNd+TE2Oodd5Ca1pTVkUKr2StteB6z9nNjXo4BEDQYucX3MVYNY1uz0F8Nb+gSdWrMD1fzunIM9zISuG3M7l6HgqAW9HiNKeAxGbZAVyEDcoC4zINS5gwLuGjzmDTHv2zJCerugTz3ABFfWRqjiBZoHA8Loft8kx0v7Gs3u1llYvJ9JqVoRje2uataKP99GSluzmHnaiTbf5AExNc0SO6v9UkWAGuTws/PY+n79SgNm4uwZOhwVJwmpGKCGXpWy7sSCz/bLuzn8RTSQaeKBR52Q//AqXDaR4nkwt2Z+AZqxwUBTZWXdF2yI/yuZC6quehabdGFARq/qSNotbTLIyty1PeNeE7OL80Scjf+fs3khi1o/P4l5qFeDCHbOqmWOzeNld9NHxLsRPIh/x22NMkZT8ci0gCW8f2tpH69npKe2i7wi+Ovf9IKF4akgPPXqU9EwT6YBz2/UK4GDlGhHrAF0Bk1VFVo5D27TF3fQUBzrNC58/zMMX0n/HJssw5SG57rS1UKBOO3SOL5sBhneisydPFF5vsoKKTG9Nsp0gEQc3G8s0lBzVqbL321hlpvLpF4RMRwH8MX71UJN0UG+P/APVpKtgG83Yp9y5vOFX2JkYyDydoLwBmPfsA8TD9cSjL4KmhFPI7c8Qt8q9tsVhxfHcRGDpKUm25fM5YgwZUB8/g5EX2bTbXkI/aNqa+XM/ObglauMssA67i6ylnbuEo7v2/fPqSiixTnKK7d+upkgenJm1ZRB+ER7ZcrIaWYnaHsp07HHOlpZSfuQ3O92WMfr4YMFGbt/f/88hCXN2H67RwKhI3A8EV5AWKHHLzVBIwCde1iuGES16M1dSwV8Y1Ftrj2l0zuBRcYyDj7n/GfAsAV2uXHtqc4DqEEbeQF3mpQ3FO6I9Mc8GNqDERRCLfzvxY4/N82blYQBFnXCs7zULPOfAAblNrJXv+rzGZznvNgWKLIXtYFAuftjolOtbLW0d6VSzTiDa2ZZ95rsBcL3PoXDtoM9a4Tlm7iKrXmOKZz+M7j4pHADp9mm9EwXnWesI41tlE2l2hxsy59A2BAV+uQ9FemzpyMQr4gYn1eHpPNmnzi4alFXA573Z750IEBd2w0gtx2Ah35/6eMPlbONbKUCJ0ukhNcU7TIufDkc26rOeQcSWD7FwcBJAhorQwPhSdpkJnKjKLhWXM15KElDLhHjsiaT80d/P2nThFtlGyWyQELxfOdfvxlyk5OZ5FBwrDhQMr62Wlmho5QyFJQSC3GTZuE4PR+xKC0erUomLDNj/hP+L1A7ERvkrQAwHn5v4ci0qWa2uOir97+2tY6AP86upOQa8amLwus7WvLCOfNqlz9HALZfkEZsXACqi0I9yyZAkBBspfGUm722mmqBsCqgwIq2VsLRTLCJKf0zVzXbFtwYL8vjYc2huzYG1oXz6ihEc/xsCcoGt4QoL4sycwBQMbE1826opU3TGcGjR8tCSSiB/x/XV8zfZG1DPH7SrlYjR3RbDUxF8PN+8HqMSuP4IPdoCKEVml6wNNQTzNj2OMRoE1/DE7ZMd8id5jMXQbVJNhSZxtntkmPvh/MGMNzjaTbcKXNJpjIafxR7MmguXK4Pgq/k+wV9mIAG3ObISKeDAJqTFuE8HUx574Du/cimZjC3tA6TEx6/+E5o7V1ETRecTN/tWxrbNgcMUhyMBIVDXLzaLg0ME60fHQzf5U5f7yZv1YB+BGRkF0ZjpKXv9LrJzztuHiHCbt4YSXppc5blbq/rURYiJ6LJnyojNcOVi4BXtVhgB0tefQVkvOnrgpaKstrOFMrLEiDfCR+Fyd48jVir/yMWpjMf8NFqAhXe26BNH3OHm0ZZkfqiOCSGvb5AuLJwbTAFuVJ4OnMGCbn1bRSeEWpS0XFDqTFSDGhtFh+hCWDHvcLhVxU9kGE9qdyZGwXRCoelIV+8eOzqodjAYx9YMniztYRffa+tq43l/yh2cNL4BFmYfCrSGYf1QwX6RSE7mVSvY8AoLeqjzz9eVT9GkyCe6Wqco9G+uXBpEN/0YFR/6W2ArJmhVIu4sCmy/ZwUo3W8CsPkwWfBep9gLemxadubx46lAFuBlcv5rSGxZxopVJ5maoym0SsxIG5wPq5Odth9hEj2yxDBbHS3GUuwVp5eKoy/ZghiFjwhMTf8awAUPRKaoVuD9bmVUpS7+HQtgaWc1HDL5vXbGw0cOSUIKcAYR5yqxiIznaX+uAW0chXnj3otA1feljT3ZFHYVyP2i2T9eiSceMxesWb+DYO4/9C0CofdqIHZEzyAerEobQy4HSXLZwYuRVIQxTO3KTBYGeJ4M8c207E0guw/X194CjFl2LfxcVFgo7vjL6vYUbXc/72yiiG2UgwoZn7hX9b9xGIQQQmCXt6sY8keC3EpubrOsfiwW7X2ohbBk7SRxVBG9KXv6sDRQby8k7ku92QPJsNPK4Z0RA0w1PpQ9+tWbyZjnw3Q2dsvbz7oxEte3OAO5cuTCWzasbYeDGxMLIUSXrXbNaKXSFARShRfWokLJUY1TQ5HwOGSNt1+7a5qXOkGrJh1XiBGLz0yXYCNlVIb65qii/nnId7zNLoDfAvmZT5ugfg+4xgYogtsxKwFzSIFayE7PGVPb4mQTtRB0cli5SGG1dlb/N1qDM+B/6oS/qvQj2qICriW7EUexpvRfjD2o8BzGR0PY5Zn+CAWYS0nys+v41EbnrFpHbzESllZ2BvaTcbzS2rTW7q46EoIBiCQl+YhHRd0+heuw+QCwN4+BW68BSSnR7G102EnUA0r0qdEzZYxKGtWwFTwq20/hjuRYj34VIuzzZCyxhpnLq7/SB+Fu71oGi6Hz2ojJUW6vIAWvKXPRPjsnt4THwsIFbgelNW+dXJWpaDv331Vn6SujzWmgflaNFZBKIuiRLHASjRgNaS7DmNDveM0tgENzj3unCfcLy2su6DXTNDeNigXlL9MZ55G4ScHQ7Z+GiKgkZnojybuX+RvXXUcsPqesL9V+Z3SpSMOFSRAIZZl1KZb/zL5zIOv4mG3ph8YZNK+tR/bVN4TEtGmcnXOlN7TLB+pDUfTYSBCOfZeRtTWGzx7wMQb5wXyvuxm8emGsnLxirWg1FKzan9oDtSK65Og8QgJ47y1/fi5OyVPFntIA6O/HsniZjqnrYxv7gM5lE3ZI5uOaSBxC6BxK42K1gZZSeJjgOXm5VuCZpI1f5B2HsVb5VNuak5l5wYpBlaTvGjgWK666vErJyyuMZGnSr/iurjgRySNc3WkoNWnO7fBRNBz8tN+mOoE2REXF0tUF6CkhARy8PVjyovI0u29SEjZ/NecPS8DdK3+aWiK03M4sbot3zghwvNtomKsiaQoTfLR18XO7t9Q2GidJc8387CmVPPQV4x5YeJlSBqqJtw8idaofMoAcUIZH+afWqLlAXYtD2nLXJ7X7uKxTGyZVVaZIRmQb33db6zfZWLxppLRJLsaWBnf2J46TTUMSl4xoiuEVNFbm+7EZ1h0wLSTHYO06Tejbp/6XNIh6lZFNh0VBQg4ojYG3gfZfaSI5A0SpvXGpgbWqLuEsNCS7ghyJnqAjy7m2Wd45bOvt8NkYQMq+ONTIi+7kF2AmeHM65YU2dkloUe00iMJ8hydWlik2QwvXUMTVk2Lf59dZs+5R6AxtHdzNrwu4ftjfdgbhu4pAvKmXTgDeuyuNI0ImME+qmqM2/jb+wrA0Fq8thg4IzxusW67me98ISFMJ/LDidtRMy1YShYo4tsJOGgkgqFZtJH1FvIadTzGts9XuIq7Fw5KHztp5TfMwfFBxvxpEyTK3cq7/zQODkfWvODRBEBwJebPlkRXVI/y6yoviQ/V3iX0YIxx13nYNkEgwNOkD0IFW/akPULZMGgMD2j8IUWJkYfqvGDiyDJ9Rz+JNRwaZgdZDQmRvFDb/7wCxCykkjCiy1F7aL5OUIIfmNg+8suiVI2QVUZ2ZfYYQqIacf+MQtqVW8XsIYqtlPZaxhP1inJ8rDU3XLyqQhRClO+sW9Q+M/zymPVEpNJkVs2ihnGcSmFfFWDJp3xsARolGkGQDEZtmou1szrCZgAH2VnxAcoFPgYRS6x8SmEwPKj4MtuVglZfz+NAfih5jwTIASsZotT2dBYUGsgKwkT+oqL+GGdmBFhLS7TNWiPJY10T0G8gONXD2+/q9YcfHDYeSkrmTcC4lNiSTn1nXzmWukHJxQ7gh2OshddM43okO/D1XcLS4dVQh1JNd/Ci4i+y+/jeYzVgaOsufs8v9+LPtDIsM1SeT6lfzpyLyywCVQsJleaElYi5yMlKmPTVKjF63wKiKXYOMdPS1pX3Uk0+SgPuYrA3gKUZTpbcqvrmKt7yAJJrOzz8a9w8X0mc0Ji8WMoyCigvZAAFP8v3CVZcZvX/6jvz+hNGL2ekyfnlqbmcRKl1+3IL7hOAC/JyPS7yBNxy0taH3B9SfH13+Ete2z6cotHfeZ1jeyI3CRS5OoKu7OrOCnzeR1ziLwm/NXM6xhgy7zGGrVekmrqqiXqB+KrKl/eE94Xt8zl7ByyZLYnmxdw861DiFqG9V3eRG4M/wTp05iFt+60pxoucsjdu+Sgrqurk9LaedKoSlu/F7zkBz+u/fqmt48RQ7U1oCoCy7Am3/u8DhW95ILn8VXpYeQYk+JE2RRL2KEn4SXtwY+KCnu3NPCo3x50trHu68JQPdokWFfs8ga/kKcD/J2K2H4n/Caswa6+CcW3eM+Qi/UU7/0XL+s9jDIfZD0f3VN7TGYhOMLBij8wdeiI1CJoCoBjQDf2fSqPGTbBfNtPg1f1xMzVobRe3CXUPsPhB3x9L/OG4oHHuGCb2dfhmq0E6nU3XhPl6qA9tTYld2s9z1VRPsaDhaSlOKWQQfpL6JIabHiokYR7lx4CCExGs+xt1ymKcF7/INzV7COclAlryp8/eOD+3pnvQREVVjAIxTlds4mrxBtGIQkJlstH3q/FbIQuKIVmwtMOB/a5kzN7771dtOzPtu8+yN6hZamrSt/VHSHQoPuuLsQqZRmh/PLoaHjg7uhVZzolKvbJmQT+jHaA9Znb7cF8n4SMy0kfJekfoYSi+LELVTlaE4RoQ4Edd1qZj6VRBjAedPVAo3c+sodQOtwjszjQ/sUepopft+eZV44x3Nw+R6PlRgvhJjOPh8ortsUIU6FT3UfZopFJmtjqQmO2yW3L1n716UC6Zql+DCsWgcYS8NI9QFiU0nI2m15XwOxUUt9PdrXvZdCjNOOtR+xZ4KNrOKp+Dd2gxs6h7/iRiuRy5j48SEeYbHF6wQNsXIqkX4bJiE2XOjZLQB/Le5y7BkkgERzosvF/R+mMChJcVQrrgN4UWVh0glaa7lXz8UdZMAt0LpPgOZbEKMzz8BOzHWxpcdUu5T233Xum3PTTlF2icnYunddhL5rR/M0Yebl9kf5b1RI7hs6g7NYclcDw/7J7uDZApN+eMO0XMnhSwgBp7B7O9C5C2qgjR8E1eOCnyP66jy4Wj4cIBEJ3jEB97uhytV0VBZ+WE1O9DfGagwcVml83x3MrraiDcqCLQysYnSwYyct6M8csQEtC1WViwLDlooh6ebTuioR/J5209fe7cyB3PQpPE81jP8qfFj52ucszoSt9Jop2ef3uv7Y3A0kvi1/Kp2jQYAPnB5KSrjkxu5GrZqaD3I/ZfgeFQ1jP+jwFxnl4U1U3A5fjCXSwuXlsVnB7l8jTkrPkihGX+TSCM9OB7fG1SVwjqtGX/KfRPfM/rChMyEJ1R2TRElJfmNw7VtX9aEFAhEZca3fIXn/x4gPFaGIJ/+DRqNkLsje+sMULYQ+7dqC4ZMQSfr5aneVsu3tITrwiR3eRSrZx/qGD/253Vi/0cecp1USEtJ/1Z0feaeBIv+Uo2tCvXpYbVxrQGRPpSHWGepeZTr5Qr9WpeWyX+baJxORfHVggGpvywOeXmpr18ZDdrRrUKFEWS3enf3ZtobGjS8313s1Zgjcfm4PQsI/4gnIFNKyofIZZJTWgjPOuAoIEQW5Ys4TEr9Jzcd0kKBb9nvrBHz+FuUtLOe8oCy142iSaKVOAq9OpSMv4cdieBSVW2AcaJ8FYJpHDlahMqWVBvT31e78SNEY+7P6Mbk/8XK/IKwOS7WdiffT3cr/C1eRSP3kKvz1tf+Ym5th+BGVPOkeiDCWtVDneGG6HeHxnjHm4F4ppYSjiz0SynFqnR9rjSKQARnm0flEDvIZ2Lg3fJRqbwp76Vppj8+2H88MEfcH/5KyZ2/oLyYQ6dHwTCfiKRyW1GnHvHJxxHfg57Vbuu7mucUeUVKUA3vFYgirAR35IObJGcp/2XeA3UJBkSMYHPgBsGLLBvn6F+YW71qFSq3SCharKxTy8ladYPW8a0AdXy2YVZ26qh63tyuFKeHTK9Xt8kvynMGg2b3AldKNZaWAnPC6pH0gWzVYCttT79zcRM7FO3zjoNmvRr/ZcfNnpN34arEZu1pUHeaq1FCY9IjoS7Z/bueAWIE0BcSbQQ4JXwkBd9CFNV+fVk82ry+1Qx+hy/3V0ujmOcvDszvkKsei2HF+sx112Y+hbtn/dOURxYt/mUuT1blQFPQg4bbZh/7Ya/N5ihcDOE290tHwn5ObXS1MfqpjnLUCMDbLzYHpIcYprwsrE1JdwvsXoPz6+5K1xd6BRY53oBiIb7zBFZYhuXjRWXSb0Hm7xL9T5rP9vq8t/6+ySRgfxXA1HKSSpwnidDmIqjRrqiMPQTFPiBumDE0iwObpm2Nu5fiGaM17qco+2QcrWd7/01ueqNnJDvpZvA/t6OuTvYescUvRVYpCvb+H55mSwiPiRqd/764UPjs2zMlBXnhPPdbXpPrC+aUwUf1kLy5zDSEhJIeRG31r5GUTq0YIs0Ig2YMGcU1MekHXIl8FrZSQmHiflulFaplvIG+prRXvTNhusEoijpesK4ZxMk/ZhLfs8y77GRJ3X7MSZ1HUf/CToysC2r1ZYd78CLQ1YbnJ+LHfWz2v0tM/vQDZ0sk1mLfoGzcnzGnnXPSbyV3W9sNl+XTXOsgDnKjzhNBB7RmOQ4gn3RGvxYu9Qnx+oC5VGD4QQcoKMgOqGCGllqG/G1niub/6GoU1dWTpFeJ0vHsdarKt8XWnklbEA5ImfPUC2Ic/BI6v+b1ubngWk9K8+ulMu1thw2AHHajfQBMM7yd/YI5ZHX7g7jqxfI+8BZqoVdgS+sBhFdM/gON8VLhEikpkX+tU0DljUwLwu+5QS0fC21S09Avyji1VQ+XPQkIQPkwzqsk9Kmwhz04q42e/xYuoVhI8FGRnicMQa0UgvD+RotCSl6prdi0k2nXqKAQ+rXk6qJ/G1sEOVNJ9v8wX9tSsGxMDTOyBoywEKleBJGwrKX1McMjmzyf74zgdAVDTRHc7R+Z7ego9So24HmJ9MBoU0NvU01J65+xlggji+O9QovTOhWZkXjpNLsHdtBDp92MdlYeLSgHGACaZK1Tqr87y4EodGd3euttg56uRof6gIiX+MD/qr3Hf+iLBXChKIJgvQ33MY1wn62Vpwm48c7npsR70043E+6nQAgsgIjtIGLh7aQVV9Stj+AgmS90yLcHFA81Hz/37gRy6oxK5YivTZeL47rRrsL7FIAJK6lgBTv5X21sceHadAHkgZelq52pkMojzQuxvKmLtcqQ/YUBsK2/EGcdxXBOeotEyq1FNCgDr2nQwg7RBgIaxBNlSULbVUofCM6AZhm1cWibkEyqR1xjkdu0hTOtfiBhysLBjzL+xpkBugFkHJzAAbJyOd5bIpjJNl+7XoMsRRMuRJofANCTQXyYzS1/mNhluCYEd/0BDPhhRXXrgOgAAAA==";
const VGS_FAVICON = "data:image/webp;base64,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";

function applyBranding(){
  document.querySelectorAll("img.logo-mark").forEach(el => {
    if(el.getAttribute("src") !== VGS_LOGO) el.src = VGS_LOGO;
  });
  if(!document.querySelector("link[rel='icon']")){
    const l = document.createElement("link");
    l.rel = "icon"; l.type = "image/webp"; l.href = VGS_FAVICON;
    document.head.appendChild(l);
  }
  if(!document.querySelector("link[rel='apple-touch-icon']")){
    const a = document.createElement("link");
    a.rel = "apple-touch-icon"; a.href = VGS_FAVICON;
    document.head.appendChild(a);
  }
}
/* run as early as possible so the logo does not pop in late */
applyBranding();

/* ============================================================
   Vikas Gaming Store — shared config, cart & auth helpers
   Loaded on every page after the supabase-js CDN script.
   ============================================================ */

const SUPABASE_URL = "https://aaerbvnseepubjhrwlmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZXJidm5zZWVwdWJqaHJ3bG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMjk3NjQsImV4cCI6MjEwMDkwNTc2NH0.PlBN-OGeiz0fEuSuzR42Ws6ufhHx_j9NXID-CUcSLq8";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Safety net: if the Meta Pixel script is blocked by an ad-blocker,
   fbq() calls in page code must still not throw. */
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

/* ---------- floating WhatsApp button (every page, bottom-right) ---------- */
function injectWhatsAppButton(number){
  if(document.getElementById("vgsWaFloat")) return;

  const css = document.createElement("style");
  css.textContent = `
    #vgsWaFloat{
      position:fixed; right:16px; bottom:16px; z-index:9999;
      width:56px; height:56px; border-radius:50%;
      background:#25D366; display:flex; align-items:center; justify-content:center;
      box-shadow:0 8px 24px -6px rgba(37,211,102,.65), 0 2px 8px rgba(0,0,0,.4);
      cursor:pointer; border:none; padding:0;
      -webkit-tap-highlight-color:transparent;
      animation:vgsWaPop .35s cubic-bezier(.34,1.56,.64,1);
      transition:transform .16s ease;
    }
    #vgsWaFloat:hover{ transform:scale(1.06); }
    #vgsWaFloat:active{ transform:scale(.96); }
    #vgsWaFloat svg{ width:31px; height:31px; fill:#fff; display:block; }
    #vgsWaFloat::after{
      content:""; position:absolute; inset:0; border-radius:50%;
      border:2px solid #25D366; animation:vgsWaRing 2.4s ease-out infinite;
    }
    @keyframes vgsWaRing{
      0%{ transform:scale(1); opacity:.7; }
      70%,100%{ transform:scale(1.55); opacity:0; }
    }
    @keyframes vgsWaPop{ from{ transform:scale(0); } to{ transform:scale(1); } }
    /* keep clear of the sticky checkout button on small screens */
    @media(max-width:640px){
      #vgsWaFloat{ width:52px; height:52px; right:14px; bottom:14px; }
      #vgsWaFloat svg{ width:28px; height:28px; }
    }
    @media(prefers-reduced-motion:reduce){
      #vgsWaFloat, #vgsWaFloat::after{ animation:none; }
    }
  `;
  document.head.appendChild(css);

  const btn = document.createElement("button");
  btn.id = "vgsWaFloat";
  btn.setAttribute("aria-label", "Chat on WhatsApp");
  btn.title = "Chat with us on WhatsApp";
  btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.21 3.06c.15.2 2.06 3.28 5.05 4.47.71.28 1.26.45 1.69.58.72.23 1.37.2 1.89.12.58-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 01-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.35 9.35 0 016.65 2.76 9.32 9.32 0 012.75 6.65c0 5.19-4.22 9.41-9.41 9.41zM20.46 3.53A11.25 11.25 0 0012.04.06C5.83.06.78 5.11.78 11.32c0 1.99.52 3.93 1.5 5.64L.5 23.94l7.13-1.87a11.25 11.25 0 005.4 1.38h.01c6.2 0 11.25-5.05 11.25-11.26a11.2 11.2 0 00-3.28-7.96z"/></svg>`;
  btn.addEventListener("click", () => {
    fbq("track", "Contact", { content_name: "WhatsApp Float Button" });
    window.open(waLink(vgsWaNumber, "Hi Vikas Gaming Store, I have a question."), "_blank");
  });
  document.body.appendChild(btn);
}

/* Fallback so the button is never missing; the live number from
   Store Settings replaces it as soon as the fetch returns. */
const VGS_WA_FALLBACK = "919587500247";
let vgsWaNumber = VGS_WA_FALLBACK;

async function setupWhatsAppFloat(){
  injectWhatsAppButton(vgsWaNumber);       // show immediately
  try{
    const { data } = await sb.from("store_settings").select("whatsapp_number").eq("id", 1).single();
    if(data && data.whatsapp_number){
      vgsWaNumber = data.whatsapp_number;  // click handler reads this live
    }
  }catch(e){ /* keep the fallback number */ }
}

document.addEventListener("DOMContentLoaded", () => {
  applyBranding();
  updateCartBadge();
  reflectAuthInHeader();
  setupWhatsAppFloat();
});
