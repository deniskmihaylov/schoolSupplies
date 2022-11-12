function suppliesForSchool (input) {
    let pens = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.20
    let cleaner = Number(input[2]) * 1.20
    let discount = Number(input[3]) / 100
    let sum = pens + markers + cleaner; 
    let finalprice = sum - (sum * discount)
    console.log (finalprice)
}

suppliesForSchool([2, 3, 4, 25])