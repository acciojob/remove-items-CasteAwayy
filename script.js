//your JS code here. If required.
const button = document.querySelector('input[type=button]');
const select = document.querySelector('#colorSelect');

button.addEventListener('click' , ()=>{

    var arr=  select.options;
    var target = select.value;
    for(let i of arr)  if(i.value == target){i.remove();}
});