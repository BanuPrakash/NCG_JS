// const { filter, map } = require('./lib');

import filter, { map } from "./lib";

import './styles.css'; // css-loader and style-loader

var products = [
    { "id": 13, "name": "iPhone 16", "price": 98000.00, "category": "mobile" },
    { "id": 13, "name": "Onida Thunder", "price": 3000.00, "category": "tv" },
    { "id": 13, "name": "Samsung Fold", "price": 123000.00, "category": "mobile" },
    { "id": 13, "name": "MotoG", "price": 12000.00, "category": "mobile" },
    { "id": 13, "name": "Sony Bravia", "price": 267000.00, "category": "tv" },
    { "id": 36, "name": "Wacom", "price": 5600.00, "category": "computer" }
];

let mobiles = filter(products, function (p) { return p.category === 'mobile'; })

mobiles.forEach(mobile => {
    console.log(mobile);
});

let names = map(products, function (p) { return p.name });

names.forEach(name => console.log(name));

let product = products[0];

// createElement is to convert JSX to JS object
// tags are like div, h1, p,..
// props are attributes like className, src, width, style
// children : elements within begin and end tag
let React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props);
        }
        var element = { tag, props: { ...props, children } }
        //    console.log(element);
        return element;
    }
}

function render(element, container) {
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag);
    if (element.props) {
        if (element.props.children) {
            element.props.children.forEach(child => render(child, domElement));
        }
    }
    container.appendChild(domElement);
}

// JSX
let ProductCard = () => (<div className="card">
    <h1 className="card-header">
        {product.name}
    </h1>
    <div className="card-body">
        {product.category} Rs.{product.price}
    </div>
</div>)

console.log(ProductCard);

// render(ProductCard, document.getElementById("root"));

render(<ProductCard />, document.getElementById("root"));

