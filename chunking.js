import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters'
import {createClient} from '@supabase/supabase-js'
import {readFile} from 'fs/promises'
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import {OpenAIEmbeddings} from '@langchain/openai'
import 'dotenv/config'

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
})

const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'text-embedding-3-small',
})

const supabaseClient = createClient(
    process.env.SUPABASE_URL_KEY,
    process.env.SUPABASE_API_KEY,
)

const vectorStore = new SupabaseVectorSpace(embeddings, {
    client: supabaseClient,
    tableName: 'scrimba_smartass',
    query: 'match_documents',
})


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



console.log(error)