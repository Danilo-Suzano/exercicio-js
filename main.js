const form = document.getElementById('verecidade')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const num1 = document.getElementById('campoA');
    const num2 = document.getElementById('campoB');

    if(num1.value < num2.value){
        alert('Parabéns o número B é maior que o A ')
    } else{
        alert('O número digitado não atende os parêmetros exigidos')
    }
})

