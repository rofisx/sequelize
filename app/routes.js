const router = require('express').Router();
const Product = require('./model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const upload = multer({dest: './uploads'});
const productController = require('../app/controller');

router.get('/', (req,res) =>{
    res.send('Welcome Sequelize');
});

router.post('/api/product',upload.single(), productController.store);
router.get('/api/product',productController.index);
router.get('/api/product/:id',productController.view);
router.put('/api/product/:id',upload.single(),productController.update);
router.delete('/api/product/:id',productController.destroy);

// router.post('/api/product',upload.single('image'), async(req,res) =>{
//     const {users_id, name, price, stock, status} = req.body;
//     const image = req.file;
//     if(image){
//         const target = path.join(__dirname, '../../uploads', image.originalname);
//         fs.renameSync(image.path, target);
//         try{
//             await Product.sync();
//             const result = await Product.create({users_id, name, price, stock, status, image_url:`http://localhost:3000/public/${image.originalname}`});
//             res.send(result);
//         }catch(e){
//             res.send(e);
//         }
//     }

//     // try{
//     //     await Product.sync();
//     //     const result = await Product.create({users_id, name, price, stock, status});
//     //     res.send(result);
//     // }catch(e){
//     //     res.send(e);
//     // }
// });


module.exports = router;