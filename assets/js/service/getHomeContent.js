export const getHomeContent = () =>{
 
return new Promise((resolve, reject) => {
        fetch('/content/data.js')
        .then((response) => {
            return  response.json()
        })
        .then((result) => {
           resolve(result.data)
        })
        .catch((error) => {
            reject(error.message)
        })
    })
}