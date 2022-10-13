const temp = document.createElement('template') as HTMLTemplateElement;
const div = document.createElement('dev');
div.innerHTML = `
<div>Inside template</div>
<script>alert('Thanks!')</script>
`
temp.content.appendChild(div)

document.body.appendChild(document.importNode(temp.content, true));

