// write your code here
const menu = document.getElementById('ramen-menu');

fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
        data.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            menu.appendChild(img);
        });
    });

menu.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {

        const detail = document.getElementById('ramen-detail');

        const ramenId = event.target.getAttribute('data-id');

        fetch(`http://localhost:3000/ramens/${ramenId}`)
            .then(response => response.json())
            .then(data => {
                detail.querySelector('.detail-image').src = data.image;
                detail.querySelector('.name').innerHTML = data.name;
                detail.querySelector('.restaurant').innerHTML = data.restaurant;
                document.getElementById('rating-display').innerHTML = data.rating;
                document.getElementById('comment-display').innerHTML = data.comment;
            });
    }
});

