
var message ="in global";
console.log("global: message = " + message);
var a = function () {
	var message ="inside a";
	console.log("a: message = " + message);

	function b () {
	console.log("b: message = " +message);
}
	b()
}

a()
var x;
console.log(x);
if (x== undefined) {
	console.log("x is undefined");
}
x = 5;
if (x == undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined");
}
//var string ="Hello";
//string += " World ";
//console.log(string + "!");
//console.log((5+4)/3);
//console.log(undefined/5);
//function test1 (a) {
//	console.log( a / 5);
//}
//test1();


var x = 4, y = 4;
if( x == y){
	console.log("x=4 is equal to y=4");
}
x = "4";
if( x== y) {
	console.log("x='4' is equal to y=4");
}
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}

if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}




function a()
{
	return;
	{
	name:"nigar"
};
}
function b()
{
	return {
		name:"nigar"
	};
}
console.log(a());
console.log(b());


var sum = 0;
for (var i =0; i < 10; i++) {
	console.log(i);
	sum = sum + 1;
}
console.log("sum of 0 through 9 is: " + sum);




function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.Firstname = "Nigar";
console.log(company);
console.log("Company CEO name is:" + company.ceo.Firstname);
console.log(company["name"]);
var StockPropName = "stock of company";
company[StockPropName] = 110;
console.log("Stock price is:" + company [StockPropName]);
var facebook = {
	name: "Facebook",
	ceo: {
		firstname:"Nigar",
		favColor: "blue"
	},
	"stock of company": 110
};
console.log(facebook);

function multiply(x, y) {
	return x * y;
}
console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;

	};
	return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);





