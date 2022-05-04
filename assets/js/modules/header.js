const header = document.querySelector('[data-header]')



function ver(){
    let oi = window.document.getElementById('oi')
    
    oi.style.background = 'red'
}

function init(){
    ver()
}



function setListeners(){
    window.addEventListener('scroll', function(){
            if(window.scrollY > 20){
                header.style.backgroundColor  = 'red'   /*  #0C0D14 */
            }else{
                header.style.backgroundColor = 'transparent'
        }
    })
}


function init(){
    setListeners()
} 

export default{
    init
}