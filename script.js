let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCartWithSize(btn, name, price) {
  let size = btn.parentElement.querySelector(".size").value;
  cart.push({ name, price, size, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  let c = document.getElementById("cart-count");
  if (c) c.innerText = cart.length;
}

/* FILTER */
function filterProducts(type) {
  document.querySelector(".shirts").style.display = (type=="pants")?"none":"block";
  document.querySelector(".pants").style.display = (type=="shirts")?"none":"block";
}

/* SEARCH */
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card=>{
    let name = card.dataset.name;
    card.style.display = name.includes(input) ? "block" : "none";
  });
}
