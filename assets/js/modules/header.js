const header = document.querySelector('[data-header]')

 
function setListeners(){
    window.addEventListener('scroll', function(){
            if(window.scrollY > 20){
                header.style.backgroundColor  = '#0C0D14'   /*  #0C0D14 */
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
