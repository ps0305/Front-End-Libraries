let arr = [
    { text: 'ES6 is awesome', type: 'p' },
    { text: 'ES6 is significant update in JS history', type: 'li' },
    { text: 'const creates immutable variables', type: 'li' },
    { text: 'Block scoping via let and const', type: 'li' },
    { text: 'ES6 was released in 2015', type: 'h3' }
];

let contents = elements.forEach(data => data.type === 'li');
for (content of contents) {
    let { text, type } = contents;
    console.log(`Element type is ${type} with text ${text}`);
}
