
import { dataProducts } from "./data.js";

const productData = JSON.parse(dataProducts);
const productBox = document.querySelector('.featured');




productData.forEach(({name, image, price, text, basket, baskettext}) => {
  const productEl = `

    <div class="featured_products">
    <div class="featured_products_ph">
      <img class="featured_products_photo" src="${image}" alt="${name}" > 
      <div class="blackout"></div>
                  <div class="featured_products_button">
                    <div class="products_button_basket">
                        <img src="${basket}" alt="${baskettext}">
                        <a href="#" class="products_button">${baskettext}</a>
                    </div>
                  </div>
                </div>

      <h3 class="featured_products_heading">${name}</h3>
      <p class="featured_products_text">${text}</p>
      <p class="featured_products_price">$${price}</p>
      </div>  
  `;
  productBox.insertAdjacentHTML('beforeend', productEl)
} );


