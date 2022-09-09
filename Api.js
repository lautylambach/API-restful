

class Api{
    constructor(route){
        this.route= route
    }

    create = (product,productos) =>{
        let id= productos[productos.length-1].id+1
        product = {
            id,
            ...product
        }
        productos.push(product)
    }

    findById =(id,productos)=>{
        id=parseInt(id)
        const result = productos[id]
        console.log(result)
        return result;
    }
    update= (id,product,productos)=>{
        id = parseInt(id)
        let newProductos = productos.map(item=>{
            if (item.id===id){
                
                return{
                    id,
                    ...product
                }
                
            } else {
                return item}
        })
        
        productos = newProductos
        return productos
    }
    
    delete = (id, productos)=>{
        productos.splice(id,1)
        return productos
    }
}
module.exports = Api;