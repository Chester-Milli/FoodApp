const foodItems = [
    {
        incart: 0,
        name: 'Okra Soup',
        image: 'Images/Okro.jpg',
        price: 3200
    },

    {
        incart: 0,
        name: 'Jellof Rice',
        image: 'Images/riceandchicken.jpg',
        price: 2500
    },

    {
        incart: 0,
        name: 'Beans and Dodo',
        image: 'Images/Beans-and-Plantain.jpg',
        price: 1500
    },

    {
        incart: 0,
        name: 'Ofe Nsala',
        image: 'Images/Ofe-Nsala.jpg',
        price: 4000
    },

    {
        incart: 0,
        name: 'Spaghetti',
        image: 'Images/spaghetti.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Tomato Stew and Rice',
        image: 'Images/tomato-stew.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Mango Soup',
        image: 'Images/mangoSoup.jpg',
        price: 3200
    },

    {
        incart: 6,
        name: 'African Salad',
        image: 'Images/abacha.jpeg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Bole',
        image: 'Images/bole.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Coconut Rice',
        image: 'Images/cocunutrice.jpg',
        price: 2500
    },

    
    {
        incart: 0,
        name: 'Moi-Moi',
        image: 'Images/moi-moi.webp',
        price: 1000
    },

    {
        incart: 0,
        name: 'Oha Soup',
        image: 'Images/ohasoup.webp',
        price: 3200
    },

    {
        incart: 0,
        name: 'Egusi and Fufu',
        image: 'Images/egusiandfufu.jpg"',
        price: 3200
    },

    {
        incart: 0,
        name: 'Eba and Ewedu',
        image: 'Images/EbaandEwedu.jpg',
        price: 3200
    },

    {
        incart: 0,
        name: 'Banga Soup',
        image: 'Images/bangasoup.jpg',
        price: 2500
    },
];



// Declaring carts variable that holds value of the add to cart icon and Looping through it so that it can always click o select one at a time 
let carts = document.querySelectorAll('.viewMenuAddIcon');


for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener('click', ()=>{
    cartNumbers(foodItems[i])
    totalCost(foodItems[i])
})
}



// This Function does not allow shopped items on cart to get cleared even after page is refreshed
function onLoadCartNumbers(){
    let foodProducts = localStorage.getItem('cartNumbers');

    if(foodProducts){
        document.querySelector('#count').innerHTML = foodProducts;
    }
}



// This function is used to store data in local storage and also for count increment
function cartNumbers(foodItems){
   let foodProducts = localStorage.getItem('cartNumbers');
   foodProducts = parseInt(foodProducts)
    
   if (foodProducts){
    localStorage.setItem('cartNumbers', foodProducts + 1)
    document.querySelector('#count').innerHTML = foodProducts + 1;
   }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#count').innerHTML = 1;
   }

   setItems(foodItems)
}




// This function makes it to be able to get multiple cart items including add more than a particular cart item
function setItems(foodItems){
    let cartItems = localStorage.getItem('foodItemsincart');
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){
        if(cartItems[foodItems.image] == undefined){
            cartItems = {
                ...cartItems,
                [foodItems.image]:foodItems
            }
        }

        cartItems[foodItems.image].incart += 1;
    }else{
        foodItems.incart = 1;
        cartItems = {
            [foodItems.image]: foodItems
        }
    }   
        localStorage.setItem('foodItemsincart', JSON.stringify (cartItems))
}


// A function to calculate total cost of shopped items
function totalCost(totalFoodItems){
    // console.log('the total price is', totalFoodItems.price);
    let cartCost = localStorage.getItem('totalCost');
     // converting cartCost to a number

    // console.log('My cart cost is', cartCost)
    // console.log(typeof cartCost)

    // adding food items prices when being clicked ongitgit add .
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + totalFoodItems.price)
    }else{
        localStorage.setItem('totalCost', totalFoodItems.price)
    }

    // To store the total price of cart items in local storage
}

// A function that runs whenever the page is displayed
function displayCart(){
    let cartItems = localStorage.getItem('foodItemsincart');

    //Converting JSON to javaScript objects
    cartItems = JSON.parse(cartItems);

    let foodItemsContainerJS = document.querySelector('.foodItems');

    // Getting total cart cost from local storage
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && foodItemsContainerJS){
        foodItemsContainerJS.innerHTML = '';
        Object.values(cartItems).map(items =>{
            foodItemsContainerJS.innerHTML += `
            <div class="foodItems">
                <span> <i class='remove shoppedItemsClose bx bxs-x-circle' data-name="${items.name}"></i> </span>
                <div class="imageJsContainer"><img class="imageJs" src="${items.image}"</div>
                <div class="foodDetails">
                    <div><span class="foodName"> ${items.name}</span></div>
                </div>
                <div><span>Price <span class="cartPrice"> ${items.price}</span></span>
            </div>
            <div class="addMinusIcons quantity">
                <i class='shoppedItemsAdd bx bxs-plus-circle'></i> &nbsp;
                <span> ${items.incart} </span> &nbsp;
                <i class='shoppedItemsMinus bx bxs-minus-circle'></i>
            <div>

            <div class="totalCart">
                ${items.incart * items.price}
            </div>
            ` 
        })

        foodItemsContainerJS.innerHTML +=`
        <div class="foodItemsTotalContainer">
            <h4 class="foodItemsTotalTitle">
                Food_Total
            </h4>
            <h4 class="foodTotal" id="totalprice"> &nbsp ${cartCost}
            </h4>
        `
    }
}

onLoadCartNumbers();
displayCart();




///--------------------------------------------------
// Handle Clicks to remove cart Item
// remove.onclick = function(e){
//     console.log('Clicked Last')
// }




// Payment Menu /////////////

// Function to display payment menu ///////////////////////
const displayPaymentMenu = document.querySelector('#payFoodbtn');

displayPaymentMenu.addEventListener("click", ()=>{
    let showPaymentMenu = document.querySelector(".formHidden");

    showPaymentMenu.style.display = "block";
});




// Function to closes payment menu ///////////////////////
const closePaymentMenu = document.querySelector('.closebtn');

closePaymentMenu.addEventListener('click', ()=>{
    let hidePaymentMenu = document.querySelector('.formHidden');

    hidePaymentMenu.style.display = 'none';
})
////////////////////////////////////////////////////////


// const customerName = document.querySelector('#userName');
// const customerEmail = document.querySelector('#email');
// const nameInput = document.querySelector('.nameInput');
// const invoiceNumber = document.querySelector('.invoiceNumber');
// const total = document.querySelector('.total');
// const proceedPayment = document.querySelector('.proceedPayment');


// proceedPayment.addEventListener('click', ()=>{
//     const customerInvoice = foodItems.find(el => el.name === el.price)

//     nameInput.innerHTML = userName.value
//     total.innerHTML = items.incart * items.price;
// })


// const search = document.querySelector('#search');

// search.addEventListener('click', ()=>{
//     let searchInput = document.querySelector('#searchInput').value;

//     const searchFood = foodItems.find(el => el.name == searchInput);

//     console.log(searchFood);
// })