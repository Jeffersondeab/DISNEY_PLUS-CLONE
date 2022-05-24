const carouselList = document.querySelector('[data-carousel="list"]')
const carouselItem = document.querySelectorAll('[data-carousel="item"]')
const btnPrevious = document.querySelectorAll('[data-carousel="btn-previous"]')
const btnNext = document.querySelectorAll('[data-carousel="btn-next"]')


const state = {
    mouseDownPosition: 0,
    movement: 0,
    lastTranslatePosition:0,
    currentSlidePosition:0
}

const preventDefault = (event) =>{
    event.preventDefault()
}

const translateSlide = (position) => {
    state.lastTranslatePosition = position
    carouselList.style.transform = `translateX(${position}px)`
}

const onMouseDown = (event) =>{
    const item = event.currentTarget
    state.mouseDownPosition = event.clientX
    state.currentSlidePosition = event.clientX - state.lastTranslatePosition
    item.addEventListener('mousemove',onMouseMove)
    console.log('mouse down')
}

const onMouseMove = (event) =>{
    state.movement = event.clientX - state.mouseDownPosition
    const position = event.clientX - state.currentSlidePosition
    translateSlide(position)
    console.log('mouse move')
}

const onMouseUp = (event) =>{
    const item = event.currentTarget
    item.removeEventListener('mousemove',onMouseMove)
    console.log('mouse up')
}
 
const onMouseLeave = (event) =>{
    const item = event.currentTarget
    item.removeEventListener('mousemove',onMouseMove)
    console.log('mouse leave')
}

const setListeners = () => {
    carouselItem.forEach((item, index) => {
        const link = item.querySelector('.movie-carousel__link')
        link.addEventListener('click', preventDefault)
        item.addEventListener('dragstart', preventDefault)
        item.addEventListener('mousedown', onMouseDown)
        item.addEventListener('mouseup', onMouseUp)
        item.addEventListener('mouseleave', onMouseLeave)
        item.addEventListener('mousemove', onMouseMove)
    })
}

const init = () => {
    setListeners()
}

//arrow function

export default{
    init
}