function showModal(title, imgUrl, content) {
    // Store the current scroll position
    scrollPosition = window.scrollY
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalContent").innerHTML = content;
    document.getElementById("modalImg").src = imgUrl;
    document.getElementById("myModal").style.display = "flex";
    
}

function closeModal() {
    // Set the scroll position back when closing the modal
    window.scrollTo(0, scrollPosition);
    document.getElementById("myModal").style.display = "none";
}

// Fetch data from the JSON file and create cards
fetch('projects.json')
.then(response => response.json())
.then(data => {
    const projectContainer = document.getElementById('projectcontainer');

    data.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <img src="${card.image}" alt="Card Image">
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <div class="read-more" >
                    <a href="#" onclick="showModal('${card.title}', '${card.image}', '${card.long_description}')">Read More..</a>
                </div>
            </div>
        `;

        projectContainer.appendChild(cardElement);
    });
})
.catch(error => console.error('Error fetching data:', error));