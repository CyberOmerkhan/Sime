import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters'
import {createClient} from '@supabase/supabase-js'
import {readFile} from 'fs/promises'
import 'dotenv/config'

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
})

const sbApiKey = process.env.SUPABASE_API_KEY
const sbUrl = process.env.SUPABASE_URL_KEY
const openaiApiKey = process.env.OPENAI_API_KEY

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

const documentChunks = await splitDocuments()

// console.log(documentChunks)
const client = createClient(sbUrl, sbApiKey)
// console.log(client)

const error = await client
    .from('scrimba_smartass')
    .insert({
        id: 9,
        content: "Amir sigma",
        metadata: {
            checked: false,
            jacked: true,
        },
        embedding: Array.from({length: 1536}, () => 0.05)
    })

console.log(error)