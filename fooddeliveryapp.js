// const category = [...new Set(foodItems.map((item)=>
//     {return item}))]
    
//     let i = 0;
//     document.getElementById('root').innerHTML = category.map((item) => {
//         var {name, image, price} = item;

//     })



// Black & White background
const background = document.querySelector('#background');

const backgroundChanger = () => {
    const background = document.body
    background.classList.toggle('darkMode')
    if (background.classList('darkMode')) {
        background.innerHTML ="<i class='bx bxs-moon whiteBackground'></i>"
    }else {
        background.innerHTML ="<i class='bx bxs-sun'>"
    }
}

background.addEventListener('click', backgroundChanger);

background.addEventListener('click', ()=>{

})




/////////////// Hide and show Food Menu //////////////

// Function to show Food Menu ////////////////////////
const deliciousbtn = document.querySelector('#displayFoodMenu')

deliciousbtn.addEventListener("click", ()=>{
    let showFoodMenu = document.querySelector(".viewMenu");

    showFoodMenu.style.display = "block";
});


// Function to hide Food Menu ////////////////////////
const hideFoodMenu = document.querySelector('#hideFoodMenu')

hideFoodMenu.addEventListener('click', ()=>{
    const hideMenu = document.querySelector(".viewMenu");

    hideMenu.style.display = 'none'
})


