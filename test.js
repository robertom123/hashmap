//hash map 
function BuildCharMap(str){
    const obj = {}
    

    for(let char of str){
        console.log(char)
        obj[char] = obj[char] + 1 || 1
    }
    console.log(obj);
}

BuildCharMap('letter');

 
