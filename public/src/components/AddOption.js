import React from 'react'; //all of our code is converting into jsx ->js for that we have to import react

class AddOption extends React.Component{
    state = { error : undefined}
    // constructor(props){
    //     super(props);
    //     this.handleAddOption=this.handleAddOption.bind(this)
    //     // instead of giving state like this we can declare it like above mentioned vdo-58 es6 class properties
    //     // this.state={
    //     //     error:undefined
    //     // }
    // }

    handleAddOption=(e) =>{
    // handleAddOption(e){ - instead of this we can do it like above arrow function vdo-58 es6 class properties
    //once we delcare like this there is no need of constrcutor because 'this' will come here itself
    //bcoz arrow function have instance this and this depend on the scope
        // console.log("test")
        e.preventDefault();
        const opt=e.target.elements.addOption.value.trim();
        const error=this.props.handleAddOption(opt);
  
        if(error){
            this.setState(() => ({ error}))

        }else{
            e.target.elements.addOption.value='';
        }
       

    }
render(){
    return(
        <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
         <form className="add-option" onSubmit={this.handleAddOption}>
         <input className="add-option__input" type="text" name="addOption"></input>
         <button className="button" type="submit">Add Option</button>
         </form>
        </div>
    )
}

}
export default AddOption;