class product{
    constructor(id,name,price,description){
        this.id=id;
        this.name=name;
        this.price=price;
        this.description=description;
    }
    toString(){
        return this.name + "\n" + this.id + this.price + "\n" + this.description;
    }
}

module.exports=product;