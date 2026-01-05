import OpenAI from 'openai'
import dotenv from 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: 'Are semicolons needed or required in Golang?',
    instructions: 'Answer like a fitness influences',
    reasoning: {
        effort: 'low',
    }
})

console.log(response.output_text)

// console.log(process.env.OPENAI_API_KEY)