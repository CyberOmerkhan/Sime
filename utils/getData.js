import fs from 'node:fs/promises'
import path from 'node:path'

export async function getData(dirname){
    const dataDir = path.join(dirname, 'data')
    const fileDir = path.join(dataDir, 'ghostlyData.json')
    try {
        const content = await fs.readFile(fileDir, 'utf-8')
        return content 
    } catch(err){
        console.log(`Error occured: ${err}`)
        return ''
    }
}