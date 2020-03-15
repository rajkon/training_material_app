

(function foo(i) {
    if (i === 3) {
        return;
    }
    else {
        console.log(i);
        foo(++i);
    }
}(0));