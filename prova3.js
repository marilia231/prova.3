document.addEventListener('DOMContentLoaded', () => {
    const cabelos = document.querySelectorAll('.cabelo');
    const contadorElemento = document.getElementById('contador');
    const dente = document.querySelector('.dente');
    let contador = 0;

    // URL para redirecionamento fixo
    const url = 'https://www.youtube.com/watch?v=JR4V2KUVHxI'; // Substitua por seu link desejado

    cabelos.forEach(cabelo => {
        cabelo.addEventListener('click', (event) => {
            console.log('Cabelo clicado:', event.target); // Log do clique no cabelo
            contador++;
            contadorElemento.textContent = contador;
            event.target.remove(); // Remove o fio de cabelo clicado
            
            // Verifica se todos os cabelos foram removidos
            if (document.querySelectorAll('.cabelo').length === 0) {
                console.log('Todos os cabelos removidos. Mostrando o dente.');
                dente.style.display = 'block'; // Mostra o dente
            }
        });
    });

    // Adiciona o evento de clique ao dente
    dente.addEventListener('click', () => {
        console.log('Dente clicado');
        console.log('Redirecionando para:', url);
        window.open(url, '_blank'); // Abre a URL em uma nova guia
    });
});