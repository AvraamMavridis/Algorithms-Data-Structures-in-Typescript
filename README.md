# JS Engineer Questions

## JS

####  **Explain Event Delegation**

DOM event delegation is a mechanism of responding to events via a single common event listener on the parent rather than having listeners on every child, because of event "bubbling".

### **Explain how this works in JavaScript**

`this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc. One of the properties of this record is the `this` reference.

`this` is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

### Difference between: `function Person(){}`, `var person = Person()` and `var person = new Person()`?

1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed object is [[Prototype]]-linked
3. the newly constructed object is set as the this binding for that function call
4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

`var person = Person() // person is the result of the function`

`var person = new Person() // person is newly created object`

### Explain why the following doesn't work as an IIFE: `function foo(){ }()`;

`function foo(){ }()` -> `(function foo(){ })()`

### What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

`typeof null` is also `object`
`typeof []` is also `object`

To avoid it we can do `toString(obj) === '[object Object]';

### Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B

Starting from the given node in tree A we find the path.

```
function getPath(elem){
   let currElem = elem;
   let path = [];
   while(currElem && currElem.parentNode){
     let index = Array.from(currElem.parentNode.childNodes).indexOf(currElem);
     path.push(index)
     currElem = currElem.parentNode;
   }
   return path;
}
```

```
function findNodeByPath(nodeTree, path){
  let _path = [].concat(path);
  let elem = nodeTree;
  while(_path.length){
    let index = path.pop();
    elem = Array.from(elem.childNodes)[index];
  }
  return elem;
}
```

### Implement `debounce`

```
function debounce(fn, time, context = this) {
    let timeout;
    let callbackArgs;

    return function() {
       callbackArgs = arguments;
       clearTimeout(timeout);
       timeout = setTimeout(fn.bind(context, ...callbackArgs),time);
    }
}
```


## CSS

### What's the difference between inline and block elements?

A block-level element always starts on a new line and takes up the full width available
An inline element does not start on a new line and only takes up as much width as necessary.

## HTML

### Create new DOM Element

`let div = document.createElement('div')`

### Append child

`document.appendChild(div)`