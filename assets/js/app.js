import { getHomeContent } from "./service/getHomeContent.js" 
import Home from "./pages/home.js"

getHomeContent()
    .then((data) => {
        Home(data)
    })
    .catch((error) => {
        console.log(error)
    })




 









