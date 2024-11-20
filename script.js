let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(productName + " has been added to your cart.");
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name + " - $" + item.price.toFixed(2);
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert('Proceeding to checkout...');
    // Here you would typically handle the checkout process
}

// Call displayCart() on cart.html to show the cart items
if (document.title.includes("Cart")) {
    displayCart();
}


