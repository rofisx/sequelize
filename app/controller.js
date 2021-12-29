// const sequelize = require ('../config/sequelize');
const Product = require('./model');
const sequelize = require ('../config/sequelize');


const store = async(req,res) => {
    const {users_id, name, price, stock, status} = req.body;
    try{
        await Product.sync();
        const result = await Product.create({users_id, name, price, stock, status});
        res.send(result);
    }catch(e){
        res.send(e);
    }
}

const index = async(req, res) => {    
    try{
        const product = await Product.findAll();
        res.send(product);
    }catch(e){
        res.send(e);
    }
}

const view = async(req, res) => {
    // let id= req.params.id;    
    try{
        const product = await Product.findOne({
            where: {
                id:req.params.id
            }
        });
        res.send(product);
    }catch(e){
        res.send(e);
    }
}

const update = async(req, res) => {
    const{users_id, name, price, stock, status} = req.body;    
    try{
        const product = await Product.update(
            {users_id, name, price, stock, status}
            ,
            {where: {id:req.params.id}}
            );
        res.send(product)
    }catch(e){
        res.send(e);
    }
}

const destroy = async(req, res) => {
    try{
        const product = await Product.destroy({
            where: {
                id:req.params.id
            }
        });
        res.send(product);
    }catch(e){
        res.send(e);
    }
}


module.exports = {
    store,
    view,
    index,
    update,
    destroy
}