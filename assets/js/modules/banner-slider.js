const sliderItems = document.querySelectorAll('[data-banner="item"]')
const slider = document.querySelector('[data-banner="slider"]')
const state = {
    mouseDownPosition: 0
    lastTranslatePosition:0,
    movementPosition:0,
    currentSliderPosition:0
    currentSlideIndex:0
}

function translateSlide(position){
    state.lastTranslatePosition = position
    slider.style.transform = `translatex(${position}px)`
}

function preventDefault(event){
    event.preventDefault()
}


function onMouseDown(event, index){
    const slide = event.currentTarget
    state.mouseDownPosition = event.clientX
    state.currentSliderPosition = event.clientX - state.lastTranslatePosition
    state.currentSlideIndex = index
    console.log(state.currentSlideIndex)
    console.log('mousedown -', event.clientX)
    slide.addEventListener('mousemove', onMouseMove)  
}

function onMouseMove(event){
    state.movementPosition = event.clientX - state.mouseDownPosition
    console.log(state.movementPosition)
    translateSlide(event.clientX - state.currentSliderPosition)
    //console.log('mousemove -', event.clientX)
}

function onMouseUp(event){
    const slide = event.currentTarget
    if(state.movementPosition > 150){
        const calc = slide.offsetWidth * (state.currentSlideIndex - 1)
        translateSlide(-calc)
    }else if(state.movementPosition < -150){
        const calc = slide.offsetWidth * (state.currentSlideIndex + 1)
        translateSlide(-calc)
    }else{
        const calc = slide.offsetWidth * (state.currentSlideIndex)
        translateSlide(-calc)
    }
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
            slide.addEventListener('mousedown', function(event) {onMouseDown(event, index)
            })
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