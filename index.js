function pickup() {
    return "sheets"
}


function receivesAFunction(callback) {
    pickup();
    callback();
};

receivesAFunction();


function returnsANamedFunction() {
return returnsANamedFunction };


function returnsAnAnonymousFunction() {
    return () => {}
};
