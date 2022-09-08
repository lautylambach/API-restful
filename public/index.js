let addProduct = document.getElementById('addProduct')
let getProduct = document.getElementById('getProduct')
let updateProduct = document.getElementById('updateProduct')
let deleteProduct = document.getElementById('deleteProduct')
let idProduct = 0
const handleSubmit = (evt, form, route) => {
    evt.preventDefault()
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
        .then(response => console.log(response))
}
 const handleGet =(evt,form,route) =>{
    evt.preventDefault()
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    idProduct= obj.idProduct.replace(/ /g, "")
    fetch(route, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
       .then(response => console.log(response))
 }
 const handlePut = (evt, form, route) => {
     evt.preventDefault()
     let formData = new FormData(form)
     let obj = {}
     formData.forEach((value, key) => obj[key]=value)
     idProduct= obj.idProduct.replace(/ /g, "")
     fetch(route, {
         method: "PUT",
         body: JSON.stringify(obj),
         headers: {
             "Content-type": "application/json"
         }
     }).then(response => response.json())
        .then(response => console.log(response))
 }

 const handleDelete = (evt, form, route) => {
    evt.preventDefault()
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    idProduct= obj.idProduct.replace(/ /g, "")
    fetch(route, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
       .then(response => console.log(response))
}


addProduct.addEventListener('submit', (e) => handleSubmit(e, e.target, '/api/productos'))
updateProduct.addEventListener('submit', (e) => handlePut(e, e.target,`/api/productos/${idProduct}`))
getProduct.addEventListener('submit', (e) => handleGet(e, e.target,`/api/productos/${idProduct}`))
deleteProduct.addEventListener('submit', (e) => handleDelete(e, e.target,`/api/productos/${idProduct}`))
