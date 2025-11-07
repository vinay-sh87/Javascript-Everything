const container = document.querySelector('.container');
const output = document.getElementById('output');

container.addEventListener('click', (event)=>{
    output.innerHTML = '';
    if(event.target.closest('.btns')) {
        output.textContent = `You clicked on ${event.target.textContent}`;
        console.log(event.target);
    }else{
        output.textContent = `You clicked inside the container`;
    }
});
