const express = require('express')
const router = express.Router()
/*persistencia en memoria*/

let productos = [
    {
      "title": "teclado",
      "price": "2500",
      "thumbnail": "https://es.wikipedia.org/wiki/Teclado_%28inform%C3%A1tica%29#/media/Archivo:Computer_keyboard_ES_layout.svg",
      "id": 1
    },
    {
      "title": "auriculares",
      "price": "1850",
      "thumbnail": "https://es.wikipedia.org/wiki/Auricular#/media/Archivo:S%C5%82uchawki_referencyjne_K-701_firmy_AKG.jpg",
      "id": 2
    },
    {
      "title": "microfono",
      "price": "2500",
      "thumbnail": "https://es.wikipedia.org/wiki/Micr%C3%B3fono#/media/Archivo:AKG_C451B.jpg",
      "id": 3
    },
    {
      "title": "monitor",
      "price": "18000",
      "thumbnail": "https://es.wikipedia.org/wiki/Monitor_de_computadora#/media/Archivo:LG_L194WT-SF_LCD_monitor.jpg",
      "id": 4
    }
  ]

function validation(param,req,res){
  if(param>productos.length+1) return res.status(400).send({err: 'producto no encontrado'})
  if(param<0) return res.status(400).send({err: 'producto no encontrado'})
  if(isNaN(param)) return res.status(400).send({err:'producto no encontrado'})
}

router.get('/',(req,res)=>{
    res.send({productos})
})
router.get('/:id', (req,res) =>{
    const index = req.params.id-1
    validation(index,req,res)
    const result = productos[index]
    res.send({status: 'succes',resultado: result})
} )
router.post('/', (req,res)=>{
    let productSent = req.body
    const newId = productos[productos.length-1].id+1
    productSent.id=newId;
    productos.push(productSent)
    res.send({status:'succes', message: 'producto agregado', productSent})
})
router.put('/:id', (req,res)=>{
    const index= req.params.id-1
    validation(index,req,res)
    let productToUpdate = req.body
    productos[index] = productToUpdate
    res.send({status: 'succes',message: 'producto actualizado'})
})

router.delete('/:id', (req,res)=>{
    const index= req.params.id-1
    validation(index,req,res)
    productos.splice(index,1)
    res.send({status:'succes',message:'producto eliminado'})
})

module.exports = router

