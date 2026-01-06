import {ChatOpenAI} from '@langchain/openai'
import 'dotenv/config'

const llm = new ChatOpenAI( {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o',
    temperature: 0,
})

console.log(`API keyy: ${process.env.OPENAI_API_KEY}`)

const aiMsg = await llm.invoke([
  {
    role: "system",
    content: "You are a helpful assistant that translates English to French. Translate the user sentence.",
  },
  {
    role: "user",
    content: "I love programming."
  },
])

