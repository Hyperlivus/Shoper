export const removeDuplicates = <T>(array:T[])=>{
    const newArray:T[] = [];
    for (const item of array) {
        if (!newArray.includes(item)){
            newArray.push(item);
        }
    }
    return newArray;
};
export const addWithoutDuplicates = <T>(...arays:T[][])=>{
    const res:T[] = [];
    for (const array of arays){
        for (const item of array){
            if (!res.includes(item)){
                res.push(item);
            }
        }
    }
    return res;
}