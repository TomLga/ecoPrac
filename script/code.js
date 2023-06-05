let products =
JSON.parse(localStorage.getItem('products')).length ? //do i have this data
JSON.parse(localStorage.getItem('products')) : //if yes ,get it
JSON.parse(localStorage. setItem('products', //if no ,set up the data
JSON.stringify(
    [
        {
            id:1,
            name:'acer',
            price: 10000
        },
         {
            id:2,
            name:'dell',
            price: 15000
        },
         {
            id:3,
            name:'mac book',
            price: 13000
        },
    ]
)
))
let productListing =
document.querySelector('.display_content')
productListing.innerHTML =''
products.forEach(product => {
    productListing.innerHTML+=
    `
    <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.names}</h5>
    <h5 class="card-title">R ${product.price}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
});
