const projetos = [
    {
        nome: "Modelo de Plataforma EAD para Robótica",
        descricao: "Este projeto consiste em uma plataforma de cursos EAD (Ensino a Distância), desenvolvida para permitir que os alunos façam login e acessem uma área onde podem visualizar e se inscrever em cursos. A plataforma conta com uma interface amigável, permitindo a pesquisa de cursos, além de um menu lateral com opções para gerenciar os cursos inscritos, trilha de conhecimentos, material de apoio, certificados e configurações de conta.",
        githubLink: "https://github.com/tiago4lex/Remote-Education-Platform",
        demoLink: "https://remote-education-platform.vercel.app/",
        imagem: "PROJETOS/METABEE.png",
        pdfLink: null
    },
    {
        nome: "PYTHON Quiz Game",
        descricao: "O Quiz Game é um jogo interativo de perguntas e respostas desenvolvido com Python e a biblioteca Pygame. O objetivo do jogo é desafiar os jogadores a testarem seus conhecimentos em diferentes categorias, enquanto competem por pontos e tentam completar todas as fases do jogo.",
        githubLink: "https://github.com/tiago4lex/python-quiz-game",
        demoLink: null,
        imagem: null,
        pdfLink: "PROJETOS/ProjetoQuiz.pdf"
    },
    {
        nome: "STORE PAGE PROJECT",
        descricao: "Este projeto visa a criação de uma loja de roupas online, oferecendo uma experiência de compra inovadora e intuitiva para os usuários. A plataforma foi desenvolvida com foco em um design moderno e funcional, utilizando tecnologias web como HTML, CSS e JavaScript para garantir uma navegação fluida e agradável.",
        githubLink: "https://github.com/tiago4lex/STORE-PAGE-PROJECT",
        demoLink: "https://store-page-project.vercel.app/",
        imagem: "PROJETOS/STORELOGO.png",
        pdfLink: null
    }
];

// Função para adicionar os projetos ao HTML
function carregarProjetos() {
    const projetosContainer = document.querySelector(".projetos-container");

    projetos.forEach((projeto) => {
        const pdfLinkHTML = projeto.pdfLink
            ? `<a href="${projeto.pdfLink}" target="_blank" class="pdf-link"><i class="fas fa-file-pdf"></i> Ler PDF</a>`
            : "";

        const imagemHTML = projeto.imagem
            ? `<img src="${projeto.imagem}" alt="Imagem do ${projeto.nome}">`
            : "";

        const projetoHTML = `
            <div class="projeto">
                <div class="projeto-info">
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <div class="projeto-links">
                        <a href="${projeto.githubLink}" target="_blank" class="github-link"><i class="fab fa-github"></i> GitHub</a>
                        <a href="${projeto.demoLink}" target="_blank" class="demo-link"><i class="fas fa-external-link-alt"></i> Visualizar</a>
                        ${pdfLinkHTML}
                    </div>
                </div>
                <div class="projeto-imagem">
                    ${imagemHTML}
                </div>
            </div>
        `;

        console.log(projetoHTML); // Debugging line

        // Inserindo o projeto no container
        projetosContainer.insertAdjacentHTML("beforeend", projetoHTML);
    });
}

// Carregar os projetos ao carregar a página
window.onload = carregarProjetos;
