import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

//cutted components from here like Header,Option,AddOption,Action and all


//this is the example for default props
// Header.defaultProps={
//     title:"Indecision"
// };

//stateless functional components







ReactDOM.render(< IndecisionApp />,document.getElementById('demo'));

class OldSyntax {

    constructor(){
        this.name='ghanashyam'
        this.getGreeting=this.getGreeting.bind(this)
    }
    getGreeting(){
        return `Hi this  is a test ${this.name}`;
    }
}

const oldsyntax = new OldSyntax();
const getGreeting=oldsyntax.getGreeting;
console.log(getGreeting())
//-----------------------------------------------------
class NewSyantax{
    name = "ghanashyam valsalan"
    getGoodGreet = () => {
        return `Hi this  is a test ${this.name}`;
    }
}
const newsyantax = new NewSyantax();
const getGoodGreett=newsyantax.getGoodGreet;
console.log(getGoodGreett())
//WE ARE GOING TO COPY THE INDECIOSN APP FROM ORIGINAL APP.JS WHICH IS NOW IN PLAYGROUND.
// const template=React.createElement('p',{},'Testing me');
// const template=<p>TESTING ME</p>;

// ReactDOM.render(template,document.getElementById("demo"))


// import validator from 'validator';

// console.log(validator.isEmail("test@gmail.com"));

// // import { square,add } from './utils.js'
// import isSenior,{isAdult,canDrink} from './persons.js'
// // console.log("webpack is running !!")

// // console.log(square(4))
// // console.log(add(100,23))
// console.log(isAdult(15))
// console.log(canDrink(22))
// console.log(isSenior(61))