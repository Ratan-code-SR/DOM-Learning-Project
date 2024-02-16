// finding element function
const getElementID = (elementID) => {
    const element = document.getElementById(elementID);
    return element;
}

// finding all element
const chartCount = getElementID("cart-count");
const budget = getElementID("budget");
const selectedPriceContainer = getElementID("selected-place-container");
const cartContainer = getElementID("cart-container");
const totalCost = getElementID("total-cost");
const grandTotal = getElementID("grand-total");


// card button finding
const cards = document.querySelectorAll(".add-btn");
for (const card of cards) {
    card.addEventListener("click", (event) => {
        chartCount.innerText++;
// find place and price value
        const place = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
// create li element
        const li = document.createElement("li");
         li.innerHTML =`${place} ${parseInt(price)}`;
        const test = selectedPriceContainer.appendChild(li);
        test.classList.add("li-style");
        




    })
}





// create list function
const createList = () => {
    const li = document.createElement("li");
    li.createTextNode = ``
}