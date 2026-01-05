import OpenAI from 'openai'
import dotenv from 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const embedding = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: 'My name is Amir',
    encoding_format: 'float',
})

console.log(embedding.data[0].embedding)