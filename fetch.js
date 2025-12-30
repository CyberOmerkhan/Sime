async function getData() {
    try{
        const url = 'https://dog.ceo/api/breeds/image/random'
        const response = await fetch(url)
        if(!response){
            throw new Error(`Response Status: ${response.status}`)
        }
        console.log(response)
    } catch(err) {
        console.error(`Error: ${err.message}`)
    }

    console.log("asdadsadasdsa")
}