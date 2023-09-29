//Question 1

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);


//Question 2

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.colour);
}

//Question 3

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (let i = 0; i < dinnerOptions.length; i++) {
    var dinnerOption = dinnerOptions[i];
    if (dinnerOption.onSpecial === true) {
        console.log(dinnerOption.name)
    }
}

// Question 4

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age >= 20 && person.age <= 50) {
        console.log(person.firstName);
        console.log(person.lastName);
    } 
}

//Question 5

var listOfProducts = document.querySelector("ul")

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    listOfProducts.innerHTML += "<li>" + product.name + " " + "-" + " "+ product.price + " " + "NOK" + "</li>";
}