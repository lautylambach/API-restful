let products =require('./routes/products.js')


class Api{
      
    

    create = (product) =>{
        let id= products[products.length-1].id+1
        product = {
            id,
            ...product
        }
        products.push(product)
    }

    findById =(id)=>{
        id=parseInt(id)
        const result = products[id]
        return result;
    }
    update= (id,product)=>{
        id = parseInt(id)
        let newProducts = products.map(item=>{
            if (item.id===id){
                return{
                    id,
                    ...product
                }
            } else return item
        })
        products = newProducts
        return this.findById(id)
    }
    
    delete = (id)=>{
        products.splice(id,1)
        return products
    }
}
module.exports = Api;