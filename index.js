// finding element function
const getElementID = (elementID)=>{
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
    card.addEventListener("click", () => {
        console.log('button is clicked');
    })
}