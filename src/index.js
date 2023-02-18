// write your code here
const ramen_menu = document.getElementById("ramen-menu")
const ramen_detail = document.getElementById("ramen-detail")
const form = document.getElementById("new-ramen")
const update = document.getElementById("edit-ramen")


function fetching() {
    fetch("http://localhost:3000/ramens")
        .then(res => res.json())
        .then(data => {
            data.forEach(ramen => { displayMenuBar(ramen) })
            ramen_detail.innerHTML = ""
            information(data[0])
        })

}

function displayMenuBar(data) {

    const img = document.createElement("img")
    img.setAttribute("src", data.image)
    ramen_menu.appendChild(img)

    img.addEventListener("click", () => {
        ramen_detail.innerHTML = ""
        information(data)

    });
}


function information(data) {
    const rating_display = document.getElementById("rating-display")
    const comment_display = document.getElementById("comment-display")
    const div = document.createElement("div")
    div.innerHTML = `

    <img class="detail-image" src=${data.image} alt="Insert Name Here" />
    <h2 class="name">${data.name}</h2>
    <h3 class="restaurant">${data.restaurant}</h3>
    `
    rating_display.innerText = data.rating
    comment_display.innerHTML = data.comment
    ramen_detail.appendChild(div)
    update.addEventListener("submit", (e) => {
        e.preventDefault()
        rating_display.innerText = e.target.querySelector("#new-rating").value
        comment_display.innerHTML = e.target.querySelector("#new-comment").value
        setTimeout(() => {
            update.reset()
        }, 100)
    })

}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = {
        name: e.target.querySelector("#new-name").value,
        restaurant: e.target.querySelector("#new-restaurant").value,
        image: e.target.querySelector("#new-image").value,
        rating: e.target.querySelector("#new-rating").value,
        comment: e.target.querySelector("#new-comment").value,
    }
    displayMenuBar(obj)

    form.reset()



})



fetching()
