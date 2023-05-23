// Proceed Payment button
const proceedPayment = document.getElementById('proceedPayment');


proceedPayment.addEventListener('click', () => {
    //Welcome details for nameinput and total price
    if(document.getElementById('userName').value.length == 0){
    return
    }
    const name = document.getElementById('userName').value;
    document.getElementById('customernamediv').textContent = name;


    // Price of each delivery method
    const dprice = parseInt(document.getElementById('dtype').value);
    document.getElementById('deliveryprice').innerHTML = dprice

    // Getting the total price from the cart items plus delivery price
    document.getElementById('total').textContent = parseInt(document.getElementById('totalprice').textContent) + dprice;
})

