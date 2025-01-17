let div = document.querySelector(".cont");
let data = window.fetch("./store.json");

data.then((response) => {
    return response.json(); // Get the JSON data
}).then((n) => {
    n.medicalProducts.forEach((val) => {
        let { id, name, category, description, price, stock, manufacturer, expirationDate, image } = val;

        div.innerHTML += `
            <div class="product-card">
                <h3>${name}</h3>
                <p>Category: ${category}</p>
                <p>Description: ${description}</p>
                <p>Manufacturer: ${manufacturer}</p>
                <p>Price: $${price.toFixed(2)}</p>
                <p>Stock: ${stock}</p>
                <p>Expiration Date: ${expirationDate}</p>
            </div>
        `;
        
    })
}).catch((error) => console.error(error));

// Scroll functionality
let up = document.querySelector(".fa-angle-up");

let down = document.querySelector("#oo");

// Scroll to the bottom when the down arrow is clicked
down.addEventListener("click", (e) => {
    div.scrollTop = div.scrollHeight; // Scroll to the bottom of the div
});

// Scroll to the top when the up arrow is clicked
up.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    down.style.visibility = "visible";

    setTimeout(() => {
        down.style.visibility = "hidden";
    }, 5000);
});

// Search functionality
let body = document.querySelector("body");
let searchInput = document.getElementById("searchInput");



// Function to filter products based on search query
function searchProducts() {
    let query = searchInput.value.toLowerCase(); // Get the search query
    let productCards = document.querySelectorAll(".product-card"); // Select all product cards
    let hasVisibleProducts = false; // Flag to check if any products are visible
    productCards.forEach((l)=>{
l.addEventListener("click",(e)=>{
console.log(e);
l.style.backgroundColor="red"
})
    })

    productCards.forEach(card => {
        let productName = card.querySelector("h3").textContent.toLowerCase(); // Get product name

        // Check if the product name includes the search query
        if (productName.includes(query)) {
            card.style.display = "block"; // Show the card if it matches
            hasVisibleProducts = true; // Set flag to true if a product is visible
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match
        }
    });
}

// Add event listener to the search input


searchInput.addEventListener("input", searchProducts);


