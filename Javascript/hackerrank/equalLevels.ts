function updateTime(signalOne: number[],signalTwo: number[]){
    let mx = -1, ans= 0

    const newArray = signalOne.map((e: any, i) => [e, signalTwo[i]])
    console.log("new Array : ", newArray)

    for (const i of newArray){
        if(i[0] == i[1] && i[0] > mx){
            ans +=1
            mx = i[0]
            console.log("ans : ", ans)
            console.log("mx : ", mx)
        }
    }
    return ans
}

const signalOne = [1,2,3,4,1]
const signalTwo = [5,4,3,4,1]


console.log(updateTime(signalOne,signalTwo))