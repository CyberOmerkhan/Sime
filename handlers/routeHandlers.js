import fs from 'fs/promises'
import path from 'node:path'
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js"


export async function handlePost(dirname, newData) {
    const dataDir = path.join(dirname, 'data')
    const dataFile = path.join(dataDir, 'ghostlyData.json')
    let response = {
        data: '',
        ok: false,
    }

    try{
        let data = await getData(dirname)
        response.data = JSON.parse(data)
        response.data = [...response.data, newData]
        response.ok = true
        await fs.writeFile(dataFile, JSON.stringify(response.data))
        return response
    } catch(err){
        response.data = err.message
        response.ok = false
        return response
    }

}

export async function handleGet(res, dirname) {
    try{
        const data = await getData(dirname)
        sendResponse(res, 200, 'application/json', data)
    }
    catch(err) {
        sendResponse(res, 400, 'application/json', err)
    }
}