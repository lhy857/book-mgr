const request = (arg, isReject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReject) {
                reject('出错啦');
                return;
            }
            console.log(arg);
            resolve(arg + 1);
        }, 300);
    })
}

// await 必须在 async函数中用

const fn = async () => {
    // const res = await request(10);
    // console.log(res);
    const res1 = await request(1);
    const res2 = await request(res1);
    const res3 = await request(res2);
    const res4 = await request(res3);
    const res5 = await request(res4);

    console.log(res5);
}

fn();