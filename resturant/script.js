document.addEventListener('DOMContentLoaded', () => {
    // Back to Top Button
    const toTop = document.querySelector(".back-top");

    window.addEventListener("scroll", () => {
        if (pageYOffset > 75) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    // Sidebar Toggle
    const burger = document.querySelector(".burger");
    const sidebar = document.querySelector(".links");
    const links = document.querySelectorAll(".links li a");

    burger.addEventListener("click", toggleSidebar);

    links.forEach(link => {
        link.addEventListener("click", toggleSidebar);
    });

    function toggleSidebar() {
        sidebar.classList.toggle("show");
    }

    // Cart Functionality
    const cart = [];
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem.getAttribute('data-name');
            const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

            // Check if item is already in cart
            const cartItem = cart.find(item => item.name === itemName);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    // Update Cart Display
    function updateCart() {
        cartItemsList.innerHTML = ''; // Clear current items
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsList.appendChild(li);
        });

        totalPriceEl.textContent = total.toFixed(2); // Update total price
    }

    // Show Cart Modal
    document.getElementById('order-btn').addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    // Hide Cart Modal
    document.querySelector('.close-btn').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Checkout
    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Thank you for your order!');
        cart.length = 0; // Clear cart
        updateCart();
        cartModal.style.display = 'none';
    });

    // Hide Cart Modal if Clicked Outside
    window.addEventListener('click', (e) => {
        if (e.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });
});
