let addProduct = document.getElementById('addProduct')
let updateProduct = document.getElementById('updateProduct')

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

// const handlePut = (evt, form, route) => {
//     evt.preventDefault()
//     let formData = new FormData(form)
//     let obj = {}
//     formData.forEach((value, key) => obj[key]=value)
//     fetch(route, {
//         method: "PUT",
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-type": "application/json"
//         }
//     }).then(response => response.json())
//         .then(response => console.log(response))
// }



addProduct.addEventListener('submit', (e) => handleSubmit(e, e.target, '/api/productos'))
// updateProduct.addEventListener('submit', (e) => handlePut(e, e.target, '/api/productos'))
