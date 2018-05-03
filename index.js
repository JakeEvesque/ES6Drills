let myFunction = (name, location, favFood) => { console.log(`Name: ${name} Food: ${location} FavFood: ${favFood}`)};
let myArray = ["Jake", "Babalu's", ["Guacamole"]];
myFunction(...myArray);

let myName = "Jake Evesque";
let parseName = (str) => {
    let myArray = [...str];
    myArray.forEach((i) => { console.log(i)});    
};
console.log("hellow");
parseName(myName);
console.log("hellow");

let favMovie = (name = "World", movie = "The Room")   =>  console.log(`Halo, my name is ${name} and my favorite movie is ${movie}`);

let getFirstName = (name) => {return name.split(' ')[0]};

let calculate = (a, b) => ( { product: a * b, squared: Math.pow(a,b)});


let calc = calculate(2,4);

console.log(`Product: ${calc.product} Squared: ${calc.squared}`);



console.log(`First Name: ${getFirstName("Indigo Montoya")}`);
favMovie();

favMovie("Indigo Montoya", "The Princess Bride");

