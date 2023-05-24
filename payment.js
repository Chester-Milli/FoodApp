// Proceed Payment button
const proceedPayment = document.getElementById('proceedPayment');


proceedPayment.addEventListener('click', () => {
    //Welcome details for nameinput and total price
    if(document.getElementById('userName').value.length == 0){
        return document.getElementById('userName').style.border = '2px solid red'
    }

    // This checks if the selected items/value is the 'select' option, if it is the 'select' option then it returns nothing
    // const nonSelect = document.getElementById('select').input;
    // if(dprice.length.value == 0){
    //     return
    // }
    
    const name = document.getElementById('userName').value;
    document.getElementById('customernamediv').textContent = name;


    // Price of each delivery method
    const dprice = parseInt(document.getElementById('dtype').value);
    document.getElementById('deliveryprice').innerHTML = dprice

    // Getting the total price from the cart items plus delivery price
    document.getElementById('total').textContent = parseInt(document.getElementById('totalprice').textContent) + dprice;
})

