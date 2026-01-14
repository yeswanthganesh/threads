let cartCount = 0;
let wishCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function addToWishlist() {
  wishCount++;
  document.getElementById("wish-count").innerText = wishCount;
}
