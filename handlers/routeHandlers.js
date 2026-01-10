import { get } from "node:http";
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res, dirname) {
    try{
        const data = await getData(dirname)
        console.log(typeof data)
        sendResponse(res, 200, 'application/json', data)
    }
    catch(err) {
        sendResponse(res, 400, 'application/json', err)
    }
}