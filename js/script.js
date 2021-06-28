window.addEventListener("DOMContentLoaded", () => {

   class Catalog {
      constructor(selector = '.goods-list') {
         this.selector = selector
         this._goods = []
         this._allProducts = []

         this._fetchGoods()
         this._render()
         this.totalPrice()
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

      totalPrice() {
         let total = 0
         this._goods.forEach( item => {total += item.price})
         console.log(`Total item's price from _goods =${total}$`); 
         return total
         
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

   