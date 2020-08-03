//function that is going to be exported to another file
const sayHello = (name = "hello") => console.log(name);

module.exports = sayHello;
