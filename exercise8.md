### Exercise

Implement `debounce`

### Solution

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