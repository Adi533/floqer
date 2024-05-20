import {OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey:"Your Api Key goes here",
    dangerouslyAllowBrowser: true
});

export default openai;