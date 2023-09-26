console.log("Jack ma maslahatlar");
const list = [
    "yaxshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", // 20-30
    "uzingizga ishlashingizga boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 40-50
    "endi dam oling, foydasi yoq endi", // 60
]


function maslahatBering(a, callcack){
    if(typeof a !== "number") callcack("insert a number", null);
    else if(a < 20) callcack(null, list[0]);
    else if(a > 20 && a <= 30) callcack(null, list[1]);
    else if(a > 30 && a <= 40) callcack(null, list[2]);
    else if(a > 20 && a <= 50) callcack(null, list[3]);
    else if(a > 20 && a <= 60) callcack(null, list[4]);
    else{
       setTimeout(function (){
        callcack(null, list[5])
       },5000)
    }
}

console.log("passed here 0");
maslahatBering(65, (err, data) =>{
    if(err) console.log("ERROR:", err);
    console.log("javob:", data);
});

console.log("passed here 1");