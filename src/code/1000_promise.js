//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const myadd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

console.log(myadd(2,2));

//SECOND example
// myadd(1, 1).then((sum) => {
//     console.log(sum)
//     return myadd(sum, 2)
// }).then((final_total_2nd_example) => {
//     console.log('final_total_2nd_example: ' + final_total_2nd_example)
// }).catch((e) => {
//     console.log(e)
// })


//THIRD example
// myadd(10, 15).then((third_example_sum) => {
//     console.log('third_example_sum: '+ third_example_sum);
//     myadd(third_example_sum, 25).then((final_total_third_example) => {
//         console.log('final_total_third_example: ' + final_total_third_example);
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {   
//     console.log(e)
// })

