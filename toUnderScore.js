function toUnderscore(string) {
    
    return isFinite(string)? string.toString():string.match(/[A-Z][^A-Z]*/g).map(num=>num.toLowerCase()).join("_");
}