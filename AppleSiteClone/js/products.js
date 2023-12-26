// Johnathan Friend
"use strict";

//declare variables
let orderTotal = 0.0;
const orderList = document.querySelectorAll('#items > div')
const total = document.querySelector('#total');
const orderSelect = document.querySelector('#order');
const placeOrder = document.querySelector('#place_order');
const orderForm = document.querySelector('#order_form');
const clearOrder = document.querySelector('#clear_order');

//when item is clicked it is added to cart
orderList.forEach(x => {
    const itemTitle = x.querySelector('h2');
    let itemPrice = x.querySelector('p').textContent;
    itemPrice = itemPrice.replace('$', '');
    itemPrice = parseInt(itemPrice, 10);
    
    //when hover over item the text changes to blue
    x.addEventListener('mouseover', () => {
        itemTitle.style.color = '#2997ff';
    })
    x.addEventListener('mouseout', () => {
        itemTitle.style.color = 'black';
    })

    //adds total and adds to order select
    x.addEventListener('dblclick', () => {
        total.textContent = 'Order Total: $' + (orderTotal += itemPrice);
        const option = document.createElement('option');
        option.textContent = '$' + itemPrice + ' - ' + itemTitle.textContent; 
        orderSelect.appendChild(option);
    })
})

//places the order
placeOrder.addEventListener('click', () => {
    if (orderSelect.options.length > 0) {
        orderForm.submit();
    } else {
        alert("Please Enter at Least One Item into the Cart.")
    }
})

//clears the order
clearOrder.addEventListener('click', () => {
    orderTotal = 0;
    total.textContent = "";
    orderSelect.innerHTML = "";
})