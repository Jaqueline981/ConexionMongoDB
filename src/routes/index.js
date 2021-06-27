const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

//formato para fisualizar el formulario
router.get('/', async (req, res) =>{
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });
});
router.post('/add', async (req, res) =>{
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');  
});

//formato con metod get y post pero con json
router.get('/', async (req, res) =>{
    const valores = await Valor.find();
    console.log(valores);
    res.json(valores);
    /* res.render('index.ejs',{
        valores
    });*/  
});
router.post('/add', async (req, res) =>{
    const valor = new Valor(req.body);
    await valor.save();
    //res.redirect('/');  
    res.json(req.body);
});

module.exports = router;