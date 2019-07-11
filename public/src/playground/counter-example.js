class Counter extends React.Component{

  constructor(props){
      super(props);
      this.handleAddOne=this.handleAddOne.bind(this);
      this.handleMinusOne=this.handleMinusOne.bind(this);
      this.handleReset=this.handleReset.bind(this);
      this.state = {
        count: 0
      };
  }
  componentDidMount(){
    const stringCount=localStorage.getItem('count')
    const count=parseInt(stringCount, 10)
    if(!isNaN(count))
    {
        this.setState(() =>({ count: count}))
    }
  }
  componentDidUpdate(prevState){
      if(prevState.count != this.state.count){
          localStorage.setItem("count",this.state.count)
      }
  }
    handleAddOne(){
        
        this.setState((prevState) => {
            return{
                count: prevState.count+ 1
            };
        })
        //instead of this below code we can use above for automatic rerender
        // this.state.count=this.state.count + 1;
        // console.log(this.state)
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            };
        })
        // console.log("minus working")
    }
    handleReset(){
        this.setState(() =>{
            return{
                count: 0
            };
        })
        // this.setState({
        //     count: 0
        // })
        // console.log("reset all")
    }
    render(){
        return(
            <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// Counter.defaultProps={
//     count:0
// }

ReactDOM.render(<Counter />, document.getElementById("demo"));



// let count=0;
// const addOne = () => {
//     count ++;
//     renderApp();
//     //console.log("Add one", count)
// };
// const minusOne = () => {
//     count --;
//     renderApp();
//     // console.log("Minus one")
// }
// const reset = () => {
//     count=0;
//     renderApp();
//     // console.log("Reset")
// }


// const appRoot= document.getElementById('demo');

// const renderApp = () =>{
//     const templateTwo=(
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne} className="my-class"> + 1</button>
//             <button onClick={minusOne}> - 1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderApp();

// console.log(templateTwo)
