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
                    text: "Say 'I love apples' ten times",
                },
            ]
        }
    ],
    stream: true,
})

for await(let item of response){
    console.log(item)
}

// console.log(process.env.OPENAI_API_KEY)