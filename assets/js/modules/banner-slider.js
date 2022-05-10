const sliderItems = document.querySelectorAll('[data-banner="item"]')
const slider = document.querySelector('[data-banner="slider"]')
const state = {
    mouseDownPosition: 0
}

function preventDefault(event){
    event.preventDefault()
}


function onMouseDown(event){
    const slide = event.currentTarget
    state.mouseDownPosition = event.clientX
    console.log('mousedown -', event.clientX)
    slide.addEventListener('mousemove', onMouseMove)  
}

function onMouseMove(event){
    slider.style.transform = `translatex(${event.clientX - state.mouseDownPosition}px)`
    console.log('mousemove -', event.clientX)
}

function onMouseUp(event){
    const slide = event.currentTarget
    slide.removeEventListener('mousemove', onMouseMove)
}

function onMouseLeave(event){
    const slide = event.currentTarget
    slide.removeEventListener('mousemove', onMouseMove)
}


function setListeners(){
        sliderItems.forEach(function(slide, index){
            const link = slide.querySelector('.banner-slider__link')
            link.addEventListener('click', preventDefault)
            slide.addEventListener('dragstart', preventDefault)
            slide.addEventListener('mousedown', onMouseDown)
            slide.addEventListener('mouseup', onMouseUp)
            slide.addEventListener('mouseleave', onMouseLeave)
           
    })
}


function init() {
    setListeners()
}

export default{
    init
}