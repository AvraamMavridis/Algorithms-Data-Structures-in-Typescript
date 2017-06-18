# JS Engineer Questions

## JS

####  **Explain Event Delegation**

DOM event delegation is a mechanism of responding to events via a single common event listener on the parent rather than having listeners on every child, because of event "bubbling".

#### **Explain how `this` works in JavaScript**

`this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc. One of the properties of this record is the `this` reference.

`this` is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

#### Difference between: `function Person(){}`, `var person = Person()` and `var person = new Person()`?

1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed object is [[Prototype]]-linked
3. the newly constructed object is set as the this binding for that function call
4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

`var person = Person() // person is the result of the function`

`var person = new Person() // person is newly created object`

#### Explain why the following doesn't work as an IIFE: `function foo(){ }()`;

`function foo(){ }()` -> `(function foo(){ })()`

#### What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

`typeof null` is also `object`
`typeof []` is also `object`

To avoid it we can do `toString(obj) === '[object Object]';

#### Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B

Starting from the given node in tree A we find the path.

```js
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

```js
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

#### Implement `debounce`

```js
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

### JS Frameworks etc


## CSS

#### What's the difference between `inline`, `inline-block` and `block` elements?

- Inline elements:

Respect left & right margins and padding, but not top & bottom.
Cannot have a width and height set.
Allow other elements to sit to their left and right.

- Block elements:

Respect all of those, force a line break after the block element

- Inline-block elements:

Allow other elements to sit to their left and right, respect top & bottom margins and padding. Respect height and width.

`inline` element can start on one line and wrap onto the following line, while an `inline-block` element will wrap as a whole.

## HTML

#### What does a doctype do?

It is an instruction to the web browser about what version of the markup language the page is written in.
DOCTYPEs are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.

#### What's the difference between full standards mode, almost standards mode and quirks mode?

In the old days of the web, pages were typically written in two versions: One for Netscape Navigator, and one for Microsoft Internet Explorer. When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. Browsers therefore introduced two modes to treat new standards compliant sites differently from old legacy sites.

There are now three modes used by the layout engines in web browsers: quirks mode, almost standards mode, and full standards mode. In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented.

#### What's the difference between HTML and XHTML?

The Extensible Hypertext Markup Language, or XHTML, is a markup language that has the same depth of expression as HTML, but also conforms to XML syntax.

#### Are there any problems with serving pages as application/xhtml+xml?

IE < 8 will show a download dialog for the pages, instead of rendering them properly.

#### How do you serve a page with content in multiple languages?

The `lang="en"` or `xml:lang="en"` HTML lang attribute can be used to declare the language of a Web page or a portion of a Web page. This is meant to assist search engines and browsers. Also metadata and `Content-Language` HTTP header can be used.

#### What kind of things must you be wary of when design or developing for multilingual sites?

- `hreflang` attr in link. The attribute signals to search engines that there is an alternative version of the webpage in another language.
e.g. If your site is `www.example.com` in english and you have a spanish version `<link rel="alternate" hreflang="es" href="http://es.example.com/" />`

- `dir` attribute specifying the text direction. e.g. `<p dir="rtl">Write this text right-to-left!</p>`

- `<meta charset='UTF-8'>`

#### What are data- attributes good for?

`data-*` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM, or `Node.setUserData()`.

- Example

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
</article>
```

```js
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

```css
article::before {
  content: attr(data-parent);
}
```

#### Create new DOM Element

`let div = document.createElement('div')`

#### Append child

`document.appendChild(div)`

#### Style element

`element.style.color = "#ff3300";`

#### Getting and Setting the HTML Elements

```
// get the HTML of "element"
var content = element.innerHTML;

// set the HTML of "otherElement"
otherElement.innterHTML = content;
```

#### Getting and Setting the Class Name

```
// get the class name of "element"
var cName = element.className;

// set the class name of "otherElement"
otherElement.className = cName;
```

#### Adding/Removing class

```
// add a class to the element
element.classList.add('cool');

// remove a class from the element
element.classList.remove('cool');
```

#### Getting and Setting the HTML Elements

```
// get the HTML of "element"
var content = element.innerHTML;

// set the HTML of "otherElement"
otherElement.innterHTML = content;
```

#### Children of a Given Element

`elementNodeReference.childNodes`

#### Next Sibling of a Given Element

`node.nextSibling`

#### What is the difference between children and childNodes?

`.children` is a property of an Element. Only Elements have children, and these children are all of type Element.

However `.childNodes` is a property of Node. `.childNodes` can contain any node.

```
var el = document.createElement("div");
el.textContent = "foo"
el.childNodes.length === 1; // TextNode is a node child
el.children.length === 0; // no Element children
```

#### What is Shadow DOM?



