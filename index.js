// / Module package CORE
// Core packagelar node.js ni ichida boladi va biz alohida install qilishimiz shart emas 

// const { default: inquirer } = require("inquirer")

// const { default: inquirer } = require("inquirer");

// Core modullar bizga node.js ni ichiga ustanovka qilib berilgan boladi.
// misol uchun: setTimeout(), setInterval()......


// let number = 0;
// setInterval browser API hisoblanadi parametr qabul qiladi 1.=> call back function 2.=> qancha vaqt olishi, time
// setTimeoutdan farqi  berilgan vaqtdan keyin har safar function ishga tushaveradi.

// setInterval(function (){
//     console.log('hisob', number);
//     number++;
// }, 1000);



// setTimeout browser web API hisoblanadi, 2 ta parametr qabul qiladi 1-callback function,  2-kutiladigan vaqt yani time
// bu bizga suniy kutish xosil qilib beradi.
// setTimeout(() => {
//     console.log('hello');
// }, 5000);

// bularning hammasi Core package hisoblanadi



// buyerda biz packageni chaqiryapmiz
// fs => file system buni ichida birqancha methodlar bor
// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("===============");

// buyerda  biz fs ga ozgartirish kiritdik va bizga ushbu datani qayta oqib beradi
// fs.writeFileSync('./input.txt', `${data} \n\t\t by Sardor`);
// const new_data = fs.readFileSync("./input.txt", "utf8")
// console.log(new_data)



// OS

// console.log("CORE PACKAGE");

// let os = require('os');
// console.log("Platform:" + os.platform());
// console.log("Architec:" + os.arch);


// PATH

// const path = require("path")
// const filename = path.extname('/Users/sardorahmadullayev/Desktop/Example/Reja/index.js')
// console.log(filename);


// CORE OBJ

// console.log("process", process.version);





// Node.js is combination of (JS && V8 && LibUV);

// MODULE package EXTERNAL
// External packagelarni biz npm install orqali ornatamiz va require orqali chaqirib olamiz





// MOMENT 


// const moment = require('moment');
// setInterval(()=> {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 3000)


// VALIDATOR

// const validator = require('validator')
// const test = validator.isEmail('foo@bar.com')
// const test = validator.isIP('114.200.35.154')
// console.log('test:', test);


// UUID
// takrorlanmaydigan random stringlarni bizga xosil qilib beradi
// const {v4: uuidv4 } = require('uuid')
// const random = uuidv4();
// console.log('random', random);


// CHALK
// const chalk = require('chalk')
// const log = console.log;
// log(chalk.red(`uuid creates`) + random + chalk.red('!'));









// FILE MODULES

// const calculate = require('./hisob.js')

// const natija  = calculate.kopaytirish(80, 20)
// console.log('natija', natija);
// console.log('============');

// const natija2 = calculate.qoshish(70, 20)
// console.log('natija', natija2)

// const natija3 = calculate.ayrish(90,30);
// console.log('natija', natija3);


const Account = require("./accaount")
Account.tellMeAboutClass();
Account.tellMeTime();


console.log('=================');

const myAccount = new Account('Sardor', 200000, 97549537859);
myAccount.giveMeDetails()   

myAccount.makeDeposit(1000000)

// ferrari usd
myAccount.withdrawMoney(400000)
myAccount.makeDeposit(200000)