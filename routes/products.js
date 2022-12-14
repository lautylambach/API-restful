const express = require('express')
const router = express.Router()
const Api = require('../Api.js')
const api = new Api()
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
  if(param>productos.length+1) return res.status(400).send({err: 'producto no encontrado1'})
  if(param<0) return res.status(400).send({err: 'producto no encontrado2'})
  if(isNaN(param)) return res.status(400).send({err:'producto no encontrado3'})
}

router.get('/',(req,res)=>{
    res.send({productos})
})
router.get('/:id', (req,res) =>{
    const index = parseInt(req.params.id)-1
    validation(index,req,res)
    const result = api.findById(index,productos)
    console.log(result)
    if(!result) return res.status(400).send({err:'producto no encontrado4'})
    res.send({status: 'succes',item: result})
} )
router.post('/', (req,res)=>{
    let productSent = req.body
    if(!req.body.title || !req.body.price || !req.body.thumbnail) return res.status(400).send({err:'data es requerida'})
    let result = api.create(productSent,productos)
    res.send({status:'succes', message: 'producto agregado',result: result})
})
router.put('/:id', (req,res)=>{
    const index= req.params.id
    validation(index,req,res)
    let productToUpdate = req.body
    if(!req.body.title || !req.body.price || !req.body.thumbnail) return res.status(400).send({err:'data es requerida'})
    let result = api.update(index,productToUpdate,productos)
    if(!result) return res.status(400).send({err:'producto no encontrado'})
    productos = result
    res.send({status: 'succes',message: 'producto actualizado', result: result})
})

router.delete('/:id', (req,res)=>{
    const index= req.params.id-1
    validation(index,req,res)
    let result = api.delete(index, productos)
    if(!result) return res.status(400).send({err:'producto no encontrado'})
    res.send({status:'succes',message:'producto eliminado', result: result})
})

module.exports = router


