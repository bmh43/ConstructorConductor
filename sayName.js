//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here

 var blake = new Person ("Blake", 32);
 var emily = new Person ("Emily", 30);
 var taylor = new Person ("Taylor", 6);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert(this.name);
};

blake.sayName();


