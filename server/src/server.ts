import Express from "express";
import { PrismaClient } from '@prisma/client';

const app = Express();
const prisma = new PrismaClient({log:['query']})

app.get('/games', async (req, res) => {

    const games = await prisma.game.findMany()

    return res.json(games)
});

app.post('/ads', (req, res) => {
    return res.status(201).json({
        message: [],
        success: true
    })
});



app.get('/games/:id/ads', (req: any, res: any) => {
    const gameId = req.params.id;
    return res.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' },
    ])
});
app.get('/ads/:id/discord', (req: any, res: any) => {
    // const adId = req.params.id;
    return res.json([])
});

app.listen(4900, () => {
    console.log("ta rodando")
})