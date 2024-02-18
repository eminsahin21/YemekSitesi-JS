 var receivedData = Number(localStorage.getItem("yemek_id")); //JSON obje idleri 1den basliyor ondan 1 ekledik
 var urunBaslik = document.querySelector("#urunBaslik")
 var urunResim = document.querySelector("#urunResim")
 fetch("data/menu.json")
 	.then((response) => response.json()) //parse json data
 	.then(function (item) {
 		item.forEach((item) => {
 			if(item.id == receivedData){
 				console.log(item)
                 urunBaslik.innerHTML = item.title
 				urunResim.src = item.img
             }
 		});
 });
 import cheerio from './node_modules/cheerio'
 import axios from './node_modules/axios'

