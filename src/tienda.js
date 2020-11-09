db.tienda.insertMany([

    { 
      _id: 1 , 
      categoria: "Procesadores",
      stock: 34,
      marcas: [ "Intel" , "AMD" ],
      velocidades: { VB: "3,6 GHz", T: "4,2 GHz"},
      modelo: [ "i7-9700K" , "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ]

    },

    { 
        _id: 2, 
        categoria: "Placas Base",
        stock: 65,
        marcas: [ "ASUS" , "MSI" ],
        velocidades: { Socket: "AM4", MemMax: "32gb"},
        modelo: [ "B450 Gaming" , "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ]
       
    },

    {
        _id: 3, 
        categoria: "RAM",
        stock: 12,
        marcas: [ "Hyperx" , "Corsair" ],
        velocidades: { MHz: 3200, Tipo: "DDR4"},
        modelo: [ "Predator" , "Fury Black", "Vengeance RGB", "Vengeance LPX" ]
    },

    {
        _id: 4, 
        categoria: "Teclado",
        stock: 38,
        marcas: [ "Newskill" , "Razer" ],
        velocidades: { Mecanico: "Si" , RGB: "Si"},
        modelo: [ "Ornata V2" , "Huntsman Elite", "Suiko", "Serike TKL" ]
    
    },

    {
        
        _id: 5, 
        categoria: "Ratones",
        stock: 73,
        marcas: [ "Newskill" , "Razer" ],
        velocidades: { DPI: 10000 , RGB: "Si"},
        modelo: [ "Helios" , "Atreo", "Deathadder V2", "Naga Pro" ]
    
    },

    {
        _id: 6, 
        categoria: "Alfombrillas",
        stock: 128,
        marcas: [ "HP" , "MSI" ],
        velocidades: { L: 10000 , W: 400 , H: "3mm"},
        modelo: [ "Agility GD70" , "GD60", "Omen 100", "Pavilion 300" ]
         
       
    },


 ]);