export function getContentType(ext){
    const types = {
        ".js": "application/javascript",
        ".html": "text/html",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
    }
    return types[ext]
}