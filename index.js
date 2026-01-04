import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: ENV.OPENAI_API_KEY
})
console.log(OpenAI)