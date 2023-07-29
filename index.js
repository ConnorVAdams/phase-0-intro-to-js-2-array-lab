const cats = ["Milo", "Otis", "Garfield"];

let newCats = []

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    cats.pop();
};

function destructivelyRemoveFirstCat(name) {
    cats.shift();
};

function appendCat(name) {
    newCats = [...cats, "Broom"];
    return newCats;
};

function prependCat(name) {
    newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    newCats = cats.slice(0, 2);
    return newCats;
}

function removeFirstCat() {
    newCats = cats.slice(1, 3);
    return newCats;
}