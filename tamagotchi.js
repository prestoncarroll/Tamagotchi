//build a constructor for digitalPal and give its propeties 

function DigitalPal(hungry = false, sleepy = false, bored = true, age = 0) {
    // set values to parameters
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    // and 4 methods 


    this.feed = function () {
        //check if this digital pal is hungry

        if (this.hungry) {
            console.log("that was yummy!")
            // set value of hungry to false 
            this.hungry = false;
            this.sleepy = true;


        }
        else {
            console.log("no thanks im full!")

        }

    };

    this.sleep = function () {
        // check if didgital pal is sleepy
        if (this.sleepy) {
            console.log("zzzzzzzzz")

            this.sleepy = false;
            this.bored = true;

            // call the increaseAge() function
            this.increaseAge()


        }
        else { console.log("im not tired") }
    };


    // adding the increaseAge function()
    this.increaseAge = function () {
        this.age = this.age + 1
        console.log(" happy birthday to me! i am ", this.age, "years old!")


    };

    this.play = function () {
        // seeing if the tamagotchi wants to play
        if (this.bored) {
            console.log("YAY LET'S PLAY!")
            // setting bored to false
            this.bored = false;
            //setting hungry to true
            this.hungry = true;
        }

        else { console.log("Not right now. Later?") }
    }

};
// creating object to contain our dog and cat Digital Pal
var animals = {}
// creating a variable named dog and making it a new DigitalPal
animals.dog = new DigitalPal();

//adding the outside property to dog and setting it to false
animals.dog.outside = false;

// adding a bark function
animals.dog.bark = function () {
    console.log("Woof! Woof!");
};


//adding a go outside function
animals.dog.goOutside = function () {
    if (this.outside === false) {
        console.log("YAY! I LOVE THE OUTDOORS!");
        //  setting outside to true
        this.outside = true;
        //  calling the bark function
        dog.bark();
    }

    else {
        console.log("We're already outside though!");
    }
};

// adding a go inside function for our dog
animals.dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine....")

        this.outside = false;
    }

};
//  adding a cat to our Digitial pals
animals.cat = new DigitalPal();

// giving a house condition interger stat
animals.cat.houseCondition = 100;

// adding a meow function
animals.cat.meow = function () {
    console.log("Meow! Meow!")
};


// adding a destory furniture function
animals.cat.destroyFurniture = function () {
    //house condition loses 10 after furniture is destroyed
    if (this.houseCondition - 10 > 0) {
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("MUAHAHAHAHAH! TAKE THAT FURNITURE!")

    }
    else {
        console.log("i've destroyed it all!")
    }
};

// adding a buy new furniture function
animals.cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("I WILL EAT THE NEW FURNITURE HAHAHA!");


};




var animal = process.argv[2];
var method = process.argv[3];

animals[animal][method]();









