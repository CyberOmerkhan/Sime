import {ChatOpenAI} from '@langchain/openai'

const llm = new ChatOpenAI( {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o',
    temperature: 0,
})

const response = await llm.invoke([
    {
        role: 'system',
        content: 'You are a very helpful AI assistant',
    },
    {
        role: 'user',
        content: "What is the world's biggest landlocked country in the world?"
    }
])

console.log(response.content)