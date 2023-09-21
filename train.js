// TASK - D

class Shop {
    constructor(nonCount, lagmonCount, colaCount) {
      this.nonCount = nonCount;
      this.lagmonCount = lagmonCount;
      this.colaCount = colaCount;
    }
  
    qoldiq() {
      const now = new Date();
      return `hozir ${now.getHours()}:${now.getMinutes()}da ${this.nonCount}ta non, ${this.lagmonCount}ta lagmon va ${this.colaCount}ta cola mavjud!`;
    }
  
    sotish(mahsulot, miqdor) {
      if (mahsulot === 'non' && this.nonCount >= miqdor) {
        this.nonCount -= miqdor;
        return `Siz sotib oldingiz: ${miqdor} non.`;
      } else if (mahsulot === 'lagmon' && this.lagmonCount >= miqdor) {
        this.lagmonCount -= miqdor;
        return `Siz sotib oldingiz: ${miqdor} lagmon.`;
      } else if (mahsulot === 'cola' && this.colaCount >= miqdor) {
        this.colaCount -= miqdor;
        return `Siz sotib oldingiz: ${miqdor} cola.`;
      } else {
        return `Uzr, ${mahsulot} yetarli emas yoki mavjud emas.`;
      }
    }
  
    qabul(mahsulot, miqdor) {
      if (mahsulot === 'non') {
        this.nonCount += miqdor;
      } else if (mahsulot === 'lagmon') {
        this.lagmonCount += miqdor;
      } else if (mahsulot === 'cola') {
        this.colaCount += miqdor;
      }
    }
  }
  
  const shop = new Shop(4, 5, 2);
  console.log(shop.qoldiq());
  console.log(shop.sotish('non', 3));
  console.log(shop.qabul('cola', 4));
  console.log(shop.qoldiq());