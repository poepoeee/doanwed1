document.addEventListener("DOMContentLoaded",loadSearchProduct());
function loadSearchProduct(){
    let productList=document.getElementsByClassName("container")[0];
    let products=JSON.parse(localStorage.getItem("findProduct"));
    let user=JSON.parse(localStorage.getItem('user'));
    let iconHandle='';
    let functionHandle='';
    if(user.role==="admin"){
        iconHandle='ti-settings icon_hover';
        functionHandle='redirectUpdateProduct(this)';
    }else{
        iconHandle='ti-shopping-cart-full icon_hover';
        functionHandle='addToCart(this);'
    }
    let HTML="<div class='left'><ul class='list-product'><li class='title-left active' >BRANDS</li><hr class='left-space'/><li>Consious Chocolate</li><li>Coracao Confections</li><li>Element for life</li><li>Enjoy</li><li>Forever Cacao</li><li>Ombar</li></ul></div><div class='right'>";
    for(var i=0;i<products.length;i++){
       HTML+=`<div class="card">
       <div class="card-header" style="position: relative;">
         <img class="img-card" src="${products[i].image}" alt="Sr error !" />
         <ul class="product_hover">
           <li>
             <a href="${products[i].image}">
               <span class="ti-arrows-corner icon_hover" style="color: white;"></span>
             </a>
           </li>
           <li>
             <a href="#">
                 <span></span>
             </a>
           </li>
           <li>
             <a href="#">
                 <span id="${products[i].id}" onclick="${functionHandle}" class="${iconHandle}"></span>
             </a>
           </li>
         </ul>
       </div>
       <div class="card-body">
         <div class="card-reviews">
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <p class="status-review">review</p>
         </div>
         <div class="card-infor">
           <span class="infor-name">
            ${products[i].name}
           </span>
           <span class="infor-price">${products[i].price}</span>
         </div>
       </div>
     </div>`
    }
    HTML+="</div>"
    productList.innerHTML=HTML;
}
