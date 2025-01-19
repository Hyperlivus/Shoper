export const getKeysOfObject = <T>(obj:T)=>{
    return Object.keys(obj as object) as (keyof T)[];
}
