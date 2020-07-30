// https://api.vschool.io/pokemon
// -- Step 1 - get the data - Write a function that gets the JSON and parses the JSON 
// to create an array of objects that look like this:

// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.

// -- Step 2 - display the data - Make each Pokemon's name show up on 
// a separate line in the browser.
// You will be using a for loop to iterate through each pokemon object, 
// and some DOM mamnipulation to add nodes for each Pokemon.

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONData = xhr.responseText
        const data = JSON.parse(JSONData)
        showData(data.results)
    }
}

function showData(arr){
    const h1 = document.createElement('h1')
    h1.textContent = poke.name
    document.body.appendChild(h1)
}


// document.getElementsByClassName("here").textContent = "Name: "+jsonData+"\nResource_URI: "+data.name;