import path from 'node:path'
import fs from 'fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(res, req, dirname) {
    const publicPath = path.join(dirname, 'public')
    const filePath = path.join(publicPath, req.url === '/' ? 'index.html' : req.url)
    const extName = path.extname(filePath)
    const contentType = getContentType(extName)
    try{
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
    } catch(err) {
        sendResponse(res, 500, 'application/json', JSON.stringify(err))
    }
}