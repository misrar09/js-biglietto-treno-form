
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  


//Geting input from the users:

const kmInput = document.getElementById("km")
const ageGroup = document.getElementById("ageGroup");
const buttonGenerate = document.querySelector("#btnGen");
const priceEl = document.getElementById("price")
const fullNameInput = document.getElementById("fullName");
const form = document.querySelector("form");
const cancelBtn = document.getElementById("btnCanc");



//To print the input in Console
/* console.log("KM", travelingDistance)
console.log("Age", passengerAge) */


//Cost of travelling per Kilometer
const pricePerKm = 0.21;

//Discount types
const minorsDiscount = 0.20;
const seniorsDiscount = 0.40;

//Calculation:
let finalPrice;

buttonGenerate.addEventListener("click", function() {

    // Note: remember to put the input values inside the button
    const travelingDistance = parseFloat(kmInput.value); 
    const passengerAge = ageGroup.value;
    const fullName = fullNameInput.value;


    
    if( isNaN(travelingDistance)) {
        priceEl.innerHTML = "Pleaes insert the distance";

    } else

        if (passengerAge == "minor") {
            finalPrice = ((pricePerKm * travelingDistance) * (1 - minorsDiscount))
        }
    
        else
            if (passengerAge == "senior") {
                finalPrice = ((pricePerKm * travelingDistance) * (1 - seniorsDiscount))
    
            }
    
            else {
                finalPrice = (pricePerKm * travelingDistance)
                }


//Output on the page:
    priceEl.innerHTML = `${finalPrice.toFixed(2)}€`;
    document.getElementById("userName").innerHTML = `${fullName}`;
    document.querySelector(".carrozza").innerHTML = `${getRandomInt(1, 10)}`;
    document.querySelector(".codeCp").innerHTML = `${getRandomInt(10000, 90000)}`
    


})



cancelBtn.addEventListener("click", function () {

  form.reset();


  priceEl.innerHTML = "---";
  document.querySelector(".carrozza").innerHTML = "";
  document.querySelector(".codeCp").innerHTML = "";
});



