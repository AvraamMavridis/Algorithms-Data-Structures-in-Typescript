## Exersice

Create nested object from multiple string paths


```js
/root/library/Folder 1
/root/library/Folder 2
/root/library/Folder 1/Document.docx
/root/library/Folder 1/Document 2.docx
/root/library/Folder 2/Document 3.docx
/root/library/Document 4.docx
/path/something/Document 4.docx
```

## Solution


```js
var glob={name:undefined,children:[]};
var t={lookup:glob};
["/root/library/Folder 1","/root/library/Folder 2","/root/library/Folder 1/Document.docx","/root/library/Folder 1/Document 2.docx","/root/library/Folder 2/Document 3.docx","/path/library/Document 4.docx"]
.forEach(function(path){

  path.split("/").slice(1).reduce(function(dir,sub){
     if(!dir[sub]){
      let subObj={name:sub,children:[]};
      dir.lookup.children.push(subObj);
      return dir[sub]={lookup:subObj};
    }
    return dir[sub];
  },t);

});
```