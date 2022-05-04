const header = document.querySelector('[data-header]')



function setListeners(){
    window.addEventListener('scroll', function(){
            if(window.scrollY > 20){
                header.style.backgroundColor  = 'red'   /*  #0C0D14 */
        }
    })
}


function init(){
    setListeners()
} 

export default{
    init
}