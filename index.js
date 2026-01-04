import OpenAI from 'openai'
import dotenv from 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    })

console.log(process.env.OPENAI_API_KEY)