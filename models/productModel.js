class Product{
    constructor(id,producer,name,price,count,description,country){
        this.id  = id;
        this.name = name;
        this.country = country;
        this.price = price;
        this.count = count;
        this.description = description;
        this.producer = producer;
    }
}

export default Product;