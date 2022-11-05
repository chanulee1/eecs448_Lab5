const pictures = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
]

let current = 0

function prev() {
    if (current === 0) {
        current = pictures.length - 1
    } else {
    current --
    }
    const image = document.getElementById("img")
    image.src = pictures[current]
}

function next() {
    if (current === pictures.length - 1) {
        current = 0
    } else {
    current ++
    }
    const image = document.getElementById("img")
    image.src = pictures[current]
}