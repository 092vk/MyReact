function customeRenderer(reactELement,container){
    // first we will make the reactELement type of custom element 
    //then we will insert html in it
    //then we will set its attributes and 
    //then we will append it to container 

    const domElement = document.createElement(reactELement.type);
    domElement.innerHTML= reactELement.children;
    domElement.setAttribute('href',reactELement.props.href);
    domElement.setAttribute('target',reactELement.props.target);

    container.appendChild(domElement);
}




// lets say we have imported app from app.js
// react after importing it , makes a tree out of it 
// component tree structure
const reactELement ={
    type:'a',
    props:{
        href:"https://google.com",
        target:'blank'
    },
    children:'Click me to visit google hh '
}
// a tree(not-accurate )of a '<a>'tag



// lets make a main root container 
const mainContainer = document.querySelector('#root');

// now we have to get the app.js and render in into index.js
customeRenderer(reactELement,mainContainer);


