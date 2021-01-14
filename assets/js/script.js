jQuery(function () {
  $(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 200) { // Quand on est à 200pixels du haut de page,
        $('#scrollUp').css('right', '10px'); // Replace à 10pixels de la droite l'image
      } else {
        $('#scrollUp').removeAttr('style'); // Enlève les attributs CSS affectés par javascript
      }
    });
  });
});



function burger() {
  $('.menu li').toggleClass("burgerdisplay")
  //je rajoute une classe quand je clique sur le bugrer menu
}

var productmen = JSON.parse(productmen)
var productwoman = JSON.parse(productwoman)
var productnew = JSON.parse(productnew)
// Declaration des tableaux de produit venant de la database

// Création de la page avec tout les produits
function createCard(name) {
  if(name=='men'){
    var product = productmen
  }
  else if(name=='woman'){
    var product = productwoman
  }
  else if(name=='new'){
    var product = productnew
  }
  console.log(name)
  for (let i = 0; i < product.length; i++) {
    //je remplis ma section d'autant de card qu'il y as de ligne 
    $('.'+name+'-product').append(
      '<div class="card ' + product[i].classname + '" style="width: 18rem;">' +
      '<img class="card-img-top" src="' + product[i].img + '" alt="image du ' + product[i].nom + '">' +
      '<div class="card-body">' +
      '<h5 class="card-title"><a href="#" onclick="createProduct(' + product[i].id + ',\''+name+'\')">' + product[i].nom + '</a></h5>' +
      '<p class="card-text">' + product[i].price + '</p>' +
      '<a href="#" rel="unfollow" class="btn btn-primary" onclick="generatePanier('+ product[i].id+',\''+ name+'\')">Ajouter au panier</a>' +
      '</div>' +
      '</div>');
      //je remplit les card dynamiquement en loadant les informations de la data base
  }
}


// Création de la page avec tout les produits
function createProduct(id,path) {

  if(path=='men'){
    var product = productmen
    var name = 'men'
  }
  if(path=='woman'){
    var product = productwoman
    var name = 'woman'
  }
  if(path=='new'){
    var product = productnew
    var name = 'new'
  }

  $('.men-product').hide();
  $('.filters').hide();
  $('.framer').hide();
  $('.product').show();
// je masque les different elements que je ne veux pas 



  $('.itemsimg').append(
    `<img src=" ${product[id - 1].img} " alt="">`
  );
  $('.itemscarac').append(
    `<h1> ${product[id-1].nom} </h1>
      <h2> ${product[id-1].price}€ </h2>
      <p>${product[id-1].desc}</p>`
  );
  // affichage des données de l'article en question
  id=0
  for (i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * Math.floor(product.length));
    console.log(number)
    // ici je tire des nombres aleatoires afin d'afficher des lignes aleatoires du tableau pour montrer d'autres articles 
    $('.similar').append(
      `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=" ${product[number].img} " alt="${product[number].nom}" class="image">
        <div class="card-body">
        <h2 class="card-text"><a href="#" onclick="productclear(),createProduct( ${product[number].id },\'${name}\')"> ${product[number].nom} </a> </h2>
        <p class="card-text">${product[number].price} </p>
        <a href="#" rel="unfollow" class="btn btn-primary" onclick="generatePanier( ${product[number].id },\'${name}\')">Ajouter au panier</a>
        </div>
        </div>`
        //j'affiche les informations des produits similaires en utilisant les nombres aleatoires dans le tableau comme reperes 
    );
  }

}
// Création des pages produit unique pour homme

// Fonction de suppression des données apres avoir consulter la page
function productclear(){
  $('.itemsimg').empty();
  $('.itemscarac').empty();
  $('.similar').empty();

}
// Fonction de suppression des données apres avoir consulter la page


// Création des pages produit unique pour homme




// Panier

let total = 0
let totaldel=0
let totaladd=0
// variable qui me sert a stocker le prix du total

function generatePanier(id,name){
  event.preventDefault()
  if(name=='men'){
    var product = productmen
    var name = 'men'
  }
  if(name=='woman'){
    var product = productwoman
    var name = 'woman'
  }
  if(name=='new'){
    var product = productnew
    var name = 'new'
  }
  id=id-1
  console.log(id,name)
  totaladd=totaladd+product[id].price
  $('.panier').append(
    `<div id="${id}">
    <img src="${product[id].img}" alt="">
    <div>
      <h2>${product[id].price}</h2>
      <h3>${product[id].nom}</h3>
      <button class="btn btn-primary" onclick="deleteCartProduct(${id},${product[id].price})">Supprimer du panier</button>
    </div>
    
  </div>`
  );
  totalprice()

}
function showpanier() {
  $('.panier').toggle();
  $('.account').hide();
}

function deleteCartProduct(id,price){
  $('#'+id+'').remove();
 
  totaldel=totaldel-price
  totalprice()
}
function totalprice(){
  total=totaladd+totaldel
  total=Math.round(x=total * 100) / 100
  $('.total').html(
    '<h3>Total = '+total+'</h3>'+
    '<a href="#" class="btn btn-primary" onclick="commander()">Commander</a>'
  );
}

function commander(){
  alert('Commande effectuée avec succes')
  $('.panier').empty();
  $('.panier').hide();

}
function showaccount() {
  $('.account').toggle();
  $('.panier').hide();
}
// Ici je definis une fonction qui affiche ou non le panier au clic sur le bouton panier


// Panier

function clearproduct(){
  $('.men-product').empty();
  $('.woman-product').empty();
  $('.news-product').empty();
}

function showmen() {
  $('.men-product').show();
  $('.woman-product').hide();
  $('.new').hide();
  $('.index').hide();
  $('.propos').hide();
  $('.product').hide();
  $('.filters').show();
  $('.framer').show();
  $('body').addClass('background')
  productclear()

}

function showwoman() {
  $('.men-product').hide();
  $('.woman-product').show();
  $('.new').hide();
  $('.index').hide();
  $('.propos').hide();
  $('.product').hide();
  $('.filters').show();
  $('.framer').show();
  $('body').addClass('background')
  productclear()
}

function shownew() {
  $('.men-product').hide();
  $('.woman-product').hide();
  $('.new').show();
  $('.index').hide();
  $('.propos').hide();
  $('.product').hide();
  $('.filters').show();
  $('.framer').show();
  $('body').addClass('background')
  productclear()
}

function showindex() {
  $('.men-product').hide();
  $('.woman-product').hide();
  $('.new').hide();
  $('.index').show();
  $('.propos').hide();
  $('.product').hide();
  $('.filters').hide();
  $('.framer').hide();
  $('body').removeClass('background');
  productclear()
  $('.panier').hide();
  $('.account').hide();
}

function showpropos() {
  $('.men-product').hide();
  $('.woman-product').hide();
  $('.new').hide();
  $('.index').hide();
  $('.propos').show();
  $('.product').hide();
  $('.filters').hide();
  $('.framer').hide();
  $('body').addClass('background')
  productclear()
}

function showproduct() {
  $('.men-product').hide();
  $('.woman-product').hide();
  $('.new').hide();
  $('.index').hide();
  $('.propos').hide();
  $('.product').show();
  $('.filters').show();
  $('.framer').show();
  $('body').addClass('background')
  productclear()
}

function filterstype() {
  let type = $("#type").val();

  switch (type) {
    case '1':
      $('.pants').hide();
      $('.sweat').show();
      $('.tshirt').hide();
      $('.chemise').hide();
      $('.jacket').hide();
      break;
    case '2':
      $('.pants').hide();
      $('.sweat').hide();
      $('.tshirt').show();
      $('.chemise').hide();
      $('.jacket').hide();
      break;
    case '3':
      $('.pants').hide();
      $('.sweat').hide();
      $('.tshirt').hide();
      $('.chemise').show();
      $('.jacket').hide();
      break;
    case '4':
      $('.pants').show();
      $('.sweat').hide();
      $('.tshirt').hide();
      $('.chemise').hide();
      $('.jacket').hide();
      break;
    case '5':
      $('.pants').hide();
      $('.sweat').hide();
      $('.tshirt').hide();
      $('.chemise').hide();
      $('.jacket').show();
      break;
    case '6':
      $('.pants').show();
      $('.sweat').show();
      $('.tshirt').show();
      $('.chemise').show();
      $('.jacket').show();
  }


}

filterstype()

function filterscolor() {
  let color = $("#color").val();
  switch (color) {
    case '1':
      $('.noir').show();
      $('.blanc').hide();
      $('.marron').hide();
      $('.beige').hide();
      $('.vert').hide();
      $('.rose').hide();
      $('.bleu').hide();
      break;
    case '2':
      $('.noir').hide();
      $('.blanc').show();
      $('.marron').hide();
      $('.beige').hide();
      $('.vert').hide();
      $('.rose').hide();
      $('.bleu').hide();
      break;
    case '3':
      $('.noir').hide();
      $('.blanc').hide();
      $('.marron').show();
      $('.beige').hide();
      $('.vert').hide();
      $('.rose').hide();
      $('.bleu').hide();
      break;
    case '4':
      $('.noir').hide();
      $('.blanc').hide();
      $('.marron').hide();
      $('.beige').show();
      $('.vert').hide();
      $('.rose').hide();
      $('.bleu').hide();
      break;
    case '5':
      $('.noir').hide();
      $('.blanc').hide();
      $('.marron').hide();
      $('.beige').hide();
      $('.vert').show();
      $('.rose').hide();
      $('.bleu').hide();
      break;
    case '6':
      $('.noir').hide();
      $('.blanc').hide();
      $('.marron').hide();
      $('.beige').hide();
      $('.vert').hide();
      $('.rose').show();
      $('.bleu').hide();
      break;
    case '7':
      $('.noir').hide();
      $('.blanc').hide();
      $('.marron').hide();
      $('.beige').hide();
      $('.vert').hide();
      $('.rose').hide();
      $('.bleu').show();
      break;

  }
}

filterscolor()

function filtersprice() {
  let price = $("#price").val();
  switch (price) {
    case '0':
      $('.25').show();
      $('.50').show();
      $('.75').show();
      $('.100').show();
      $('.100+').show();
      break;
    case '1':
      $('.25').show();
      $('.50').hide();
      $('.75').hide();
      $('.100').hide();
      $('.100+').hide();
      break;
    case '2':
      $('.25').show();
      $('.50').show();
      $('.75').hide();
      $('.100').hide();
      $('.100+').hide();
      break;
    case '3':
      $('.25').show();
      $('.50').show();
      $('.75').show();
      $('.100').hide();
      $('.100+').hide();
      break;
    case '4':
      $('.25').show();
      $('.50').show();
      $('.75').show();
      $('.100').show();
      $('.100+').hide();
      break;
    case '5':
      $('.25').hide();
      $('.50').hide();
      $('.75').hide();
      $('.100').hide();
      $('.100+').show();
      break;
  }
}