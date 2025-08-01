// definindo um indice para o slide atual

let indexAtual = 0
let slides = document.querySelectorAll('.slide')
let descriptions = document.querySelectorAll('.description-heroines')
let slogans = document.querySelectorAll('.area-slogan')

// modificando a classe das imgs, deixando o display BLOCK ou NONE no css

function mostrarSlide(index) {

    slides.forEach(slide => slide.classList.remove('ativo'))
    slides[index].classList.add('ativo')

    descriptions.forEach(description => description.classList.remove('ativo'))
    descriptions[index].classList.add('ativo')
    
    slogans.forEach(slogan => slogan.classList.remove('ativo'))
    slogans[index].classList.add('ativo')
}

// buttons

let prev = document.querySelector('.left')
let next = document.querySelector('.right')

// next -> indice atual + 1 dividido pelo tamanho da lista de imgs (indice passa a ser o resto da divisão para evitar nulos)

next.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % (slides.length)
    mostrarSlide(indexAtual)
})

// prev -> indice atual - 1 + o comprimento dos slides para evitar nulo

prev.addEventListener('click', () => {
    indexAtual = (indexAtual - 1 + slides.length) % (slides.length)
    mostrarSlide(indexAtual)
})