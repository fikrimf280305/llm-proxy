import 'dotenv/config'

export const generateMessage = async (messagesBody: any): Promise<any> => {
    const response = await fetch('https://api.neosantara.xyz/v1/chat/completions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEOSANTARA_API_KEY}`
        },
        body: JSON.stringify({
            "model": messagesBody.model,
            "messages": messagesBody.messages,
            "reasoning": { "effort": "none" },
            "stream": messagesBody.stream,
            "temperature": messagesBody.temperature
        })
    })

    const text = await response.json()

    return text
}