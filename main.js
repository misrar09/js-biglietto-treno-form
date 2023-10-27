//Geting input from the users:

const kmInput = document.getElementById("km")


const ageGroup = document.getElementById("ageGroup");


const buttonGenerate = document.querySelector("#btnGen");

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
    const passengerAge = ageGroup.value
    
    if (isNaN(travelingDistance)) {
        console.log("error");
    }
    
    else
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

    document.getElementById("price").innerHTML = `Your Ticket price is:  ${finalPrice.toFixed(2)} euros only`;


})





            

//Output on the page:


