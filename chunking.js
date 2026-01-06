import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters"

async function fetchDocuments() {
    const response = await fetch('./scrimba_info.txt')
    const data = await response.text()
    return data
}

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
})

const text = fetchDocuments()

console.log(text)