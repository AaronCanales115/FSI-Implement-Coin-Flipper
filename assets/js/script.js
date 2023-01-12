// TODO: Declare any global variables we need
let numberHeads = 0;
let numberTails = 0;
let pctHeads = 0;
let pctTails = 0;
let total = 0;

const flipButton = document.querySelector('#flip');
const clearButton = document.querySelector('#clear');
let statusMessage = document.querySelector('.status')
let image = document.querySelector('img');
const numberHeadsCell = document.querySelector("#heads");
const numberTailsCell = document.querySelector("#tails");
const pctHeadsCell = document.querySelector("#heads-percent");
const pctTailsCell = document.querySelector("#tails-percent");

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener('click', function(e){

        total++;
        let result = Math.round(Math.random() * 101);

        if(result < 51 ){
            numberHeads++
            statusMessage.textContent = 'You flip heads'
            image.src = './assets/images/penny-heads.jpg'
            image.alt = 'Penny heads image'

        } else {
            numberTails++
            statusMessage.textContent = 'You flip tails'
            image.src = "./assets/images/penny-tails.jpg"
            image.alt = 'Penny tails image'
        }

        pctHeads = Math.round(numberHeads/total * 100);
        pctTails = Math.round(numberTails/total * 100);

        numberHeadsCell.textContent = `${numberHeads}`
        numberTailsCell.textContent = `${numberTails}`
        pctHeadsCell.textContent = `${pctHeads}%`
        pctTailsCell.textContent = `${pctTails}%`

    });
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        clearButton.addEventListener('click', function(e) {
            total = 0;
            pctTails = 0;
            pctHeads = 0;
            numberHeads = 0;
            numberTails = 0;

            numberHeadsCell.textContent = `${numberHeads}`
            numberTailsCell.textContent = `${numberTails}`
            pctHeadsCell.textContent = `${pctHeads}%`
            pctTailsCell.textContent = `${pctTails}%`

            statusMessage.textContent = "Let's get rolling"
            image.src = './assets/images/penny-heads.jpg'
        });

})