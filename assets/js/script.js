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

// Declaration du tableau de produit pour homme venant de la database

// Création de la page avec tout les produits pour homme
function createMenCard() {
  for (let i = 0; i < productmen.length; i++) {
    //je remplis ma section d'autant de card qu'il y as de ligne
    $('.men-product').append(
      '<div class="card ' + productmen[i].classname + '" style="width: 18rem;">' +
      '<img class="card-img-top" src="' + productmen[i].img + '" alt="image du ' + productmen[i].nom + '">' +
      '<div class="card-body">' +
      '<h5 class="card-title"><a href="#" onclick="createMenProduct(' + productmen[i].id + ')">' + productmen[i].nom + '</a></h5>' +
      '<p class="card-text">' + productmen[i].price + '</p>' +
      '<a href="#" class="btn btn-primary">Ajouter au panier</a>' +
      '</div>' +
      '</div>');
      //je remplit les card dynamiquement en loadant les informations de la data base
  }
}
createMenCard()
// Création de la page avec tout les produits pour homme
function createMenProduct(id) {

  $('.men-product').hide();
  $('.filters').hide();
  $('.framer').hide();
  $('.product').show();
// je masque les different elements que je ne veux pas 
  $('.itemsimg').append(
    `<img src=" ${productmen[id - 1].img} " alt="">`
  );
  $('.itemscarac').append(
    `<h1> ${productmen[id-1].nom} </h1>
      <h2> ${productmen[id-1].price}€ </h2>
      <p>${productmen[id-1].desc}</p>`
  );
  // affichage des données de l'article en question
  id=0
  for (i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * Math.floor(productmen.length));
    console.log(number)
    // ici je tire des nombres aleatoires afin d'afficher des lignes aleatoires du tableau pour montrer d'autres articles 
    $('.similar').append(
      `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=" ${productmen[number].img} " alt="Card image cap" class="image">
        <div class="card-body">
        <h2 class="card-text"><a href="#" onclick="productclear(),createMenProduct( ${productmen[number].id })"> ${productmen[number].nom} </a> </h2>
        <p class="card-text">${productmen[number].price} </p>
        <a href="#" class="btn btn-primary">Ajouter au panier</a>
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

var productwoman = JSON.parse(productwoman)

function createWomanCard() {

  $('.men-product').hide();
  $('.filters').show();
  $('.framer').show();

  for (let i = 0; i < productwoman.length; i++) {
    $('.woman-product').append(
      `<div class="card  ${productwoman[i].classname} " style="width: 18rem;">
      <img class="card-img-top" src=" ${productwoman[i].img} " alt="image du  ${productwoman[i].nom} ">
      <div class="card-body">
      <h5 class="card-title"><a href="#">${productwoman[i].nom} </a></h5>
      <p class="card-text">${productwoman[i].price} </p>
      <a href="#" class="btn btn-primary">Ajouter au panier</a>
      </div>
      </div>`);
  }
}

var productnew = JSON.parse(productnew)

function createNewCard() {
  for (let i = 0; i < productnew.length; i++) {
    $('.woman-product').append(
      '<div class="card ' + productnew[i].classname + '" style="width: 18rem;">' +
      '<img class="card-img-top" src="' + productnew[i].img + '" alt="image du ' + productnew[i].nom + '">' +
      '<div class="card-body">' +
      '<h5 class="card-title"><a href="#id=' + productnew[i].id + '" onclick="createWomanCard()>' + productnew[i].nom + '</a></h5>' +
      '<p class="card-text">' + productnew[i].price + '</p>' +
      '<a href="#" class="btn btn-primary">Ajouter au panier</a>' +
      '</div>' +
      '</div>');
  }
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
}

function showpropos() {
  $('.men-product').hide();
  $('.woman-product').hide();
  $('.new').hide();
  $('.index').hide();
  $('.propos').show();
  $('.product').hide();
  $('.filters').show();
  $('.framer').show();
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