// Su dung than so la doi tuong arguments
const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
};
console.log(concat(' - '));
function concatM(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
console.log(concatM(" - "));