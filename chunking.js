import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters'
import {readFile} from 'fs/promises'
import 'dotenv/config'

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
})

const sbApiKey = process.env.SUPABASE_API_KEY
const sbUrl = process.env.SUPABASE_URL_KEY

console.log(`API key: ${sbApiKey}`)
console.log(`API url: ${sbUrl}`)



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

// const documentChunks = await splitDocuments()

// console.log(documentChunks)