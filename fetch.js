async function getData() {
    const url = `https://dog.ceo/api/breeds/image/random`
    try{
        fetch(url).then((response) => {
            if(!response.ok)
                throw new Error(`Error code: ${response.code}`)
            return response.json()
        }).then((data) => { 
            console.log(data)
        })
    } catch(err) {
        console.error(`Error: ${err.message}`)
    }

    console.log("asdadsadasdsa")
}

getData()