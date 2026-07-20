// Write three separate asynchronous functions. Each should take 1 second (using setTimeout).

// 1. placeOrder(item, callback)
//    → Logs: "Order placed for [item]"
//    → Passes a fake order ID (like 1234) to the callback.

// 2. processPayment(orderId, callback)
//    → Logs: "Payment processed for order [orderId]"
//    → Calls the callback.

// 3. shipItem(item)
//    → Logs: "[item] has been shipped!"

// The Challenge:

// Execute them in order. You want to buy a "Laptop". You must place the order, then process the payment, then ship the item, relying entirely on callbacks to keep them in sequence.

function placeOrder(item, callback) {
  setTimeout(() => {
    const products = {
        product: 'Laptop',
        price: 700, 
        color: 'Black',
        id: 1234
    } 

    callback(products)
  }, 1000);
}

function processPayment(orderId, callback) {
  setTimeout(() => {
    console.log('Payment is processed.');
    callback()
  }, 1000);
}

function shipItem(item) {
  setTimeout(() => {
    console.log( item.product + ' Shipped successfully');
  }, 1000);
}


placeOrder("Laptop", (productData) => {
    console.log("Order placed for " + productData.product);
    processPayment(productData.id, () => {
        shipItem(productData, () => {

        })
    })   
})