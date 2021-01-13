var productmen = JSON.parse(product)

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id') 
console.log(id)

function createCard() {
        $('.itemsimg').html(
            '<img src="'+productmen[id-1].img+'" alt=""></img>'
            );
        $('.itemscarac').html(
            `<h1> ${productmen[id-1].nom} </h1>
            <h2> ${productmen[id-1].price}€ </h2>
            <p>${productmen[id-1].desc}</p>`
            );
            
}
createCard() 

function similar(){
    for(i=0;i<4;i++) {
        let number =  Math.floor(Math.random() * Math.floor(productmen.length));
        console.log(number)
        $('.similar').append(
        '<div class="card" style="width: 18rem;">'+
        '<img class="card-img-top" src="'+ productmen[number].img +'" alt="Card image cap" class="image">'+
        '<div class="card-body">'+
        '<h2 class="card-text"><a href="menproduct.html?id=' + productmen[number].id +'">'+productmen[number].nom+'</a> </h2>'+ 
        '</div>'+
        '</div>'
        );
    }
}

similar()
