const quizData = [
    {
        question 1: "Qual das alternativas apresenta um marco típico do desenvolvimento da linguagem aos 2 anos de idade?",
        options: ["A) Produz frases complexas com sujeito e predicado", "B) Utiliza entre 50 a 200 palavras e começa a formar frases de duas palavras", "C) Nomeia cores primárias corretamente", "D) Utiliza pronomes pessoais com consistência"],
        answer: 2
    },
    {
        question 2: "Na audiometria tonal limiar, a perda auditiva do tipo condutiva se caracteriza por:",
        options: ["A) Alterações nas vias centrais auditivas com limiares normais", "B) Presença de gap aéreo-ósseo com via óssea normal", "C) Perda auditiva simétrica e neurossensorial", "D) Limiares auditivos normais com queixa de zumbido"],
        answer: 0
    },
    {
        question 3: "A respiração oral pode provocar, EXCETO",
        options: ["A) Mordida aberta anterior", "B) Hipotonia dos músculos orofaciais", "C) Aumento da pressão intraoral", "D) Alterações na postura da língua em repouso"],
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
