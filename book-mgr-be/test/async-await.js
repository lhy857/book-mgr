// async-await

//async 函数 返回的是一个 promise
// const fn = async() => {
//     return 1
// };

// console.log(fn());


// const fn = () => {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     });
// };

// fn().then((res) => {
//     console.log(res);
    
// })




// const fn = async function() {

// };


// Promise
// 回调函数

// 一个接口  要拿到数据 跑5个前置接口


// function request(arg, cb) {
//     setTimeout(() => {
//         console.log(arg);
//         cb(arg + 1);

//     }, 1000);
// };

// request(1, function (res1) {
//     request(res1, function (res2) {
//         request(res2, function (res3) {
//             request(res3, function (res4) {
//                 request(res4, function (res5) {
//                     console.log('res5:', res5);
                    
//                 });
//             });
//         });
//     });
// });


// const request = (arg, isReject) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isReject) {
//                 reject('出错啦');
//                 return;
//             }
//             console.log(arg);
//             resolve(arg+1);
//         }, 1000);
//     });
// };

// request(1)
//     .then((res1) => {
//         return request(res1, true);
//     })
//     .catch((msg) => {
//         console.log(msg);
        
//     })
//     .then((res2) => {
//         return request(res2);
//     })
    // .then((res3) => {
    //     return request(res3);
    // })
    // .then((res4) => {
    //     return request(res4);
    // })
    // .then((res5) => {
    //     console.log('res5:', res5);
    // })