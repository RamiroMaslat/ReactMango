const products = [
    {
        "id": 0,
        "title": "Pantalón", 
        "price": 50000, 
        "stock": 13, 
        "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRC27u0HwETvw68vwc_ZAt6DG1bGs6QAEoZYN6olTvGVrONYnvstZPmmScwM4-HqewXiDYWd8FPCQIpGsdI3QWG_D0cvrz6PcPY9F5um_ygX5Uq2CAoZPzd&usqp=CAc",
        "description": "Pantalón clásico de corte recto, ideal para uso diario con diseño cómodo y resistente.",
        "category": "pantalones"
    
    },

    {
        "id": 1, 
        "title": "Remera", 
        "price": 20000, 
        "stock": 15, 
        "img": "https://acdn-us.mitiendanube.com/stores/001/312/577/products/remera-essential-negro-fa8d2313b500986c0a17005231430778-1024-1024.jpg",
        "description": "Remera de algodón 100% suave al tacto, perfecta para un look casual y fresco.",
        "category": "remeras"
    },

    {
        "id": 2, 
        "title": "Sweater", 
        "price": 35000, 
        "stock": 8, 
        "img": "https://acdn-us.mitiendanube.com/stores/252/220/products/9d1481e7-f3d6-45ae-9761-33718c96772d-9194a4c7b7ff38a3fe17456198022072-1024-1024.png",
        "description": "Sweater abrigado de tejido suave, ideal para los días fríos con estilo moderno.",
        "category": "remeras"
    },

    {
        "id": 4, 
        "title": "Camisa", 
        "price": 25000, 
        "stock": 7, 
        "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqUL5kDm0oSF3VfT90KuNObAf307vBhdDIqpzyrkKlx8BFLo6wo2S659KRe1_eQZlcatNv8Gg5Woj3APIfkcWH9VOse_ZDzgGf05BHbTunRNP7esr34O8jxp6Qc66jvm5lAuhRF4s&usqp=CAc",
        "description": "Camisa formal de tela liviana, ideal para ocasiones especiales o el trabajo.",
        "category": "camisas"
    },

    {
        "id": 3, 
        "title": "Traje de baño", 
        "price": 15000, 
        "stock": 12,
        "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPjNJOCgK1FQGrSm1kvhEwZOZtFy-RiofwfUUil9BY6Dsvs7g23vAX9JwrJeVrq2GIoWYaNcj9vdfgLVJIgKlPoX1ORyQeNL37gcfwJtKYouSezrS2hIuaUJe2yRMCccfsT2fMGQ&usqp=CAc",
        "description": "Traje de baño de secado rápido con diseño moderno, perfecto para la playa o pileta.",
        "category": "pantalones"
    },

    {
        "id": 5, 
        "title": "Bermuda", 
        "price": 40000, 
        "stock": 9, 
        "img": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRndXjC_3xBxqVaqOBJOXv0YT8NSOH6-R-Yk3f3JnOvuhFffSywzqlloZvbo42RaZ_Dj9QC2TxXt_dMXrhXohXkQKxxtnOCrNUUYBeFmhaIbh-an8_PqVZcTXtr34X_JljCGjWxty3j&usqp=CAc",
        "description": "Bermuda liviana y cómoda con bolsillos laterales, ideal para el verano.",
        "category": "pantalones"
    },

    {
        "id": 6, 
        "title": "Medias", 
        "price": 10000, 
        "stock": 16,
        "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjODO4o7L2zsCi2qoLpYR3TyzO9V5-h0LjPxqDsosgVd3fEqP20bzaWu9GZhuRaRnfLW1PVRnleU4a7TeA2YSlL_24TqRlxAoYmPLYEQ8ervNp6tSeGNJ7QA",
        "description": "Medias deportivas con ajuste cómodo y transpirables para el uso diario.",
        "category": "calzado"
    },
    
    {
        "id": 7, 
        "title": "Zapatillas", 
        "price": 55000, 
        "stock": 5, 
        "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXwC9MSGpwilJ2Fb8W3JKPTQljpTyDxewlj5eZWiJ_nCuHxzxt_YpibY1kx29lTXslDTWaeTvUhmznSx0Q6zueRCP8x86LZuQ3XrQYxCQCw38JgHhTmTlo",
        "description": "Zapatillas urbanas con suela antideslizante, perfectas para caminar con estilo y confort.",
        "category": "calzado"
    },
    {
        "id": 8,
        "title": "Pantalón Chino",
        "price": 52000,
        "stock": 10,
        "img": "https://acdn-us.mitiendanube.com/stores/001/218/661/products/16091-13-31-daa019c678015efd8416715439694683-1024-1024.jpg",
        "description": "Pantalón chino de algodón con calce ajustado, ideal para un look casual o semiformal.",
        "category": "pantalones"
      },
      {
        "id": 9,
        "title": "Pantalón Jogger",
        "price": 47000,
        "stock": 14,
        "img": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-under-armour-sportstyle-jogger-negro-700021290261001-1.jpg",
        "description": "Jogger con cintura elástica y puños ajustados, comodidad y estilo urbano.",
        "category": "pantalones"
      },
      {
        "id": 10,
        "title": "Pantalón de Vestir",
        "price": 60000,
        "stock": 6,
        "img": "https://media.gq.com.mx/photos/65dcbfe2541cc613d2314568/1:1/w_1132,h_1132,c_limit/pantalones-de-vestir-como-elegir-y-comprar-los-mejores.jpg",
        "description": "Pantalón formal de tela suave, perfecto para ocasiones elegantes y reuniones de trabajo.",
        "category": "pantalones"
      },
    
      
      {
        "id": 11,
        "title": "Remera Estampada",
        "price": 23000,
        "stock": 11,
        "img": "https://cdn.billowshop.com/fc9308de-6f3d-b082/img/Producto/f0e55a09-b4e3-e473-fa1c-02ad3cfa9f4f/AESTH-1-REMINDER-BOTELLA-BACK-653eaf29b4324.png",
        "description": "Remera con diseño gráfico moderno, 100% algodón suave y fresca.",
        "category": "remeras"
      },
      {
        "id": 12,
        "title": "Remera Oversize",
        "price": 22000,
        "stock": 9,
        "img": "https://acdn-us.mitiendanube.com/stores/001/343/531/products/beige1-a5e40d877432507af817097451660625-640-0.jpg",
        "description": "Remera de corte amplio, ideal para un estilo relajado y urbano.",
        "category": "remeras"
      },
      {
        "id": 13,
        "title": "Remera Básica Blanca",
        "price": 19000,
        "stock": 20,
        "img": "https://acdn-us.mitiendanube.com/stores/003/191/551/products/whatsapp-image-2023-07-04-at-14-16-201-eb6bba99e27874fb5316884975300079-640-0.jpeg",
        "description": "Remera básica blanca, un esencial de fondo de armario.",
        "category": "remeras"
      },  
      
      {
        "id": 14,
        "title": "Zapatillas Running",
        "price": 58000,
        "stock": 7,
        "img": "https://www.runningxpert.com/media/mageplaza/blog/post/m/e/meta_asics-gel-nimbus-27.jpg",
        "description": "Zapatillas deportivas con tecnología de amortiguación para mayor rendimiento.",
        "category": "calzado"
      },
      {
        "id": 15,
        "title": "Zapatos Urbanos",
        "price": 63000,
        "stock": 4,
        "img": "https://http2.mlstatic.com/D_NQ_NP_809038-MLA71328606917_082023-O.webp",
        "description": "Zapatos de cuero sintético con diseño urbano, cómodos y resistentes.",
        "category": "calzado"
      },
      {
        "id": 16,
        "title": "Zapatillas Skate",
        "price": 54000,
        "stock": 6,
        "img": "https://universoventura.vtexassets.com/arquivos/ids/200483/Zapatillas-DC-Shoes-Manual-Tx-Urbano-Skate-Hombre-Black-White-1232112071-2.jpg?v=638113931278570000",
        "description": "Zapatillas con suela plana, ideales para skate y uso diario.",
        "category": "calzado"
      },
    
      
      {
        "id": 17,
        "title": "Bermuda Cargo",
        "price": 42000,
        "stock": 10,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVJ8bqMrWfIBp2mISjEemJIH36ZV_ROB-tA&s",
        "description": "Bermuda con múltiples bolsillos, resistente y práctica para actividades al aire libre.",
        "category": "bermudas"
      },
      {
        "id": 18,
        "title": "Bermuda de Jean",
        "price": 45000,
        "stock": 7,
        "img": "https://nymeria.site/kfive/eshop/0_103_5_89.webp",
        "description": "Bermuda de denim con diseño moderno, perfecta para salidas casuales.",
        "category": "bermudas"
      },
      {
        "id": 19,
        "title": "Bermuda Deportiva",
        "price": 39000,
        "stock": 12,
        "img": "https://esker.vtexassets.com/arquivos/ids/188846-800-800?v=638925056088100000&width=800&height=800&aspect=true",
        "description": "Bermuda liviana y transpirable para actividades deportivas y días calurosos.",
        "category": "bermudas"
      },
    
      
      {
        "id": 20,
        "title": "Camisa de Jean",
        "price": 28000,
        "stock": 5,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUKOq7Jg8tKoDVvbsdqinqZ7_MebBmBc9gQ&s",
        "description": "Camisa de denim clásico con bolsillos frontales, resistente y moderna.",
        "category": "camisas"
      },
      {
        "id": 21,
        "title": "Camisa a Cuadros",
        "price": 27000,
        "stock": 8,
        "img": "https://www.devre.la/media/catalog/product/d/e/devre-camisa-sport_42d000267-001_001.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1350&width=900&canvas=900:1350",
        "description": "Camisa casual con diseño a cuadros, ideal para el día a día.",
        "category": "camisas"
      },
      {
        "id": 22,
        "title": "Camisa Slim Fit Blanca",
        "price": 31000,
        "stock": 6,
        "img": "https://http2.mlstatic.com/D_NQ_NP_633298-MLA48632447456_122021-O.webp",
        "description": "Camisa blanca de corte entallado, perfecta para eventos formales o trabajo.",
        "category": "camisas"
      }
]

export default products;
