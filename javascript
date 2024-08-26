function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}


