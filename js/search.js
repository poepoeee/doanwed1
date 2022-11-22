document.addEventListener("DOMContentLoaded",loadSearchProduct());
function loadSearchProduct(){
    let productList=document.getElementsByClassName("container")[0];
    let products=JSON.parse(localStorage.getItem("findProduct"));
    let HTML="<div class='left'><ul class='list-product'><li class='title-left active' >BRANDS</li><hr class='left-space'/><li>Consious Chocolate</li><li>Coracao Confections</li><li>Element for life</li><li>Enjoy</li><li>Forever Cacao</li><li>Ombar</li></ul></div><div class='right'>";
    for(var i=0;i<products.length;i++){
        HTML+="<div class='card'><img class='img-card' src='"+products[i].image+"'  /> <div class='card-body'><div class='card-reviews'><i class='ti-star'></i><i class='ti-star'></i><i class='ti-star'></i><i class='ti-star'></i><i class='ti-star'></i><p class='status-review'>review</p></div><div class='card-infor'><span class='infor-name' >"+products[i].name+" "+"</span><span class='infor-price'>"+products[i].price+"</span></div></div></div>";
        // console.log(HTML);
    }
    HTML+="</div>"
    console.log(HTML);
    productList.innerHTML=HTML;
}
