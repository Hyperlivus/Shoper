import {addWithoutDuplicates, removeDuplicates} from "./duplicates";
import {getKeysOfObject} from "@/utils/logic/keys";

export const mergeObjects = <T>(obj1:T, obj2:T)=>{
    const keys = removeDuplicates([
        ...Object.keys(obj1 as object), ...Object.keys(obj2 as object),
    ]) as (keyof T)[];


    const res = new Map();
    for (const key of keys){
        const val1 = obj1[key];
        const val2 = obj2[key];

        if (!val1){
            res.set(key, val2);
        } else if (!val2) {
            res.set(key, val1);
        } else {
            if (typeof val1 === 'object' && typeof val2 === 'object'){
                res.set(key, mergeObjects(val1, val2));
            } else {
                res.set(key, val1);
            }
        }
    }

    return Object.fromEntries(res) as T;
}
export const mergeMany = <T>(...objects:T[]):T=>{
    if (objects.length === 1){
        return objects[0];
    }

    const keys= addWithoutDuplicates(
        ...objects.map(obj=>{
            return getKeysOfObject(obj);
        })
    );

    const res = new Map();
    for (const key of keys){
        const notNullableValues = [];

        for (const obj of objects){
            const value = obj[key];
            if (value){
                res.set(key, value);
                notNullableValues.push(value);
            }
        }
        res.set(key, mergeMany(...notNullableValues));
    }

    return Object.fromEntries(res);
}