import { messageToOpenAIRole } from '@langchain/openai';
import validator from 'validator'

export async function registerUser(req, res) {
    let { name, email, username, password } = req.body
    const validationRegex = /^[a-zA-Z0-9_-]{1,20}$/;

    email = email.replace(/\s/g, '')
    username = username.replace(/\s/g, '')
    password = password.replace(/\s/g, '')


    const errorAuth = !name || !email || !username || !password || !validationRegex.test(username) || !validator.isEmail(email)

    if(errorAuth){
        res.json({
            error: "Invalid authorization form input",
        })
    }
    else{
        res.json({
            message: "ALL GOOD",
        })
    }
}