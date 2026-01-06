import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters'
import {readFile} from 'fs/promises'

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
})

async function fetchDocuments() {
    try{
        const data = await readFile('scrimba_info.txt', 'utf-8')
        return data
    } catch(err){
        throw new Error(`Something went wrong: ${err}`)
    }
}

async function splitDocuments() {
    try {
        const data = await fetchDocuments()
        const chunks = await splitter.createDocuments([data])
        return chunks
    } catch(err){
        throw new Error(`Something went wrong: ${err}`)
    }
}

const documentChunks = await splitDocuments()

console.log(documentChunks)