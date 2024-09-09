document.addEventListener('DOMContentLoaded', () => {
    const formationSection = document.getElementById('formacao');
    const certificates = [
        { title: 'Introdução à Gestão de Projetos', imageUrl: 'Introdução à Gestão de Projetos.png' },
        { title: 'Criando um Projeto com Interface Gráfica Utilizando a Linguagem Python', imageUrl: 'Criando um Projeto com Interface Gráfica Utilizando a Linguagem Python.png' },
        { title: 'INTRODUÇÃO À PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)', imageUrl: 'INTRODUÇÃO À PROGRAMAÇÃO ORIENTADA A OBJETOS (POO).png' },
        { title: 'LINGUAGEM DE PROGRAMAÇÃO PYTHON - BÁSICO', imageUrl: 'LINGUAGEM DE PROGRAMAÇÃO PYTHON - BÁSICO.png' },
        { title: 'Microsoft Excel 2016 - Intermediário', imageUrl: 'Microsoft Excel 2016 - Intermediário.png' },
        { title: 'Fundamentos de Lógica de Programação', imageUrl: 'Fundamentos de Lógica de Programação.png' },
        { title: 'HTML e CSS na Prática', imageUrl: 'HTML e CSS na Prática.png' },
        { title: 'HTML - Avançado', imageUrl: 'HTML - Avançado.png' },
        // Adicione mais certificados aqui
    ];

    const certificateContainer = document.createElement('div');
    certificateContainer.classList.add('certificate-container');

    certificates.forEach(cert => {
        const certificateDiv = document.createElement('div');
        certificateDiv.classList.add('certificate');

        const img = document.createElement('img');
        img.src = cert.imageUrl;
        img.alt = cert.title;

        const title = document.createElement('p');
        title.textContent = cert.title;

        certificateDiv.appendChild(img);
        certificateDiv.appendChild(title);
        certificateContainer.appendChild(certificateDiv);

        // Adiciona um listener de clique para abrir o modal
        img.addEventListener('click', () => {
            openModal(cert.imageUrl);
        });
    });

    formationSection.appendChild(certificateContainer);

    const modal = document.getElementById('myModal');
    const modalImg = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close');

    function openModal(imageUrl) {
        modalImg.src = imageUrl;
        modal.style.display = 'flex';
    }

    closeButton.addEventListener('click', () => {
        modalImg.classList.add('fade-out');
        setTimeout(() => {
            modal.style.display = 'none';
            modalImg.classList.remove('fade-out'); // Remove a classe após a animação
        }, 1000); // Tempo para permitir a animação de saída
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalImg.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
                modalImg.classList.remove('fade-out'); // Remove a classe após a animação
            }, 1000); // Tempo para permitir a animação de saída
        }
    });
});