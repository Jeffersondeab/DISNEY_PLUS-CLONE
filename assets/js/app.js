import { getHomeContent } from "./service/getHomeContent.js" 
import Home "./pages/home.js"

getHomeContent()
.then((data) => {
    Home(data)
})
.catch((error){
    console.log(error)
})


/* import header from './modules/header.js'
import bannerSlider from './modules/banner-slider.js' 
import collection from './modules/collection.js'

header.init()
bannerSlider.init()
collection.init() */

 









