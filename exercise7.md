### Exercise

Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B

### Solution

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