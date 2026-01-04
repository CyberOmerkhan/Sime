import OpenAI from 'openai'
import dotenv from 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: [
        {
            role: "user",
            content: [
                {
                    type: "input_text",
                    text: "What do you see in that image? Use web search and find me about this competition. Seemingly, this hackathon was in 2023. Find me who won in 2025.",
                },
                {
                    type: "input_image",
                    image_url: "https://nis.edu.kz/storage/news/321.jpg"
                }
            ]
        }
    ],
    tools: [
        {type: "web_search"}
    ]
})

console.log(response.output_text)
console.log(response.metadata)

// console.log(process.env.OPENAI_API_KEY)