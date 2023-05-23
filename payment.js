const foodItems = [
    {
        incart: 0,
        name: 'Okra Soup',
        image: '/Frontend/Frontend Milestone project/Images/Okro.jpg',
        price: 3200
    },

    {
        incart: 0,
        name: 'Jellof Rice',
        image: '/Frontend/Frontend Milestone project/Images/riceandchicken.jpg',
        price: 2500
    },

    {
        incart: 0,
        name: 'Beans and Dodo',
        image: '/Frontend/Frontend Milestone project/Images/Beans-and-Plantain.jpg',
        price: 1500
    },

    {
        incart: 0,
        name: 'Ofe Nsala',
        image: '/Frontend/Frontend Milestone project/Images/Ofe-Nsala.jpg',
        price: 4000
    },

    {
        incart: 0,
        name: 'Spaghetti',
        image: '/Frontend/Frontend Milestone project/Images/spaghetti.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Tomato Stew and Rice',
        image: '/Frontend/Frontend Milestone project/Images/tomato-stew.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Mango Soup',
        image: '/Frontend/Frontend Milestone project/Images/mangoSoup.jpg',
        price: 3200
    },

    {
        incart: 6,
        name: 'African Salad',
        image: '/Frontend/Frontend Milestone project/Images/abacha.jpeg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Bole',
        image: '/Frontend/Frontend Milestone project/Images/bole.jpg',
        price: 2000
    },

    {
        incart: 0,
        name: 'Coconut Rice',
        image: '/Frontend/Frontend Milestone project/Images/cocunutrice.jpg',
        price: 2500
    },

    
    {
        incart: 0,
        name: 'Moi-Moi',
        image: '/Frontend/Frontend Milestone project/Images/moi-moi.webp',
        price: 1000
    },

    {
        incart: 0,
        name: 'Oha Soup',
        image: '/Frontend/Frontend Milestone project/Images/ohasoup.webp',
        price: 3200
    },

    {
        incart: 0,
        name: 'Egusi and Fufu',
        image: '/Frontend/Frontend Milestone project/Images/egusiandfufu.jpg"',
        price: 3200
    },

    {
        incart: 0,
        name: 'Eba and Ewedu',
        image: '/Frontend/Frontend Milestone project/Images/EbaandEwedu.jpg',
        price: 3200
    },

    {
        incart: 0,
        name: 'Banga Soup',
        image: '/Frontend/Frontend Milestone project/Images/bangasoup.jpg',
        price: 2500
    },
];



const Delivery = [
    {
        deliveryType: 'Tricyle',
        price: 1500,
        available: 12
    },

    {
        deliveryType: 'Cab',
        price: 2500,
        available: 10
    },

    {
        deliveryType: 'Truck',
        price: 4000,
        available: 8
    }
];




const customerName = document.querySelector('#userName');
const customerEmail = document.querySelector('#email');
const nameInput = document.querySelector('.nameInput');
const invoiceNumber = document.querySelector('.invoiceNumber');
const total = document.querySelector('.total');
const proceedPayment = document.querySelector('.proceedPayment');


proceedPayment.addEventListener('click', ()=>{
    const customerInvoice = foodItems.find(el => el.deliveryType === el.deliveryMethods.value)

    nameInput.innerHTML = userName.value
    // roomTypeInput.innerHTML = roomName.value
    total.innerHTML = customerInvoice.price * items.price;

    invoice.style.display = 'block'
})


const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#searchInput');

searchBtn.addEventListener('click', ()=>{
    let searchFoodItems = foodItems.find(search => search.name === searchInput.value);
    console.log(searchFoodItems);
})