class VisibilityToggle extends React.Component {
    constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
        visibility: false
      };
    }
    handleToggleVisibility() {
        
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visibility && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<VisibilityToggle />, document.getElementById('demo'));
  





































// //**************************************************************************************** */


// // <h1>Visibility Toggle</h1>

// // let visibile = false;
// // const visibility = () =>{
// //    visibile = !visibile
// //    render()
// //    }

// // const approot=document.getElementById("demo");


// // const render=()=>{
// //     const templateTwo = (
// //         <div>
// //         <h1>Visibility Toggle</h1>
// //         <button onClick={visibility}>{visibile?'Hide Details':'Show details'}</button>
// //         {visibile && 
// //         <div>
// //         <p>Hey It showing some details</p>
// //         </div>
// //         }
// //         </div>
// //     );
// //     ReactDOM.render(templateTwo,approot)
// // };

// // render();

