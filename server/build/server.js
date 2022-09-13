import Express from "express";
const app = Express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
    ]);
});
app.listen(3000, () => {
    console.log("ta rodando");
});
