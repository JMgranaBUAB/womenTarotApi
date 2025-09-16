const requestURL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

async function fetchTarotsJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los datos del Tarot:', error);
        return null;
    }
}

function createTarotCard({ arcaneNumber, arcaneName, arcaneDescription, arcaneImage, goddessName, goddessDescription, goddessImage }) {
    return `
        <div class="card" style="width: 18rem;" id="cardHouse">
            <img src="${arcaneImage.imageSrc}" class="card-img-top" alt="Imagen de la casa" style="max-height: 350px; object-fit: contain; width: 100%;"> 
            <div class="card-body">
                <h5 class="card-title">${arcaneName}</h5>
                <p class="cardDescription">${arcaneDescription}</p>
                
            </div>
        </div>
        <div class="card" style="width: 18rem;" id="cardHouse">
            <img src="${goddessImage.imageSrc}" class="card-img-top" alt="Imagen de la casa" style="max-height: 350px; object-fit: contain; width: 100%;"> 
            <div class="card-body">
                <h5 class="card-title">${goddessName}</h5>
                <p class="cardDescription">${goddessDescription}</p>
                
            </div>
        </div>
    `;
}

// Export para testing
if (typeof module !== 'undefined') {
    module.exports = { createTarotCard };
}

async function displayTarots() {
    const tarotSection = document.getElementById('tarotSection');
    const tarotData = await fetchTarotsJson();

    if (tarotData /* && tarotData.items */) {
        const tarotCards = tarotData./* items. */map(createTarotCard).join('');
        tarotSection.innerHTML = tarotCards;
    } else {
        tarotSection.innerHTML = '<p>No se pudieron cargar los datos del Tarot.</p>';
    }
}

displayTarots();