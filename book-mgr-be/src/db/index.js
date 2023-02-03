const mongoose = require('mongoose');

//给哪个数据库的
//哪个集合
//添加什么格式的文档

//Schema    映射了MongoDB下的一个集合，并且他的内容就是集合下文档的构成
//Modal    可以理解成是根据Schema生成的一套方法，这套方法用来操作Mongodb集合和集合下的文档
const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModal = mongoose.model('User',UserSchema);

const connect = () => {
    //去链接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
    // 当数据库被打开的时候  做的一些事情
    mongoose.connection.on('open', () => {
        console.log('连接成功');

        //创建文档
        const user = new UserModal({
            nickname:'小zhu',
            password:'12',
            age:15,
        });

        user.age = 99;
        //保存   同步到MOngodb
        user.save();
    }); 
};

connect();