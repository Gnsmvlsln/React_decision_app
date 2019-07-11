
const app = {
    title:'Indecision App',
    subTitle:'This is a demo test',
    options:[]
};

// console.log("App.js is running")

const onFormSubmit=(e)=>{
    e.preventDefault();

    const option=e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value='';
        renderApp();
    }

}

const removeAll = () =>{
    app.options=[];
    renderApp();
}
const onDecisionMaking =() => {
    const random=Math.floor(Math.random()*app.options.length);
    const option=app.options[random]
    alert(option);
}
 
const appRoot= document.getElementById('demo');

const renderApp=()=>{

    const template=(
        <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>Subtitle : {app.subTitle}</p>}
        {app.options && app.options.length > 0 ? "Here are your options" : "No options"}
        <p>{app.options.length}</p>
        <button disabled={app.options.length===0} onClick={onDecisionMaking}>What should i Do?</button>
        <button onClick={removeAll}>Remove all</button>
       
        <ol>
        {
            app.options.map((number)=>{
                return <li key={number}>{number}</li>
                render();
            })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Submit</button>
        </form>
        </div>
        );

    ReactDOM.render(template,appRoot)

}
renderApp();
  




    