const mongoose = require('mongoose');

async function connect() {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Connect database thành công !!!')
        }catch(erro) {
            console.log('Connect database thất bại !!!')
    
        }
}

module.exports  = {connect}