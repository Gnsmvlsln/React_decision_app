class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            options:props.options

        }
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] })) 
        //single line
        //instead of this 5 line code if there is one return statement we can make it in a single line
        // this.setState(() => {
        //     return{
        //         options:[]   
        //     }
        // })
    }
    handlePick(){
       const random = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[random];
       alert(option);
        // this.setState=(() => {
        //     return{
        //         random : Math.floor(Math.random * this.state.options.length)     
        //       }
        // })
    }
    handleAddOption(opt){
        // console.log(opt)
        if(!opt){
            return "Please enter a option"
        }
        else if(this.state.options.indexOf(opt) > -1){
            return "This option already entered"
        }
        this.setState((prevState) => ({  options:prevState.options.concat([opt])  }))
        //below code we changed into the above single line code *as part of removing individual options*
        // this.setState((prevState) => {
        //     return{
        //         options:prevState.options.concat([opt])
        //     }
        // })
    }
    render(){

        //const title="Indecision App";
        const subtitle="Put you life in the hand of computer";

        return(
            <div>
            <Header subtitle={subtitle}/>
            <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption 
            handleAddOption = {this.handleAddOption}
            />
            </div>
        )
    }
}

IndecisionApp.defaultProps={
    options:[]
}

const Header =(props) =>{
    return (<div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
      )}

//this is the example for default props
Header.defaultProps={
    title:"Indecision"
};

// class Header extends React.Component {

//     render() {
        
//         return (<div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//         </div>
//         )}
//}

//stateless functional components
const Action=(props) =>{
    return(
        <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should i do
        </button>
        </div>
        )
}

// class Action extends React.Component{
//     //no need of this .we are doing this method above
//     // handlePick(){
//     //     alert("handlePick")
//     // }
//     render() {
//         return(
//             <div>
//             <button 
//             onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//             What should i do
//             </button>
//             </div>
//         )
//     }
// }

class Options extends React.Component{
    
    
    //This code is about 'This' property setting. no need of that in this project
    // constructor(props){
    //     super(props);
    //     this.handleRemoveAll=this.handleRemoveAll.bind(this)
    // }
    // handleRemoveAll(){
        
    //     console.log(this.props.options)
    //     // alert("handleRemove")
    // }
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            <p>{this.props.options.length} </p>
            <Option />
            </div>
        )
    }
}
const Option =(props) =>{
    return(
        <div>
        <p>{props.optionText}</p>
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//             <p>{this.props.optionText}</p>
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const opt=e.target.elements.addOption.value.trim();
        const error=this.props.handleAddOption(opt);
        // if(opt){
        //    this.props.handleAddOption(opt);
        // }
        if(error){
            this.setState(() => ({ error}))
            // this.setState(() =>{
            //     return{error}
            // })
        }else{
            e.target.elements.addOption.value='';
        }
       

    }
render(){
    return(
        <div>
        {this.state.error && <p>{this.state.error}</p>}
         <p>AddOptions are here</p>
         <form onSubmit={this.handleAddOption}>
         <input type="text" name="addOption"></input>
         <button type="submit">submit</button>
         </form>
        </div>
    )
}

}


// const jsx = (
//     <div>
//      <Header />
//      <Action />
//      <Options />
//      <AddOption />
//     </div>
// )

//ReactDOM.render(jsx,document.getElementById('demo'))
ReactDOM.render(< IndecisionApp />,document.getElementById('demo'));