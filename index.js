/ Module package CORE

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


// Node.js is combination of (JS && V8 && LibUV);













// Module package EXTERNAL
// Module package FILE