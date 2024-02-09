const menu = [{
    id: 1,
    title: "Kuru Fasulye",
    category: "Anadolu",
    price: 10.99,
    img: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/etsiz-kuru-fasulye.webp",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Patlıcan Musakka",
    category: "Akdeniz",
    price: 7.99,
    img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2014/09/firinda-patlican-musakka-resimli-yemek-tarifi(15).jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Hünkar Beğendi",
    category: "Akdeniz",
    price: 8.99,
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2021/03/hunkar-begendi-son-yemekcom.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Zeytinyağlı Sarma",
    category: "Ege",
    price: 5.99,
    img: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/zeytinyagli_sarma.webp",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Adana Kebap",
    category: "Akdeniz",
    price: 12.99,
    img: "https://lh3.googleusercontent.com/p/AF1QipNSHfYw1UNtL98eg51GdgbwUD2tsKDYqIy7fq2X=w1080-h608-p-no-v0",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Bamya",
    category: "Ege",
    price: 9.99,
    img: "https://hanemdepisenler.files.wordpress.com/2014/08/dsc_0217.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Yağlama",
    category: "Anadolu",
    price: 15.99,
    img: "https://www.koyumedondum.com/wp-content/uploads/2023/09/yaglama.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Mantı",
    category: "Anadolu",
    price: 12.99,
    img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/07/hazir-manti-resimli-yemek-tarifi(14).jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Cağ Kebabı",
    category: "Anadolu",
    price: 3.99,
    img: "https://cdn.getiryemek.com/restaurants/1579178548890_1125x522.jpeg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "İçli Köfte",
    category: "Akdeniz",
    price: 3.99,
    img: "https://turuncupazar.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-16-at-13.58.49-2.jpeg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

var mainbutton = document.querySelector("#button_all")

window.onload = function(){
  
  mainbutton.classList.add("clicked")
  showCards(10,"")
}

function secimButton(id) {

  mainbutton.classList.remove("clicked")

  switch (id) {
    case "button_all":
      showCards(10, "");
      break;
    case "button_akdeniz":
      showCards(4,"Akdeniz");
      break;
    case "button_ege":
      showCards(2,"Ege");
      break;
    case "button_anadolu":
      showCards(4,"Anadolu");
      break;
  }
}

function showCards(cardCount, kategori) {
  var cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Önceki kartları temizle

  let yeniliste = []

  if (kategori == "") {
    yeniliste = menu
  } else {
    yeniliste = menu.filter(oge => oge.category == kategori)
  }

  console.log(yeniliste)

  

  for (var i = 0; i < cardCount; i++) {

    //en dış kısımda her satırda 2 tane col öğesi
    var col = document.createElement("div");
    col.className = "col-6";
    cardContainer.appendChild(col)

    //her col öğesinin içine card öğesi
    var card = document.createElement("div");
    card.className = "card mb-3";
    card.style.maxWidth = "650px";
    col.appendChild(card);

    //her card öğesini parçalara ayırabilmek için row öğesi
    var card_row = document.createElement("div")
    card_row.className = "row g-0"
    card.appendChild(card_row)

    //rowun içine 4 birimlik img bölümü
    var col_img = document.createElement("div")
    col_img.className = "col-md-4"
    card_row.appendChild(col_img)

    //rowun içine 8 birimlik içerik bölümü
    var col_content = document.createElement("div")
    col_content.className = "col-md-7"
    card_row.appendChild(col_content)

    //img columnun içerisini img öğesi
    var img = document.createElement("img")
    img.className = "img-fluid rounded photo"
    img.style.objectFit = "fill"
    img.src = yeniliste[i].img
    col_img.appendChild(img)

    var cardbody = document.createElement("div")
    cardbody.className = "card-body"
    col_content.appendChild(cardbody)

    var title = document.createElement("h5")
    title.className = "menu-title"
    title.innerHTML = yeniliste[i].title
    title.style.borderBottom = "1px solid black"
    cardbody.appendChild(title)

    var content = document.createElement("p")
    content.className = "menu-info"
    content.innerHTML = yeniliste[i].desc
    cardbody.appendChild(content)

  }
}