// ===== CART MANAGEMENT =====
let cart = [];
const cartPopup = document.getElementById("cartPopup");
const cartItems = document.getElementById("cartItems");
const cartBtn = document.getElementById("cartBtn");
const cartTotal = document.getElementById("cartTotal");

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
    updateCartCount();
    openCart();
    showNotification(`${productName} added to cart!`);
}

function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})" style="background: none; border: none; color: red; cursor: pointer; font-weight: bold;">✕</button>
        `;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function updateCartCount() {
    cartBtn.textContent = `Cart (${cart.length})`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    updateCartCount();
}

function openCart() {
    cartPopup.classList.add("active");
}

function closeCart() {
    cartPopup.classList.remove("active");
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Proceeding to checkout with ${cart.length} items. Total: $${calculateTotal().toFixed(2)}`);
    cart = [];
    updateCartUI();
    updateCartCount();
    closeCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const products = productGrid.querySelectorAll(".product");
    
    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        const productCategory = product.querySelector(".category").textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// ===== NEWSLETTER SUBSCRIPTION =====
const newsletterForm = document.getElementById("newsletterForm");

function subscribeNewsletter(event) {
    event.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value;
    alert(`Thank you for subscribing with ${email}! Check your email for exclusive deals.`);
    newsletterForm.reset();
    showNotification("Subscribed successfully!");
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease-in-out";
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===== EVENT LISTENERS =====
cartBtn.addEventListener("click", openCart);

// Add animations CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
