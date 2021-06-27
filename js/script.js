window.addEventListener("DOMContentLoaded", () => {

   const goods = [
      { img : "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
      { img : "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg" ,title: 'Socks', price: 50 },
      { img : "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg" ,title: 'Jacket', price: 350 },
      { img : "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg" ,title: 'Shoes', price: 250 },
      { img : "https://cdn1.ozone.ru/multimedia/1026746162.jpg", title: 'Shirt', price: 150 },
      { img : "http://g02.a.alicdn.com/kf/Hed0566defb014c59b8a73f7ab7d8029aN.jpg" ,title: 'Socks', price: 50 },
      { img : "http://nets.shoppinggadget.ru/12525-1-home_default/Джемпер.jpg" ,title: 'Jacket', price: 350 },
      { img : "https://i.pinimg.com/736x/61/ec/ec/61ececea0b55767fbeebd64c286d0f56--satin-shoes-silver-heels.jpg" ,title: 'Shoes', price: 250 },
      
   ];

   const renderItem = (img, title, price) => {
      return `<div class="goods-item">
                     <img src =${img} alt="Картинка">
                     <h3 class ="title">${title}</h3>
                     <h3 class ="price">Цена ${price}$</h3>
                     <button class="by-btn">Добавить в корзину</button>
              </div>`
   }

   const renderList = (products) => {
      let goodsList = products.map(item => renderItem(item.img, item.title, item.price)).join(" ")
      console.log(typeof(goodsList));
      document.querySelector('.goods-list').innerHTML = goodsList
   }

   renderList(goods)

   
})

