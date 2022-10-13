const temp = document.createElement('template') as HTMLTemplateElement;
const div = document.createElement('div');
div.innerHTML = `
<div>Inside dynamic template</div>
<script>alert('Inside dynamic template!')</script>
`
temp.content.appendChild(div)

document.body.appendChild(temp);
document.body.appendChild(document.importNode(temp.content, true));
document.body.appendChild(document.importNode((document.getElementById('template1') as HTMLTemplateElement).content, true));

