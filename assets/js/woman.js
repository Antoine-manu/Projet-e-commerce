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

var product = JSON.parse(product)


function createCard() {
    for (let i = 0; i < product.length; i++) {
        $('.item-weapons-row').append(
            '<div class="card '+product[i].classname+'" style="width: 18rem;">' +
            '<img class="card-img-top" src="' + product[i].img + '" alt="image du '+product[i].nom+'">' +
            '<div class="card-body">' +
            '<h5 class="card-title"><a href="menproduct.html?id=' + product[i].id + '">' + product[i].nom + '</a></h5>' +
            '<p class="card-text">' + product[i].price + '</p>' +
            '<a href="#" class="btn btn-primary">Ajouter au panier</a>' +
            '</div>' +
            '</div>');
    }
} 
createCard() 

function filterstype(){
    let type = $( "#type" ).val();

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

function filterscolor(){
    let color = $( "#color" ).val();
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

function filtersprice(){
    let price = $( "#price" ).val();
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
            $('.25').hide();
            $('.50').show();
            $('.75').hide();
            $('.100').hide();
            $('.100+').hide();
            break;
        case '3':
            $('.25').hide();
            $('.50').hide();
            $('.75').show();
            $('.100').hide();
            $('.100+').hide();
            break;
        case '4':
            $('.25').hide();
            $('.50').hide();
            $('.75').hide();
            $('.100').show();
            $('.100+').hide();
            break;
        case '3':
            $('.25').hide();
            $('.50').hide();
            $('.75').hide();
            $('.100').hide();
            $('.100+').show();
            break;
      }
    }
