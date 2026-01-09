export function handleResponse(res, statusCode, body) {
    res.statusCode = statusCode
    res.end(JSON.stringify(body))
}