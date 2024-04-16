#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    TKR: 74.75,
    PKR: 280,
};
let userName = await inquirer.prompt([
    {
        name: 'from',
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "TKR", "PKR"]
    },
    {
        name: 'to',
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "TKR", "PKR"]
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number',
    },
]);
let fromAmount = currency[userName.from];
let toAmount = currency[userName.to];
let amount = userName.amount;
let baseamount = amount / fromAmount;
let convertamount = baseamount * toAmount;
console.log(convertamount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
