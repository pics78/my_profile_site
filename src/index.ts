import express from 'express'
const app: express.Express = express()

app.listen(3000, () => {
    console.log('Start on port 3000.')
})

app.get('/test', (req: express.Request, res: express.Response) => {
    let word:any = req.query.word
    if (word == null) {
        word = 'world'
    }
    res.send(test(word))
})

function test(word: any): string {
    return `hello, ${word}!!\n`;
}