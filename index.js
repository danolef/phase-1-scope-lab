// Write your solution in this file!
var customerName  = "bob"
var bestCustomer
const leastFavoriteCustomer = 'Karen'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    // return customerName
}

function setBestCustomer() {
    bestCustomer = "not bob"
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'really is karen'
    return leastFavoriteCustomer
}