import path from 'node:path'
import fs from 'fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(res, dirname) {
    const filePath = path.join(dirname, 'public', 'index.html')
    let content = ""
    try{
        content = await fs.readFile(filePath)
    } catch(err) {
        sendResponse(res, 500, 'application/json', JSON.stringify(err))
        return
    }
    sendResponse(res, 200, 'text/html', content)
}