console.log("working");
const url = "https://fakestoreapi.com/products"
let container = document.getElementById('container')

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.map((element) => {
            let div = document.createElement('div')
            
            let title = document.createElement('h3')
            title.innerText = element.title
            div.appendChild(title)
            console.log(title)


            let img = document.createElement('img')
            img.src = element.image
            div.appendChild(img)

            let price = document.createElement('h4')
            price.innerText = element.price+'$'
            div.appendChild(price)

            div.classList.add('col');

            container.appendChild(div);
        })
    })

