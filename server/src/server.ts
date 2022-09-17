import Express from "express";
import { PrismaClient } from '@prisma/client';
import { convertHourtoMinutes } from "./utils/convert-hour-to-minute";
import { convertMinutestoHours } from "./utils/convert-minute-to-hour";
import cors from 'cors';

const app = Express();
const prisma = new PrismaClient({ log: ['query'] });


app.use(Express.json())
app.use(cors());

app.get('/games', async (req, res) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.json(games)
});

app.post('/games/:id/ads', async (req, res) => {

    const gameId:any = req.params.id;
    const body = req.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            YearsPlaying: body.YearsPlaying,
            discord: body.discord,
            weeksDays: body.weeksDays.join(','),
            hourStart: convertHourtoMinutes(body.hourStart),
            hourEnd: convertHourtoMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })
    return res.status(201).json(ad)
});



app.get('/games/:id/ads', async (req: any, res: any) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weeksDays: ad.weeksDays.split(","),
            hourStart: convertMinutestoHours(ad.hourStart),
            hourEnd: convertMinutestoHours(ad.hourEnd)
        }
    }))
});
app.get('/ads/:id/discord', async (req: any, res: any) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findUnique({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })
    return res.json({
        discord: ad?.discord
    })
});

app.listen(4900, () => {
    console.log("ta rodando")
})