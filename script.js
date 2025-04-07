const quizData = [
    {
        question: "Qual das alternativas apresenta um marco típico do desenvolvimento da linguagem aos 2 anos de idade?",
        options: ["Produz frases complexas com sujeito e predicado.", "Utiliza entre 50 a 200 palavras e começa a formar frases de duas palavras.", "Nomeia cores primárias corretamente.", "Utiliza pronomes pessoais com consistência."],
        answer: 2
    },
    {
        question: "Na audiometria tonal limiar, a perda auditiva do tipo condutiva se caracteriza por:",
        options: ["Alterações nas vias centrais auditivas com limiares normais.", "Presença de gap aéreo-ósseo com via óssea normal.", "Perda auditiva simétrica e neurossensorial.", "Limiares auditivos normais com queixa de zumbido."],
        answer: 0
    },
    {
        question: "A respiração oral pode provocar, EXCETO",
        options: ["Mordida aberta anterior.", "Hipotonia dos músculos orofaciais.", "Aumento da pressão intraoral.", "Alterações na postura da língua em repouso."],
        answer: 2
    }
];

const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function generateQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        questionElement.innerHTML = `
            <p>${item.question}</p>
            ${item.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function getQuizResult() {
    let score = 0;

    quizData.forEach((item, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);

        if (userAnswer && parseInt(userAnswer.value) === item.answer) {
            score++;
        }
    });

    resultContainer.textContent = `Você acertou ${score} de ${quizData.length} questões.`;
}

submitBtn.addEventListener('click', getQuizResult);

generateQuiz();
