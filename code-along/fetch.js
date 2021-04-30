// listen for the document to be finished loading
document.addEventListener('DOMContentLoaded', async function(event) {


  let submitButton = document.querySelector(`button`)

  submitButton.addEventListener(`click`,async function (event){

    event.preventDefault()

    let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
    let response = await fetch(url)
    let json = await response.json()
    console.log(json)

    let currentPriceUSD = json.bpi.USD.rate_float
    let amountInput = document.querySelector(`#amount`)
    let amount = amountInput.value

    let currentValue = amount * currentPriceUSD
    let outputElement = document.querySelector(`.output`)

    let sentence = `You have $${currentValue} worth of Bitcoin!`
    outputElement.innerHTML = sentence

  



  })
  // Get a reference to the "submit" button

  // When the "submit" button is clicked:

    // - Ignore the default behavior of the button

    // - Store the URL we want to fetch in memory

    // - Fetch the url, wait for a response, store the response in memory

    // - Ask for the json-formatted data from the response, wait for the data, store it in memory

    // - Write the json-formatted data to the JavaScript console

    // - Store the current price of Bitcoin in USD in memory

    // - Get a reference to the "amount" input

    // - Store the amount from the "amount" input in memory

    // - Calculate the total value based on amount and current price

    // - Get a reference to the "output" element

    // - Make a sentence to write out to the "output" element

    // - Replace the "output" element's HTML with the sentence
    
})