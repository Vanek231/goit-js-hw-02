function checkForSpam(message) {
    const UppCase = message.toUpperCase()
    return UppCase.includes('SALE') || UppCase.includes('SPAM')
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//  if (message === 'Spam'.toUpperCase, message === `sale`.toUpperCase) {
//         return (true)
//     } else {
//     return (false)
//     }

//     const UppCase = (message.toUpercase())
//     if (UppCase.includes('SALE')){
//         return (true)
//     } else if (UppCase.includes('SPAM')) {
//         return (true)
//     } else {
//         return (false);
//     }
// }