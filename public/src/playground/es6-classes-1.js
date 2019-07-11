class person{
     constructor(name = 'anonymous',age =0){
        this.name=name;
        this.age=age;
     }   
     getGreeting(){
        return `Hi my name is ${this.name}`;
     }
     getDescription(){
         return `${this.name} is ${this.age} year(s) old`
     }
}
class Traveller extends person{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    hasLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greet=super.getGreeting();

        if(this.hasLocation()){
            greet += ` i m visiting from ${this.location}`
        }
        return greet;
    }
    
}

const me=new Traveller('ghanashyam',23,'kottakkal');
console.log(me.getGreeting())

const other=new Traveller();
console.log(other.getGreeting())