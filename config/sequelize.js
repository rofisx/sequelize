const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'rofi_edu',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log('Koneksi Berhasil');
    }catch (e){
        console.log('Koneksi Gagal');
    }
})();

module.exports = sequelize;