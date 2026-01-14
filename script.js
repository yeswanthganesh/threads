let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  if (document.getElementById("cart-count")) {
    document.getElementById("cart-count").innerText = cart.length;
  }
}

function loadCart() {
  let table = document.getElementById("cart-table");
  let total = 0;

  cart.forEach((item, index) => {
    let row = table.insertRow();
    row.insertCell(0).innerText = item.name;
    row.insertCell(1).innerText = "₹" + item.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = () => removeItem(index);
    row.insertCell(2).appendChild(btn);

    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
