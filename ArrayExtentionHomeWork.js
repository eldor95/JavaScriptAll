const data1 = [[1, 5], [2], [3], [4]]
const data2 = [[4], [3, 6], [2], [5]]
const data3 = [[6], [7], [2], [1, 9]]

const result_1 = data1.concat(data2, data3)

const vb = []
for (let i = 0; i < result_1.length; i++) {
    for (let item in result_1[i]) {
       vb.push(result_1[i][item])
       }
}

const bb = []
for (let i = 0; i < vb.length; i++) {
    let a = 0 
    for (let j = 0; j < vb.length; j++) {
        
        if (vb[i] == vb[j]) {
            a++
        }
        else continue
    }
    if(a == 1){
        bb.push(vb[i])
    }
    
}
console.log(vb)
console.log(bb)
