let products = {
    data: [
        { productName: "Regular White T-Shirt", category: "Topwear", price: "30", image: "white-tshirt.jpg" },
        { productName: "Beige Short Skirt", category: "Bottomwear", price: "49", image: "short-skirt.jpg" },
        { productName: "Sporty SmartWatch", category: "Watch", price: "99", image: "sporty-smartwatch.jpg" },
        { productName: "Basic Knitted Top", category: "Topwear", price: "29", image: "knitted-top.jpg" },
        { productName: "Black Leather Jacket", category: "Jacket", price: "129", image: "black-leather-jacket.jpg" },
        { productName: "Stylish Pink Trousers", category: "Bottomwear", price: "89", image: "pink-trousers.jpg" },
        { productName: "Brown Men's Jacket", category: "Jacket", price: "189", image: "brown-jacket.jpg" },
        { productName: "Comfy Grey Pants", category: "Bottomwear", price: "49", image: "comfy-grey-pants.jpg" }
    ],
};

// Ürünleri ekrana ekleme
for (let product of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", product.category.toLowerCase(), "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.productName.toUpperCase();
    infoContainer.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + product.price;
    infoContainer.appendChild(price);

    card.appendChild(infoContainer);

    document.getElementById("products").appendChild(card);
}

// Kategoriye göre filtreleme
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value.toLowerCase() === "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value.toLowerCase())) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

// Arama butonu
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.trim();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

// Sayfa yüklendiğinde tüm ürünleri göster
window.onload = () => {
    filterProduct("all");
};
