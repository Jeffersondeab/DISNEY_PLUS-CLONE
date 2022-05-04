const header = document.querySelector('[data-header]')



let teste = window.document.getElementById('teste')

 
    if (window.scrollY > 20){
        teste.style.background = 'red'
}   else{
        teste.style.background = 'transparent'
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
