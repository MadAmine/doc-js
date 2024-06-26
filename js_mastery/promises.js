 // Function that returns a promise to simulate asynchronous behavior
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is some data fetched asynchronously';
      resolve(data); // Resolving the promise with data
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the fetchData function with promises
console.log('Fetching data...');
fetchData()
  .then((result) => {
    console.log('Data fetched successfully:', result);
    return result.toUpperCase(); // Transforming the fetched data
  })
  .then((transformedData) => {
    console.log('Transformed data:', transformedData);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });





