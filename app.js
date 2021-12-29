const express = require ('express');
const app = express();
const logger = require ('morgan');
const router = require ('./app/routes');
const path = require ('path');


app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, './uploads')));
app.use(router);
app.use((req,res,next) =>{
    res.status(404);
    res.send({
        status: 'Failed',
        message: 'resource' + req.originalUrl + ' Not Found'
    })
})

app.listen(3003, () => console.log('Server: http://localhost:3003'));