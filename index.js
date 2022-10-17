
let prices = {
    coffee: 3,
    tea: 2,
    juice: 1.70,
};

const coffee = document.querySelector('#coffee');
const tea = document.querySelector('#tea');
const juice = document.querySelector('#juice');
const basket = document.querySelector('#basket');

class Order {
    constructor(elem, basket) {
        this._elem = elem;
        this.item = basket.querySelector(`#${this._elem.id}Basket .quantity`);
        this.itemPrice = basket.querySelector(`#${this._elem.id}Basket .price`);
        this.price = prices[this._elem.id];
        this.quantity = 0;
        this.total = basket.querySelector(`.totalPrice`);
        this._elem.onclick = this.onClick.bind(this);
        this.update = this.update.bind(this);
    }

    add(){
        this.quantity++;
        this.update();
    }

    remove(){
        if(this.quantity > 0){
            this.quantity--;
            this.update();
        }
        console.log(this.quantity)
    }

    update(){
        this.item.innerText = this.quantity;
        this.itemPrice.innerText = this.quantity * this.price;
        this.total.innerText = Array.from(basket.querySelectorAll('.price'))
                	                .reduce((prev, next) => prev + +next.innerText, 0);
    }

    onClick(event){
        let action = event.target.dataset.action;
        if(action) {
            this[action](event);
        }
    }
}

new Order(coffee, basket);
new Order(tea, basket);
new Order(juice, basket);