
const GlobalSymbolKeyforValue = {};


const SymbolPolyfile = function Symbol(descriptions = '') {

    // 不能被new
    if (this instanceof SymbolPolyfile) {
        throw new TypeError('Symbol is not a constructor');
    }
    // 核心代码
    const symbol  = Object.create(SymbolPolyfile.prototype);

    Object.defineProperties(symbol, 
        {'__description__':{
        value: descriptions,
        enumerable: false,
        configurable: false,
        writable: false
    }})
    return symbol
}
Object.defineProperties(SymbolPolyfile, {
    for: {
        value: function(key: string) {
            return GlobalSymbolKeyforValue[key]? GlobalSymbolKeyforValue[key]: GlobalSymbolKeyforValue[key] = SymbolPolyfile(key);
        },
        configurable: true,
        writable: true,
        enumerable: true,
    },
    keyFor: {
        value: function(symbol: typeof SymbolPolyfile) {
            for (const key in GlobalSymbolKeyforValue) {
                if (GlobalSymbolKeyforValue[key] === symbol) {
                    return key;
                }
            }
        },
        configurable: true,
        writable: true,
        enumerable: true
    }
})


const d = SymbolPolyfile('12');
const b = SymbolPolyfile('12');


console.log(d === b); // false
