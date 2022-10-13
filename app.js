window.addEventListener('DOMContentLoaded',()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>response.json())
    .then(response=>response.results.forEach(element => {
        console.log(element);
        createCard(element)
    }))
})

const main = document.getElementById('main')

function createCard(character) {
    
    const {image,id,name,status,species,type,gender} = character

    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('alt',id)

    const left = document.createElement('div')
    left.classList.add('left')

    const img = document.createElement('img')
    img.setAttribute('src',image)
    img.classList.add('imgLeft')

    const right = document.createElement('div')
    right.classList.add('right')

    const text = document.createElement('div')
    text.classList.add('text')

    const nameCharacter = document.createElement('h2')
    nameCharacter.classList.add('nameText')
    nameCharacter.textContent = "Nombre: "+name

    const statusCharacter = document.createElement('p')
    statusCharacter.classList.add('statusText')
    statusCharacter.textContent = "Estatus: " +status

    const divStatus = document.createElement('div')
    divStatus.classList.add('divStatus')

    const colorStatus = document.createElement('div')
    colorStatus.classList.add('colorStatus')

    const speciesCharacter = document.createElement('p')
    speciesCharacter.classList.add('speciesText')
    speciesCharacter.textContent = "Especie: " +species

    const typeCharacter = document.createElement('p')
    typeCharacter.classList.add('typeText')
    if(type === ""){
        typeCharacter.textContent = "Tipo: ---"
    }else{
        typeCharacter.textContent = "Tipo: " +type
    }
    
    const genderCharacter = document.createElement('p')
    genderCharacter.classList.add('genderText')
    genderCharacter.textContent = "Genero: "+ gender

    if(status === "Alive"){
        colorStatus.style.background = '#1fd80e'
    }

    if(status === "Dead"){
        colorStatus.style.background = '#ff0000'
    }

    if(status === "unknown"){
        colorStatus.style.background = '#575454'
    }

    main.appendChild(card)

    card.appendChild(left)
    left.appendChild(img)
    card.appendChild(right)

    right.appendChild(text)

    text.appendChild(nameCharacter)

    text.appendChild(divStatus)
    divStatus.appendChild(statusCharacter)
    divStatus.appendChild(colorStatus)

    text.appendChild(speciesCharacter)
    text.appendChild(typeCharacter)
    text.appendChild(genderCharacter)
}