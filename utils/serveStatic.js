import path from 'node:path'

export function serveStatic(dirname) {
    const filePath = path.join(dirname, 'public', 'index.html')
    console.log(filePath)
}