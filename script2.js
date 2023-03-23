let city = ["Lahore", "Faisalabad", "Islamabad"]
document.getElementById("city").innerHTML = city;

let cityfirstletter = city.slice(0,1).toUppercase;
//Clear Output
document.getElementById("clear").onclick = function(){

    document.getElementById("output").innerHTML= ""
}
document.getElementById("addcity").onclick = function(){

    prompt("Enter New City");
        array.push(name);
        return array;
      }
      //Clear Output
document.getElementById("clear").onclick = function(){

    document.getElementById("inputtext").innerHTML= " "
  }
  function addCityToDiv() {
    // Prompt the user for a city name
    const addcity = prompt("Enter a city name:");
  
    // Find the div element to add the city name to
    const output = document.getElementById("output");
  
    // Create a new text node with the city name
    const cityText = document.createTextNode(cityName);
  
    // Append the text node to the div element
    output.appendChild(cityText);
  }
addCityToDiv();