import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters"
import fs from 'fs/promises'



async function fetchDocuments() {
    try{
        const data = await fs.readFile('scrimba_info.txt')
        return data
    } catch(err){
        console.log(`Something went wrong: ${err}`)
    }
}

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
})

const text = await fetchDocuments()

console.log(text)