### General Terms

- <a href="https://github.com/AvraamMavridis/FE-questions-answers/blob/master/loopInvariant.md"> What is `loop invariant` ?</a>

### Questions

1. [What is a closure?](#closure)
2. [Explain Event Delegation](#delegation)
3. [What is the difference between `var` and `let`](#varlet)
4. [Explain the term `Prototypal inheritance`](#protoinh)

## JS

#### <a name="closure">What is a closure?</a>

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

#### <a name="delegation">Explain Event Delegation</a>

DOM event delegation is a mechanism of responding to events via a single common event listener on the parent rather than having listeners on every child, because of event "bubbling".

#### <a name="varlet">What is the difference between `var` and `let`?</a>

- `var` has function scope
- `let` has block scope

Variables declared with `var` get hoisted (at the top of the function)

#### <a name="protoinh">Explain the term `Prototypal inheritance`</a>

In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

<img src="./object-prototype.png" alt="Object Prototype" style="width: 200px;"/>

That [[Prototype]] has a “magical” meaning. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

One of them is to use __proto__,


```js
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
```

Please note that __proto__ is not the same as [[Prototype]]. That’s a getter/setter for it.

#### **Explain how `this` works in JavaScript**

`this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc. One of the properties of this record is the `this` reference.

`this` is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

#### Difference between: `function Person(){}`, `var person = Person()` and `var person = new Person()`?

With `new`:

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

To avoid it we can do `toString.call(obj) === '[object Object]';

### Exercice 1

Given a string of words (x), you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lower case and all inputs will be valid.

```js
function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const words = x.split(' ');
  let l = words.map(word => word.split(''))
  l = l.map(arr => arr.reduce((prev,char) => prev + alphabet.indexOf(char),0))
  let max = Math.max(...l);
  return x.split(' ')[l.indexOf(max)];
}
```


#### Why is using `for…in` with array iteration a bad idea?

`for...in` iterates over the array object, so any property attach to array prototype will be included in the iteration.
e.g.

```js
Array.prototype.something = 'Something';
var a = [1, 2];

for(var k in a){
  console.log(k)
};

// 1
// 2
// something
```

#### What does “use strict” do in JavaScript, and what is the reasoning behind it?

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

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

#### What is specificity in CSS?

Specificity is a mechanism within the CSS cascade that aids conflict resolution. The concept of specificity states that when two or more declarations that apply to the same element, and set the same property, have the same importance and origin, the declaration with the most specific selector will take precedence.


#### What is the difference between `:nth-child` and `:nth-of-type`

The nth-child pseudo-class refers to the "Nth matched child element", meaning if you have a structure as follows:

```html
<div>
    <h1>Hello</h1>

    <p>Paragraph</p>

    <p>Target</p>
</div>
```

Then `p:nth-child(2)` will select the second child which is also a p (namely, the p with "Paragraph").
`p:nth-of-type` will select the second matched p element, (namely, our Target p).


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

#### Describe the difference between `<script>`, `<script async>` and `<script defer>`

1. Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.
2. With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.
3. With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)

<img src="./async_defer.png" alt="Drawing" style="width: 400px;"/>

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

#### What's the difference between an "attribute" and a "property"?

In the specific context of HTML / Javascript the terms refer to the HTML representation of a DOM element. DOM element has attributes (that being the term used in XML for the key/value pairs contained within a tag) but when represented as a JavaScript object those attributes appear as object properties.


#### What is Shadow DOM?




## General Questions

#### What is the difference between Progressive Enhancement and Graceful Degradation?

Progressive Enhancement is a powerful methodology that allows Web developers to concentrate on building the best possible websites while balancing the issues inherent in those websites being accessed by multiple unknown user-agents. Progressive Enhancement (PE) is the principle of starting with a rock-solid foundation and then adding enhancements to it if you know certain visiting user-agents can handle the improved experience.
PE differs from Graceful Degradation (GD) in that GD is the journey from complexity to simplicity, whereas PE is the journey from simplicity to complexity. PE is considered a better methodology than GD because it tends to cover a greater range of potential issues as a baseline.


#### Why is it generally a good idea to position CSS `<link>` between `<head></head>` and JS `<script>` just before `</body>`? Do you know any exceptions?

WE usually put the `<link>` tags in between the `<head>` to prevent Flash of Unstyled Content which gives the user something to look at while the rest of the page is being parsed.

Since Javascript blocks rendering by default, and the DOM and CSSOM construction can be also be delayed, it is usually best to keep scripts at the bottom of the page.

Exceptions are if you grab the scripts asynchronously, or at least defer them to the end of the page.

#### What is progressive rendering?

Progressive rendering is the name given to techniques used to render content for display as quickly as possible.

Examples of such techniques :

- Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.
- Prioritizing visible content (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.


#### Why is `document.write` considered a “bad practice”?

- `document.write` (henceforth DW) does not work in XHTML
- `document.write` executed after the page has finished loading will overwrite the page, or write a new page, or not work
- `document.write` executes where encountered: it cannot inject at a given node point
- `document.write` is effectively writing serialised text which is not the way the DOM works conceptually, and is an easy way to create bugs (.innerHTML has the same problem)
- It serializes the rendering engine to pause until said external script is loaded, which could take much longer than an internal script.

#### What's the difference between feature detection, feature inference, and using the UA string.

Feature detection checks directly a feature for existence, e.g.:

```js
if (window.XMLHttpRequest) {
    new XMLHttpRequest();
}
```

Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:

```js
if (document.getElementsByTagName) {
    element = document.getElementById(id);
}
```

UA-string check reffers to checking the user-agent name for feature detection. It should be avoided.

```js
if (navigator.userAgent.indexOf("MSIE 7") > -1){
    //do something
}
```

#### Describe the difference between `cookies`, `sessionStorage` and `localStorage`.

`sessionStorage` (as the name suggests) is only available for the duration of the browser session (and is deleted when the tab or window is closed) - it does however survive page reloads. If the data you are storing needs to be available on an ongoing basis then `localStorage` is preferable to `sessionStorage`.

`Cookies` stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).

As `cookies` are used for authentication purposes and persistence of user data, all `cookies` valid for a page are sent from the browser to the server for every request to the same domain - this includes the original page request, any subsequent Ajax requests, all images, stylesheets, scripts and fonts. For this reason `cookies` should not be used to store large amounts of information.

`localStorage`, `sessionStorage` and `cookies` are all subject to "same-origin" rules which means browsers should prevent access to the data except from the domain that set the information to start with.

`Cookies` are primarily for server-side reading (can also be read on client-side), `localStorage` and `sessionStorage` can only be read on client-side.

#### What is carbage collection?

This process of clearing from the memory variables (strings, objects, and other kinds of values) when they can’t be reached anymore.

#### What are the consequences of compiling code to WebAssembly?

When you’re compiling C or other languages down to WebAssembly, the tool that you use will add in some helper code to your WebAssembly. For example, it would add code that does the encoding and decoding bytes. This code is called a runtime environment. The runtime environment will help handle some of the stuff that the JS engine does for JS.

#### What are the trade-offs of using a language like javascript that has automatic memory management?

Automatic memory management means that the developer doesn't have to care much about freeing memory on the right time, which means that is less likely a human-error to introduce bugs or security holes. On the other hand, the automatic memory management adds some overhead that can lead to performance issues.

