import express from 'express'

const app = express();

app.listen(8080, () => console.log('Test ', process.env.VERSION))

app.get('/health', (_,res) => {
    res.sendStatus(200)
})

app.get('/readiness', (_, res) => {
    res.sendStatus(200)
})

app.get('/env', (_, res) => {
    res.send(process.env)
})