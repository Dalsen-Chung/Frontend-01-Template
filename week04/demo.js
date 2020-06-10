let set = new Set()
let globalproperties = [
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "Array",
    "Date",
    "RegExp",
    "Promise",
    "Proxy",
    "Map",
    "WeakMap",
    "Set",
    "WeakSet",
    "Function",
    "Boolean",
    "String",
    "Number",
    "Symbol",
    "Object",
    "Error",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8ClampedArray",
    "Atomics",
    "JSON",
    "Math",
    "Reflect"
]

let queue = []
for (const p of globalproperties) {
    queue.push({
        path: [p],
        object: this[p]
    })
}

let current = null

while(queue.length) {
    current = queue.shift()
    console.log(current.path.join('.'))
    if (set.has(current.object)) {
        continue
    }
    set.add(current.object)

    for (let p of Object.getOwnPropertyNames(current.object)) {

        let property = Object.getOwnPropertyDescriptor(current.object, p)

        if (property.hasOwnProperty('value')  && 
             ((property.value !== null ) && (typeof property.value === 'object'))
             && property.value instanceof Object) {
            queue.push({
                object: property.value,
                path: current.path.concat([p])
            })
        }

        if (property.hasOwnProperty('get') && (typeof property.get === 'function')) {
            queue.push({
                object: property.get,
                path: current.path.concat([p])
            })
        }

        if (property.hasOwnProperty('set') && (typeof property.set === 'function')) {
            queue.push({
                object: property.set,
                path: current.path.concat([p])
            })
        }
    }
}