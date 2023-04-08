// how to find document root node
const rootNode= document.getRootNode(); //rootNode contain "document"

// how to find child of document root node(HTML)
// console.log(rootNode.childNodes); //print child of document-->HTML

// how to find child node of HTML 
const htmlRootNode=rootNode.childNodes[0];
// console.log(htmlRootNode.childNodes);  //print child node of HTML --> HEAD,TEXT,BODY

// how to find  HEAD, TEXT, BODY
const headData=htmlRootNode.childNodes[0];
const textData=htmlRootNode.childNodes[1];
const bodyData=htmlRootNode.childNodes[2];
console.log(bodyData);

// const headElementNode=