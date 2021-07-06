window.addEventListener("DOMContentLoaded", () => {
   const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"

   let getRequest = (url) => {
      return new Promise((resolve, reject) => {
         let xht = new XMLHttpRequest()
         xht.open("GET", url, true)
         if (xht.readyState === 4) {
            if (xht.status !== 200) {
               reject("Erroe")
            } else {
               resolve(xht.responseText)
            }
         }
         xht.send()
      }

      )

   }



   class Catalog {
      constructor(selector = '.goods-list') {
         this.selector = selector
         this._goods = []
         this._allProducts = []
         
         this._getGoods().then((data => {
            this._goods = data
            this._render()
         }))
         this.totalPrice()
      }

      _getGoods() {
         return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(erroe => console.log(erroe))

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
         return this._allProducts.reduce((accum, item) => accum += item.price, 0);
      }


   }

   class CatalogItem {
      constructor(item) {
         this.img = 'https://im0-tub-ru.yandex.net/i?id=ed86bf84e7c282bca09bf60f33c6d6cd&n=13';
         this.product_name = item.product_name;
         this.price = item.price
      }
      render() {
         return `<div class="goods-item">
                     <img src =${this.img} alt="Картинка">
                     <h3 class ="title">${this.product_name}</h3>
                     <h3 class ="price">Цена ${this.price} руб</h3>
                     <button class="by-btn">Добавить в корзину</button>
               </div>`;
      }


   }

   let newCatalog = new Catalog()





})

