class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.state={
            options:props.options

        }
    }
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



    handleDeleteOptions(){
        this.setState(() => ({ options: [] })) 
    }
    handlePick(){
       const random = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[random];
       alert(option);
      
    }
    handleAddOption(opt){
        // console.log(opt)
        if(!opt){
            return "Please enter a option"
        }
        else if(this.state.options.indexOf(opt) > -1){
            return "This option already entered"
        }
        this.setState((prevState) => 
             ({ 
             options:prevState.options.concat([opt]) 
             }))
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter(function(option){
                return optionToRemove !== option;
            })
        }))
        // console.log("hdo", option)
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
                handleDeleteOption={this.handleDeleteOption}
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


class Options extends React.Component{
  
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            {this.props.options.map((option) => 
                <Option
                 key={option} 
                 optionText={option} 
                 handleDeleteOption={this.props.handleDeleteOption}
                 />)}

            <p>{this.props.options.length} </p>
            <Option />
            </div>
        )
    }
}
const Option = (props) =>{
    return(
        <div>
        {props.optionText}
        <button onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }
            
        }>Remove</button>
        </div>
    )
}

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
  
        if(error){
            this.setState(() => ({ error}))

        }else{
            e.target.elements.addOption.value='';
        }
       

    }
render(){
    return(
        <div>
        {this.state.error && <p>{this.state.error}</p>}
         <form onSubmit={this.handleAddOption}>
         <input type="text" name="addOption"></input>
         <button type="submit">submit</button>
         </form>
        </div>
    )
}

}

ReactDOM.render(< IndecisionApp />,document.getElementById('demo'));