/*
    *@description: This app lets to validate input JSON
    *@version: 0.0.1
    *@author: SENTHILKUMAR R(Email Address: sk003cs@gmail.com, Ph: +919663026088)
*/

"use strict";
function ValidateInputJSON() {
    
    // Constants
    const STRING = "string";
    const NUMBER = "number";
    const BOOLEAN = "boolean";
    const OBJECT = "object";
    const ARRAY = "array";
    const ARRAYOFOBJECTS = "arrayofobjects";
    const NULL = "null";
    const UNDEFINED = "undefined";
    
    //This method used to validate datatype of data
    function isValid(c, v) {
        switch (c.t) {
            case STRING:
                return (typeof v ===  STRING);
                break;
            case NUMBER:
                return (typeof v ===  NUMBER);
                break;
            case BOOLEAN:
                return (typeof v ===  BOOLEAN);
                break;
            case OBJECT:
                return (typeof v ===  OBJECT);
                break;
            case ARRAY:
                return (typeof v ===  ARRAY && Array.isArray(v));
                break;
            case ARRAYOFOBJECTS:
                return (typeof v ===  ARRAYOFOBJECTS && Array.isArray(v));
                break;
            case NULL:
                return (typeof v ===  OBJECT && v === null);
                break;
            case UNDEFINED:
                return (typeof v ===  UNDEFINED);
                break;
            default:
                return false;
                break;
        }
    };
    
    //This method used to validate datatype of object KEYS and it's VALUES
    function validateObject(cmp, inp, ignoreExtraKeys) {
        let inpLength = Object.keys(inp).length;
        let cmpLength = Object.keys(cmp).length;
        if (ignoreExtraKeys || (!ignoreExtraKeys && inpLength == cmpLength)) {
            for (var cmpKey in cmp) {
                if (cmp.hasOwnProperty(cmpKey)) {
                    let inpCount = 0;
                    for (var inpKey in inp) {
                        if (inp.hasOwnProperty(inpKey)) {
                            if (cmpKey == inpKey) {
                                if (typeof inp[inpKey] === OBJECT && Array.isArray(inp)) {
                                    if (validateArrayOfObject(cmp[cmpKey], inp[inpKey], ignoreExtraKeys)){
                                        break;
                                    } else {
                                        return false;
                                    }
                                } else if(typeof inp[inpKey] === OBJECT && inp[inpKey] !== null) {
                                    if (validateObject(cmp[cmpKey], inp[inpKey], ignoreExtraKeys)) {
                                        break;
                                    } else {
                                        return false;
                                    }
                                } else if (cmp[cmpKey].m && isValid(cmp[cmpKey], inp[inpKey])) {
                                    break
                                } else {
                                    return false;
                                }
                            }
                        } else {
                            return false;
                        }
                        ++inpCount;
                        if (inpCount == inpLength) return false;
                    }            
                }
            }
        } else {
            return false;
        }
        return true;
    };
    
    //This method used to validate datatype of array object KEYS and it's VALUES
    function validateArrayOfObject(cmp, inp, ignoreExtraKeys) {
        for(let i = 0; i < cmp.length; i++){
            for(let j = 0; j < inp.length; j++){
                if(!validateObject(cmp[i], inp[j], ignoreExtraKeys)){
                    return false;
                }
            }     
        }
        return true;
    };
    
    //This method is entry point to validate JSON object KEYS and it's VALUES
    this.validate = function  validate(cmp, inp, ignoreExtraKeys) {
        if (cmp && inp && typeof cmp === typeof inp) {
            if(typeof cmp === OBJECT && Array.isArray(cmp)) {
                return validateArrayOfObject(cmp, inp, ignoreExtraKeys);
            } else if(typeof cmp === OBJECT) {
                return validateObject(cmp, inp, ignoreExtraKeys);
            } else {
                return false;
            }
        }
        return false;
    };   
}