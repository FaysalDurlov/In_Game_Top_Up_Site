import {productList} from "../data/products.js";


// Search focus effect
const searchInput = document.querySelector('.search-box input');
if(searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.border = '1px solid var(--primary-fixed)';
        searchInput.parentElement.style.backgroundColor = 'rgba(49, 57, 77, 0.3)';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.border = '1px solid rgba(132, 148, 149, 0.3)';
        searchInput.parentElement.style.backgroundColor = 'rgba(45, 52, 73, 0.5)';
    });
}


// Hero button interaction
const heroBtn = document.querySelector('.btn-primary');
if(heroBtn) {
    heroBtn.addEventListener('mousedown', () => heroBtn.style.transform = 'scale(0.95)');
    heroBtn.addEventListener('mouseup', () => heroBtn.style.transform = 'scale(1)');
    heroBtn.addEventListener('mouseleave', () => heroBtn.style.transform = 'scale(1)');
}

const searchBtn = document.getElementById("searchBtn");
const searchDrawer = document.getElementById("searchDrawer");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

function openSearchDrawer() {
    searchDrawer.classList.add("active");
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSearchDrawer() {
    searchDrawer.classList.remove("active");
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openSearchDrawer();
});

closeSearch.addEventListener("click", closeSearchDrawer);
searchOverlay.addEventListener("click", closeSearchDrawer);


function createProductCard(singleProduct) {
    return `<div class="card">
                <div class="card-img">
                    <img alt="${singleProduct.name}" src="${singleProduct.image}"/>
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <h3 class="card-title">${singleProduct.name}</h3>
                        <span class="status-tag ${singleProduct.status}">${singleProduct.tag_line}</span>
                    </div>
                    <p class="card-category">${singleProduct.description}</p>
                    <div class="card-footer">
                        <Span class="price">${singleProduct.price}</Span>
                    </div>
                </div>
            </div>`
};

function genarateProductGrid(){
    let productCard = ""
    let productGridHTML = ""
    productList.forEach((product)=>{
        productCard = createProductCard(product)
        productGridHTML += productCard
    })
    return productGridHTML;
}
function loadProductToPage(){
    let productCards = genarateProductGrid();
    let current_html = document.querySelector(".js_product_grid").innerHTML
    document.querySelector(".js_product_grid").innerHTML = current_html + productCards
}
loadProductToPage();