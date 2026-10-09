import { Elysia } from 'elysia'
import { cors } from '@elysia/cors'
import { generateMessage } from './chatCompletions'

const app = new Elysia()

app.use(cors({
    origin: [
        "https://janitorai.com",
        "https://www.janitorai.com"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"]
}))

app.get('/', 'Hello Elysia')

app.post('/v1/chat/completions', async ({ body }) => {
    const response = await generateMessage(body)

    return response
})

app.listen(3000)