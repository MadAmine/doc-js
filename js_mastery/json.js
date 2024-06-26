// JSON = (javascript Object Notation) data-interchange format
//        used for exchanging data between a server and a web app
//        JSON files {key:value} OR [{}, {}, {}]
// Define the URL of the JSON file
const jsonFileUrl = 'example.json';

// Fetch the JSON data from the file
fetch(jsonFileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    // Display the JSON data
    console.log('JSON data:', data);

    // Manipulate and use the JSON data
    const name = data.name;
    const age = data.age;
    console.log(`Name: ${name}, Age: ${age}`);

    // Access nested objects or arrays
    const address = data.address;
    console.log('Address:', address.city, ',', address.country);

    // Loop through an array in the JSON data
    const hobbies = data.hobbies;
    console.log('Hobbies:');
    hobbies.forEach(hobby => {
      console.log('-', hobby);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON data:', error);
  });


const fs = require('fs');

// Define the path to the JSON file
const jsonFilePath = 'data.json';

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Display the JSON data
  console.log('JSON data:', jsonData);

  // Manipulate and use the JSON data
  const name = jsonData.name;
  const age = jsonData.age;
  console.log(`Name: ${name}, Age: ${age}`);

  // Access nested objects or arrays
  const address = jsonData.address;
  console.log('Address:', address.city, ',', address.country);

  // Loop through an array in the JSON data
  const hobbies = jsonData.hobbies;
  console.log('Hobbies:');
  hobbies.forEach(hobby => {
    console.log('-', hobby);
  });
});






