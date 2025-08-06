
function customRender(reactElement, root){
    /*
    //Not Optimised
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    root.appendChild(domElement);
    */

    //Optimised Version

    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const [key,value] of Object.entries(reactElement.props)) {
        if (key === 'children') continue;
        domElement.setAttribute(key, value)
        console.log(domElement.getAttribute(key));
    }
    root.appendChild(domElement);
}

let reactElement = {
    type: 'a',
    props:{
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: "click to visit google page" 
}

let  root =  document.querySelector(".root") 
// console.log(root);

customRender(reactElement, root);
