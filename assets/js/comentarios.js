document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    const inputName = document.getElementById('inputName');
    const inputText = document.getElementById('inputText');
    const commentPost = document.getElementById('commentPost');

    if (form && inputName && inputText && commentPost) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
           
            if (inputName.value && inputText.value) {
                
                const p = document.createElement('p');
                p.textContent = `${inputName.value}: ${inputText.value}`;

                commentPost.appendChild(p);

                inputName.value = '';
                inputText.value = '';
            } else {
                alert("Por favor, preencha todos os campos!");
            }
        });
    } else {
        console.error("Um ou mais elementos não foram encontrados no DOM.");
    }
});