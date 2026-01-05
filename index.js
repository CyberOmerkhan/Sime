import OpenAI from 'openai'
import dotenv from 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const embeddingsArray = []

const inputs = [
    "The country of Kazakhstan",
    "The World's largest landlocked country",
    "Cristiano Ronaldo",
    'Desk Board',
]

for(let input of inputs) {
    const embedding = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: input,
        encoding_format: 'float',
    })
    embeddingsArray.push(embedding.data[0].embedding)
}

export default embeddingsArray