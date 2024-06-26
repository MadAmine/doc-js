
// A function that returns a promise that resolves after a given time
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// An asynchronous function that simulates fetching data from a server
async function fetchData() {
  console.log("Fetching data...");
  await delay(2000); // Simulate a delay of 2 seconds
  return "Data fetched!";
}

// An asynchronous function that uses fetchData and displays the result
async function displayData() {
  console.log("Displaying data...");
  const data = await fetchData();
  console.log(data);
}

// Call the displayData function
displayData();




