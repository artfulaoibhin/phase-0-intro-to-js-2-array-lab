const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
const newCats = [ ..."Broom"]
function appendCat(){
    let newCats = ([...cats, "Broom"])
    return newCats;
}
const orangeCats = ["Arnold"]
function prependCat(){
    let orangeCats = ["Arnold", ...cats]
    return orangeCats;
}
function removeLastCat(){
    return cats.slice(0, -1)
}
function removeFirstCat(){
    return cats.slice(1)
}  


