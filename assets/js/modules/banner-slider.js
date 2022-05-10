const sliderItems = document.querySelectorAll('[data-banner="item"]')

function preventDefault(event){
    event.preventDefault()
}


function onMouseDown(event){
    console.log('testes')    
}
function onMouseMove(event){
    console.log('testes')
}
function onMouseUp(event){
    console.log('testes')
}


function setListeners(){
        sliderItems.forEach(function(slide, index){
            const link = slide.querySelector('.banner-slider__link')
            link.addEventListener('click', preventDefault)
            slide.addEventListener('dragstart', preventDefault)
            slide.addEventListener('mousedown', onMouseDown)
            slide.addEventListener('mouseup', onMouseMove)
            slide.addEventListener('mousemove', onMouseUp)
    })
}

function init() {
    setListeners()
}

export default{
    init
}