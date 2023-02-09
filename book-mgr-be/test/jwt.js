var jwt = require('jsonwebtoken');
var token = jwt.sign({
    account: 'a.cc.com',
    _id: '123',
}, 'aaa')

console.log(token);

jwt.verify(token, 'aaa', (err, payload) => {
    console.log(err, payload);
    
})
// header
//加密的算法   sha256

//payload
//服务端想拿到的信息

//signature
//签证相关的内容    进行解密
