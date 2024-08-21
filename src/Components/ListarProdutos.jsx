import { useState } from "react";

export default function ListarProdutos(){
    const[ListaProdutos, setProdutos] = useState([
        {id:1, nome:'Wish You Were Here', preco:'R$ 123,00', banda:'Pink Floyd', genero:['Rock','RockPop'],},
        {id:2, nome:'The Dark Side of the Moon', preco:'R$ 343,00', banda:'Pink Floyd', genero:['Eletronica','Pop'],},
        {id:3, nome:'The Wall', preco:'R$ 433,00', banda:'Pink Floyd', genero:['Eletronica','Pop'],},
        {id:4, nome:'Pulse', preco:'R$ 543,00', banda:'Pink Floyd', genero:['Eletronica','Pop'],},
        {id:5, nome:'The Division Bell', preco:'R$ 333,00', banda:'Pink Floyd', genero:['MPB','Rock'],},
        {id:6, nome:'The Beatles', preco:'R$ 546,00', banda:'The Beatles', genero:['Rock','RockPop'],},
        {id:7, nome:'Abbey Road', preco:'R$ 431,00', banda:'The Beatles', genero:['Rock','RockPop'],},
        {id:8, nome:'Revolver', preco:'R$ 435,00', banda:'The Beatles', genero:['Rock','RockPop'],},
        {id:9, nome:'Let It Be', preco:'R$ 764,00', banda:'The Beatles', genero:['Rock','RockPop'],},
        {id:10, nome:'A Hard Days Night', preco:'R$ 646,00', banda:'The Beatles', genero:['Rock','RockPop'],},
        {id:11, nome:'Brothers in Arms', preco:'R$ 856,00', banda:'Dire Straits', genero:['Country','Rock'],},
        {id:12, nome:'Alchemy: Dire Straits Live', preco:'R$ 234,00', banda:'Dire Straits', genero:['Country','Rock'],},
        {id:13, nome:'Dire Straits', preco:'R$ 453,00', banda:'Dire Straits', genero:['Country','Rock'],},
        {id:14, nome:'On Every Street', preco:'R$ 754,00', banda:'Dire Straits', genero:['Country','Rock'],},
        {id:15, nome:'Making Movies', preco:'R$ 367,00', banda:'Dire Straits', genero:['Country','Rock'],},
        {id:16, nome:'Discovery', preco:'R$ 754,00', banda:'Daft Punk', genero:['Eletronica','Pop'],},
        {id:17, nome:'Random Access Memories', preco:'R$ 457,00', banda:'Daft Punk', genero:['Eletronica','Pop'],},
        {id:18, nome:'Homework', preco:'R$ 275,00', banda:'Daft Punk', genero:['Eletronica','Pop'],},
        {id:19, nome:'Alive 2007', preco:'R$ 173,00', banda:'Daft Punk', genero:['Eletronica','Pop'],},
        {id:20, nome:'Human After All', preco:'R$ 943,00', banda:'Daft Punk', genero:['Eletronica','Pop'],},
        {id:21, nome:'Gita', preco:'R$ 156,00', banda:'Raul Seixas', genero:['MPB','Rock'],},
        {id:22, nome:'O Dia em que a Terra Parou', preco:'R$ 976,00', banda:'Raul Seixas', genero:['MPB','Rock'],},
        {id:23, nome:'Há 10 Mil Anos Atrás', preco:'R$ 789,00', banda:'Raul Seixas', genero:['MPB','Rock'],},
        {id:24, nome:'Krig-ha, Bandolo!', preco:'R$ 967,00', banda:'Raul Seixas', genero:['MPB','Rock'],},
        {id:25, nome:'Abre-te Sésamo', preco:'R$ 521,00', banda:'Raul Seixas', genero:['MPB','Rock'],},
        {id:26, nome:'Master of Puppets', preco:'R$ 754,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'],},
        {id:27, nome:'Metallica', preco:'R$ 346,00', banda:'', banda:'Metallica', genero:['Heavy metal', 'thrash metal'],},
        {id:28, nome:'Ride the Lightning', preco:'R$ 742,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'],},
        {id:29, nome:'Kill Em All', preco:'R$ 234,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'],},
        {id:30, nome:'St. Anger', preco:'R$ 234,00', banda:'Metallica', genero:['Heavy metal', 'thrash metal'],}
    ])

}