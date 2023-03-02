function findSubstring(s: string, x: string){
    let index_sub = s.indexOf(x)
    console.log("index sub : ", index_sub)

    if(index_sub !== -1){
        return index_sub
    }

    let index_ast = x.indexOf("*")
    console.log("index ast : ", index_ast)

    if(index_ast !== -1){
        for(const char of s){
            let new_x = x.replace("*", char)
            console.log("new x : ", new_x)
            let index_sub_new_x = s.indexOf(new_x)
            console.log("index sub new x : ", index_sub_new_x)
            if(index_sub_new_x !== -1){
                return index_sub_new_x
            }
        }
    }
    return -1
}

// console.log(findSubstring("juliasamanthajulia", "ant"))
console.log(findSubstring("juliasamanthajulia", "ant*as"))