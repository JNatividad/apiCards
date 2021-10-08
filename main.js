fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
.then(response => {
    return response.json()
})
.then(res => {
    /* console.log(res.data); */

    const containerGrid = document.querySelector('.container-grid');

    for (let index = 0; index < res.data.length; index++) {
        // const element = array[index];
        const divCard = document.createElement('div')
        const { id, name, type, desc, race } = res.data[index];

        const imageURL = res.data[index]['card_images'][0]['image_url'];

        /* console.log(imageURL); */


        const imageCard = document.createElement('img');
        imageCard.setAttribute('src', imageURL)
        const idCard = document.createElement('p');
        idCard.textContent = id;

        idCard.classList.add('text-ID')

        const nameCard = document.createElement('p');
        nameCard.textContent = name;

        const typeCard = document.createElement('p');
        typeCard.textContent = type;

        const descCard = document.createElement('p');
        descCard.textContent = desc;

        descCard.classList.add('text-desc')


        const raceCard = document.createElement('p');
        raceCard.classList.add('race-title')
        raceCard.textContent = `race ${race}`;


        divCard.append(imageCard, nameCard, typeCard, descCard, raceCard);

        containerGrid.append(divCard)


    }
})