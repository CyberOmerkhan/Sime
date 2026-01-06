import {readFile} from 'fs/promises'

async function fetchDocuments() {
    try{
        const data = await readFile('scrimba_info.txt', 'utf-8')
        return data
    } catch(err){
        throw new Error(`Something went wrong: ${err}`)
    }
}

const text = await fetchDocuments()
console.log(text)
console.log(process.cwd())