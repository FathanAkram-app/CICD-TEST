var lodash = require('lodash');
const helpers ={
    recursiveTest: (v) => {
        const c = String(lodash.sum(v))
        if (c.length > 1) {
            const arr = []
            for (const key in c) {
                arr.push(parseInt(c[key]))
            }
            return helpers.recursiveTest(arr)
        }else{
            return v[0]
        }
    }
}

module.exports = helpers