import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters"
import {readFile} from 'node:fs/promises'

async function fetchDocuments() {
    try{
        const data = await readFile('scrimba_info.txt', 'utf-8')
        return data
    } catch(err){
        console.log(`Something went wrong: ${err}`)
    }
}

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
})

const text = await fetchDocuments()

console.log('adad')
console.log(text, 'asd')
console.log('adad')