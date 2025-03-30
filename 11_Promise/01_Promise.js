/*
    JavaScript Promise Explained Simply
    A Promise in JavaScript is like a "promise" in real life.
    Imagine you order a pizza online. The restaurant promises to deliver the pizza in 30 minutes.
    There are three possible outcomes:

    Fulfilled (Resolved) – You get the pizza.

    Rejected – The restaurant cancels your order.

    Pending – The pizza is still being prepared.

    Similarly, in JavaScript, a Promise is used to handle asynchronous operations.
    It represents a value that may be available now, later, or never.
*/

// Example 1: Creating a Promise that resolves after 3 seconds

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Pizza delivered!");
  }, 3000);
});

// Handle the promise
myPromise
  .then((message) => {
    console.log(message); // Output: Pizza delivered!
  })
  .catch((error) => {
    console.error(error); // If rejected, it will log the error.
  });

// Example 2: Creating a Promise that rejects after 3 seconds
// (Sometimes, the restaurant might cancel the order)

let pizzaOrder = new Promise((resolve, reject) => {
  let ingredientsAvailable = false; // Simulating ingredient availability
  setTimeout(() => {
    if (ingredientsAvailable) {
      resolve("Pizza delivered!");
    } else {
      reject("Order canceled: Ingredients not available.");
    }
  }, 3000);
});

pizzaOrder
  .then((message) => {
    console.log(message); // Output: Pizza delivered!
  })
  .catch((error) => {
    console.error(error); // Output: Order canceled: Ingredients not available.
  });

// Exmaple 3: Promise Chaining
// (You can chain multiple promises together)
let orderPizza = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Pizza is prepared!"), 2000);
});

orderPizza
  .then((message) => {
    console.log(message);
    return "Pizza is on the way!";
  })
  .then((message) => {
    console.log(message);
    return "Pizza delivered!";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Example 4: Using async/await (Modern Approach)
// instead of using .then() and .catch(), you can use async/await for cleaner code

function orderPizzaAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pizza is prepared!"), 2000);
  });
}

async function getPizza() {
  console.log("Ordering pizza...");
  let result = await orderPizzaAsync();
  console.log(result); // Output: Pizza is prepared!
}

getPizza();
