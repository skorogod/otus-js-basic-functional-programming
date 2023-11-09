export function sum(a: number) {

    if(!a) {
        a = 0;
    }

    function f (n) {
        return sum(a+n)
    }

    f.toString = function () {
        return a;
    }

    return f;
}