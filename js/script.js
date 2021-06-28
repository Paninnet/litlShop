window.addEventListener("DOMContentLoaded", () => {

   class Catalog {
      constructor(selector = '.goods-list') {
         this.selector = selector
         this._goods = []
         this._allProducts = []

         this._fetchGoods()
         this._render()
      }

      _fetchGoods() {
         this._goods = [
            { img: "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
            { img: "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg", title: 'Socks', price: 50 },
            { img: "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg", title: 'Jacket', price: 350 },
            { img: "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg", title: 'Shoes', price: 250 },
            { img: "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
            { img: "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg", title: 'Socks', price: 50 },
            { img: "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg", title: 'Jacket', price: 350 },
            { img: "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg", title: 'Shoes', price: 250 },

         ]
      }

      _render() {
         let block = document.querySelector(this.selector)

         for (let product of this._goods) {


            let catalogObject = new CatalogItem(product)

            this._allProducts.push(catalogObject)
            block.insertAdjacentHTML("beforeend", catalogObject.render())
         }
      }


   }

   class CatalogItem {
      constructor(item) {
         this.img = item.img;
         this.title = item.title;
         this.price = item.price
      }
      render () {
         return `<div class="goods-item">
                     <img src =${this.img} alt="Картинка">
                     <h3 class ="title">${this.title}</h3>
                     <h3 class ="price">Цена ${this.price}$</h3>
                     <button class="by-btn">Добавить в корзину</button>
               </div>`;
      }


   }

   let newCatalog = new Catalog()
})

   // newCatalog._fetchGoods()
   // newCatalog._render()

   // const goods = [
   //    { img : "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
   //    { img : "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg" ,title: 'Socks', price: 50 },
   //    { img : "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg" ,title: 'Jacket', price: 350 },
   //    { img : "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg" ,title: 'Shoes', price: 250 },
   //    { img : "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
   //    { img : "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg" ,title: 'Socks', price: 50 },
   //    { img : "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg" ,title: 'Jacket', price: 350 },
   //    { img : "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg" ,title: 'Shoes', price: 250 },

   // ];

   // const renderItem = (img, title, price) => {
      // return `<div class="goods-item">
      //                <img src =${img} alt="Картинка">
      //                <h3 class ="title">${title}</h3>
      //                <h3 class ="price">Цена ${price}$</h3>
      //                <button class="by-btn">Добавить в корзину</button>
      //         </div>`
   // }

   // const renderList = (products) => {
   //    let goodsList = products.map(item => renderItem(item.img, item.title, item.price)).join(" ")
   //    document.querySelector('.goods-list').innerHTML = goodsList
   // }

   // renderList(goods)

   // // -------------------------------------------------- ES5


   // function Person (name, yearOfBirth){
   //    this.name = name;
   //    this.yearOfBirth = yearOfBirth;
   // }
   // Person.prototype.calc =  function (){
   //    return new Date ().getFullYear () - this.yearOfBirth
   // }

   // let ilia = new Person ("Ilia", 1999)
   // let ksu = new Person ("Ksenia", 1998)
   // let dime = new Person ("Dima", 2002)
   // console.log(ilia.calc());
   // console.log(ilia);
   // console.log(ksu.calc());
   // console.log(dime.calc());

   // function Teacher (name, yearOfBirth, subject){
   //    Person.call(this, name, yearOfBirth)
   //    this.subject =subject
   // }

   // Teacher.prototype = Object.create(Person.prototype)
   // Teacher.prototype.consttuctor = Teacher

   // let ma = new Teacher ("Natalia", 1974, "Russian")
   // console.log(ma);
   // console.log(ma.calc());


   // // ---------------------------------------------------- ES6
   // class Car {
   //    constructor (marka, horsePower, doors){
   //       this.marka = marka;
   //       this.horsePower = horsePower
   //       this.doors = doors
   //    }
   //    calcPover(){
   //       return this.horsePower * 0.74
   //    }
   // }

   // class SportCar extends Car {
   //    constructor(marka, horsePower, doors, color) {
   //       super (marka, horsePower, doors)
   //       this.color = color
   //    }

   //    maxSpeed() {
   //       return (this.calcPover() * 1.5).toFixed(2)
   //    }

   //    static costInRubls(dollarPrice){
   //       return (dollarPrice * 74.5).toFixed(2)
   //    }
   // }

   // let wv = new Car("VolksWagen", 160, 4 )
   // console.log(wv);
   // console.log(wv.calcPover())

   // let porsh = new SportCar("Porshe", 560, 2, "red")
   // console.log(porsh);
   // console.log(porsh.calcPover())
   // console.log(porsh.maxSpeed())
   // //console.log(porsh.costInRubls(20000))
   // console.log(SportCar.costInRubls(200000000)); 








