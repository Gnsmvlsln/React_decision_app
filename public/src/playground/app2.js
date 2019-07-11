
const app = {
    title:'Indecision App',
    subTitle:'This is a demo test',
    options:['one','two','three']
};

// console.log("App.js is running")

const template=(
    <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>Subtitle : {app.subTitle}</p>}
    {app.options && app.options.length > 0 ? "Here are your options" : "No options"}
    <ol>
    <li>item one.</li>
    <li>item two.</li>
    </ol>
    </div>
    );
const user={
    name:'Ghanashyam',
    Age:23,
    Location:'Kottakkal'
}
function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}
const templateTwo=(
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.Age && user.Age >= 18) && <p>Age : {user.Age}</p>}
    {getLocation(user.Location)}
    </div>
);
const appRoot= document.getElementById('demo');

ReactDOM.render(template,appRoot);
