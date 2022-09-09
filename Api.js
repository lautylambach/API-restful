let productos = require('./routes/products.js')



class Api{


    create = (product) =>{
        let id= productos[productos.length-1].id+1
        product = {
            id,
            ...product
        }
        productos.push(product)
    }

    findById =(id)=>{
        id=parseInt(id)
        const result = productos[id]
        console.log(result)
        return result;
    }
    update= (id,product)=>{
        id = parseInt(id)
        let newProductos = productos.map(item=>{
            if (item.id===id){
                return{
                    id,
                    ...product
                }
            } else return item
        })
        productos = newProductos
        return this.findById(id)
    }
    
    delete = (id)=>{
        productos.splice(id,1)
        return productos
    }
}
module.exports = Api;