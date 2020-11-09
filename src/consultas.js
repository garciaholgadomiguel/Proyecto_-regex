/*
-- 1º Crea una consulta con el operador $eq -----------------------------------------------------
En la siguiente consulta queremos ontener las marcas que sean iguales a Newskill
-------------------------------------------------------------------------------------------------
> db.tienda.find( { marcas: { $eq:"Newskill" } } )
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 2º Crea una consulta con el operador $gt -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks mayores a 25
-------------------------------------------------------------------------------------------------
> db.tienda.find( { stock: { $gt:25 } } )
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 3º Crea una consulta con el operador $gte -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks mayores a 73 y que sean igual a 73 
-------------------------------------------------------------------------------------------------
> db.tienda.find( { stock: { $gte:73 } } )
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 4º Crea una consulta con el operador $in -----------------------------------------------------
En la siguiente consulta queremos ontener los valores que aparecen en el array
-------------------------------------------------------------------------------------------------
>  db.tienda.find( { modelo: { $in: [ "GD60", "Ornata V2", "Ryzen 5 3600" ] } } )
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 5º Crea una consulta con el operador $lt -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks por menores a 50
-------------------------------------------------------------------------------------------------
> db.tienda.find( { stock: { $lt:50 } } )
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 3, "categoria" : "RAM", "stock" : 12, "marcas" : [ "Hyperx", "Corsair" ], "velocidades" : { "MHz" : 3200, "Tipo" : "DDR4" }, "modelo" : [ "Predator", "Fury Black", "Vengeance RGB", "Vengeance LPX" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 6º Crea una consulta con el operador $lte -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks por menores a 38 incluyendo al 38
-------------------------------------------------------------------------------------------------
> db.tienda.find( { stock: { $lte:38 } } ) 
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 3, "categoria" : "RAM", "stock" : 12, "marcas" : [ "Hyperx", "Corsair" ], "velocidades" : { "MHz" : 3200, "Tipo" : "DDR4" }, "modelo" : [ "Predator", "Fury Black", "Vengeance RGB", "Vengeance LPX" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 7º Crea una consulta con el operador $ne -----------------------------------------------------
En la siguiente consulta queremos ontener las marcas que no sean iguales a Newskill
-------------------------------------------------------------------------------------------------
> db.tienda.find( { marcas: { $ne: "Newskill"} } )
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 3, "categoria" : "RAM", "stock" : 12, "marcas" : [ "Hyperx", "Corsair" ], "velocidades" : { "MHz" : 3200, "Tipo" : "DDR4" }, "modelo" : [ "Predator", "Fury Black", "Vengeance RGB", "Vengeance LPX" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 8º Crea una consulta con el operador $nin -----------------------------------------------------
En la siguiente consulta queremos ontener las marcas que no sean iguales a Newskill
-------------------------------------------------------------------------------------------------
> db.tienda.find( { modelo: { $nin:[ "Helios", "Predator","i7-9700K"] } } )
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 9º Crea una consulta con el operador $nin -----------------------------------------------------
En la siguiente consulta queremos ontener los modelos que son distintos a los del array
-------------------------------------------------------------------------------------------------
> db.tienda.find( { modelo: { $nin:[ "Helios", "Predator","i7-9700K"] } } )
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 10º Crea una consulta con el operador $and -----------------------------------------------------
En la siguiente consulta queremos ontener los valores que sean Ratones y sean de la marca Razer
-------------------------------------------------------------------------------------------------
> db.tienda.find( { $and: [ { categoria: "Ratones"}, { marcas: "Razer"} ] } )
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 11º Crea una consulta con el operador $not -----------------------------------------------------
En la siguiente consulta queremos ontener los valores que no son iguales a la marca HP
-------------------------------------------------------------------------------------------------
> db.tienda.find({marcas: {$not:{$eq:"HP"}} })            
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 3, "categoria" : "RAM", "stock" : 12, "marcas" : [ "Hyperx", "Corsair" ], "velocidades" : { "MHz" : 3200, "Tipo" : "DDR4" }, "modelo" : [ "Predator", "Fury Black", "Vengeance RGB", "Vengeance LPX" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 12º Crea una consulta con el operador $or -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks mayores a 50 y el modelo GD60
-------------------------------------------------------------------------------------------------
>  db.tienda.find( { $or: [ { stock: { $gt: 50 } }, { modelo: { $eq: "GD60" } } ] } )
{ "_id" : 2, "categoria" : "Placas Base", "stock" : 65, "marcas" : [ "ASUS", "MSI" ], "velocidades" : { "Socket" : "AM4", "MemMax" : "32gb" }, "modelo" : [ "B450 Gaming", "Rog Strix H370-F", "TUF B360-Pro", "X470 Gaming Pro" ] }
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
{ "_id" : 6, "categoria" : "Alfombrillas", "stock" : 128, "marcas" : [ "HP", "MSI" ], "velocidades" : { "L" : 10000, "W" : 400, "H" : "3mm" }, "modelo" : [ "Agility GD70", "GD60", "Omen 100", "Pavilion 300" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 13º Crea una consulta con el operador $nor -----------------------------------------------------
En la siguiente consulta queremos ontener los stocks que sean menores a 50 y el modelo al no ser true se ignora
-------------------------------------------------------------------------------------------------
> db.tienda.find( { $nor: [ { stock: { $gt: 50 } }, { modelo: { $eq: "GD60" } } ] } )
{ "_id" : 1, "categoria" : "Procesadores", "stock" : 34, "marcas" : [ "Intel", "AMD" ], "velocidades" : { "VB" : "3,6 GHz", "T" : "4,2 GHz" }, "modelo" : [ "i7-9700K", "Ryzen 5 3600", "i9-9900K", "Ryzen 9 3900X" ] }
{ "_id" : 3, "categoria" : "RAM", "stock" : 12, "marcas" : [ "Hyperx", "Corsair" ], "velocidades" : { "MHz" : 3200, "Tipo" : "DDR4" }, "modelo" : [ "Predator", "Fury Black", "Vengeance RGB", "Vengeance LPX" ] }
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
--------------------------------------------------------------------------------------------------
*/


/*
-- 14º Crea una consulta con el operador $regex -----------------------------------------------------
En la siguiente consulta queremos ontener los valores que empiecen por algo contengan ws y terminen por algo
-------------------------------------------------------------------------------------------------
> db.tienda.find({marcas: {$regex: /ws/} })
{ "_id" : 4, "categoria" : "Teclado", "stock" : 38, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "Mecanico" : "Si", "RGB" : "Si" }, "modelo" : [ "Ornata V2", "Huntsman Elite", "Suiko", "Serike TKL" ] }
{ "_id" : 5, "categoria" : "Ratones", "stock" : 73, "marcas" : [ "Newskill", "Razer" ], "velocidades" : { "DPI" : 10000, "RGB" : "Si" }, "modelo" : [ "Helios", "Atreo", "Deathadder V2", "Naga Pro" ] }
--------------------------------------------------------------------------------------------------
*/