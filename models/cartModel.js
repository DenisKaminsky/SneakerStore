/*
    Items: [{
        product: Product,
        count : int
    }]
*/
import Product from './productModel.js';

class Cart{
    constructor(){
        this.items = [{product: new Product(20,'Burberry','Vintage',419,29,'Desc...','United Kingdom'),count:2}];
    }

    getItems(){
        return this.items;
    }

    addItem(newItem){
        var searchResult = this.items.filter(item => (item.product.id === newItem.id));
        if (searchResult.length == 0 ){
            this.items.push({ product: newItem, count : 1});
        }else{
            if (searchResult[0].count < searchResult[0].product.count)
                searchResult[0].count++;
        }
    }

    clear(){
        this.items = [];
    }

    getTotalPrice(){
        var sum = 0;
        for (var i=0; i< this.items.length;i++){
            sum+=(this.items[i].product.price*this.items[i].count)
        }
        return sum;
    }

    getTotalCount(){
        var count = 0;
        for (var i=0; i< this.items.length;i++){
            count+=this.items[i].count;
        }
        return count;
    }

    deleteItem(index){
        this.items.splice(index, 1);
    }

    getItemCountById(id){
        var searchResult = this.items.filter(item => (item.product.id === id));
        return searchResult[0].count;
    }

    incItemCountByIndex(index){
        if (this.items[index].count < this.items[index].product.count)
            this.items[index].count++;
    }

    decItemCountByIndex(index){
        if (this.items[index].count > 1)
            this.items[index].count--;
    }
}

export default Cart;