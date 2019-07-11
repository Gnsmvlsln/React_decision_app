const arr = (a,b) => {
    // console.log(arguments);
    return a+b;
};

console.log(arr(50,1));

const test={
    name:'ghanashyam',
    places:['kottakkal','ernakulam','chennai'],
    // placesLived() {    /** instead of this 'placesLived : function () {' we can make this line as a method */
    //     // console.log(this.name)
    //     // console.log(this.places)
    //     //const that=this;
    //     //once we change this to arrow fn. no need to reassign it into the that
    //     this.places.forEach((city) => {
    //         console.log(this.name +" lived in "+city)
    //     })
    // }
    placesLived(){
        return this.places.map((city) =>  this.name +' lived in '+ city
           
        )
    }
}

console.log(test.placesLived());

const multiplier = {
    numbers : [2,4,6],
    multiplyBy : 10,
    multiplied (){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
 console.log(multiplier.multiplied())
