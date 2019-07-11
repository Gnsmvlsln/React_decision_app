import React from 'react';
// import AddOption from './components/AddOption.js'; //if we want we can remove the .js and AddOptions is default so no need of put it into the curly braces
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption'
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
    state ={
        options:[],
        selectedOption:undefined
    }

    handleDeleteOptions=()=>{
        this.setState(() => ({ options: [] })) 
    };

    handleModalClose=()=>{
        this.setState(()=> ({selectedOption:undefined}))
    }
    handlePick=()=>{
       const random = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[random];
       this.setState(() =>({
           selectedOption:option
       }))
    //    alert(option);
      
    };
    handleAddOption=(opt)=>{
        // console.log(opt)
        if(!opt){
            return "Enter valid value to add item"
        }
        else if(this.state.options.indexOf(opt) > -1){
            return "This option already entered"
        }
        this.setState((prevState) => 
             ({ 
             options:prevState.options.concat([opt]) 
             }))
    };
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter(function(option){
                return optionToRemove !== option;
            })
        }))
        // console.log("hdo", option)
    };
    //no need of this we r converting all methods to arrow function- remove 'this' binding 
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
    //     this.handlePick=this.handlePick.bind(this)
    //     this.handleAddOption=this.handleAddOption.bind(this)
    //     this.handleDeleteOption=this.handleDeleteOption.bind(this)
    //     // this.state={
    //     //     options: []

    //     // }
    // }
    componentDidMount(){
        try{
            const json=localStorage.getItem('options')
            const options=JSON.parse(json);
            if(options){
            this.setState(() => ({ options: options})); 
        }
        }catch(e){

        }
        
        //console.log("componentDidMount")
    }
    componentDidUpdate(prevState,prevProps){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log("saving data")
        }
    }
    
    componentWillUnmount(){
        //it calls when entire dom changes example when - rendering another application like that
    }

    //converting the method to arrow function to remove the 'this' es6 class properties vdo 58

   
    render(){

        //const title="Indecision App";
        const subtitle="Put you life in the hand of computer";

        return(
            <div>
            <Header subtitle={subtitle}/>
            <div  className="container">
            <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <div className="widget">
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption = {this.handleAddOption}
            />
            </div>   
            </div>
            
            <OptionModal
            selectedOption = {this.state.selectedOption}
            handleModalClose = {this.handleModalClose}
            />
            </div>
        )
    }
}

IndecisionApp.defaultProps={
    options:[]
}
