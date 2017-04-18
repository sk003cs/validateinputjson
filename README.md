# validateinputjson
var validateinputjson = new ValidateInputJSON(); //Initializing

var compare1 = {
    "string": {
        t: "string",
        m: true   
    },
    "number": {
        t: "number",
        m: true   
    },
    "boolean": {
        t: "boolean",
        m: true   
    },
    "null": {
        t: "null",
        m: true   
    }
};

var input1 = {
    "string": "string",
    "number": 123,
    "boolean": false,
    "null": null
}; 

validateinputjson.validateJSON(compare1, input1, true) // 3rd arg: Ignore if there is extra object keys
Output: true

var compare2 = [
    {
        "string": {
            t: "string",
            m: true   
        },
        "number": {
            t: "number",
            m: true   
        },
        "boolean": {
            t: "boolean",
            m: true   
        },
        "null": {
            t: "null",
            m: true   
        }
    }
];

var input2 = [
    {
        "string": "string",
        "number": true,
        "boolean": false,
        "null": null
    }
];

validateinputjson.validateJSON(compare2, input2, true) // 3rd arg: Ignore if there is extra object keys
Output: false


var compare3 = {
    "string": {
        t: "string",
        m: true   
    },
    "number": {
        t: "number",
        m: true   
    },
    "boolean": {
        t: "boolean",
        m: true   
    },
    "null": {
        t: "null",
        m: true   
    },
    "array": [
        {
            "string": {
                t: "string",
                m: true   
            },
            "number": {
                t: "number",
                m: true   
            },
            "boolean": {
                t: "boolean",
                m: true   
            },
            "null": {
                t: "null",
                m: true   
            }
        }
    ]
};

var input3 = {
    "string": "string",
    "number": 123,
    "boolean": false,
    "null": null,
    "array": [
        {
            "string": "podi",
            "number": 123,
            "boolean": false,
            "null": null
        }
    ]    
};

validateinputjson.validateJSON(compare3, input3, true) // 3rd arg: Ignore if there is extra object keys
Output: true
