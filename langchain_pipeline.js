import {ChatOpenAI} from '@langchain/openai'
import {PromptTemplate} from 'langchain/prompts/new'
import 'dotenv/config'

const promptTemplate = `Generate a promotional tweet for a product using the product description: 
    {productDesc}`

const textPrompt = PromptTemplate.fromTemplate(promptTemplate)

console.log(textPrompt)

const llm = new ChatOpenAI( {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o',
    temperature: 0,
})

console.log(`API keyy: ${process.env.OPENAI_API_KEY}`)

const chatMessages = [
    {
        role: "system",
        content: "You are a helpful assistant in a large pipeline system. You are fed the user's data regarding the company or system. Your main task is to summarize the user's request in a minimal-length question."
    },
    {
        role: "human",
        content: "There are a few T shirt that I am interested in. I do not know yet what to buy, but I am considering this blue Louis Vuitton sleeve-shirt as well as a Gucci brown one. However, in the past few years and a couple of months, I had a problem with ordering online. Most of the times I order something, the thing does not suit me. That is the reason why I always try to return the item. In the previous cases, there were companies I had unpleasant interactions with for they didn't let me return the object. I wonder if it is the same for you. Anyways have a good day and be well. ",
    },
    {
        role: "ai",
        content: "Minimal-length summary of a question: What is your return policy?"
    },
    {
        role: 'human',
        content: 'id like to go for a walk but i dont really know whether or not your shop is worth walking towards. i have had experiences when i was walking way too much. how far away are you guys from my home? i live in Bulvar district, in Chicago City. Thanks and have a good day'
    }
]
const aiMsg = await llm.invoke(
  chatMessages
)

console.log(aiMsg.content)
