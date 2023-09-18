const moment = require('moment')

class Accaount {
    #amount;
    #accaount_id;
    constructor(name, amount, accaount_id){
        this.name = name;
        this.#amount = amount;
        this.#accaount_id = accaount_id
    }

    telMeBalance(){
        console.log(`Sizning hisobingizdagi qoldiq`, this.#amount);
        return this.#amount;
    }

    withdrawMoney(amount){
        if(this.#amount > amount){
            console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`)
        } else{
            console.log(`Sizning balansingiz pul yetarli emas: ${this.#amount}`);
        }
    }

    makeDeposit(amount){
        this.#amount += amount;
        console.log(
            `Hisobingiz toldirildi, hisobingiz ${this.#amount} ni tashkil etdi`
        );
    }

    giveMeDetails(){
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} ga teng`);
        console.log('hisob raqamingiz:', this.#accaount_id)
    }

    static tellMeAboutClass(){
        console.log('Bu class accountlarni yasash uchun hizmat qiladi');
    }

    static tellMeTime(){
        console.log(`Hozirgi vaqt ${moment().format('YYY MM DD HH:mm:ss')}`);
    }
}

module.exports = Accaount  