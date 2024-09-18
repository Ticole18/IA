let scores = {
    'fogo': 0,
    'água': 0,
    'força': 0,
    'velocidade': 0,
    'inteligente': 0,
    'aventureiro': 0,
    'forte': 0,
    'rápido': 0
};

const questions = [
    {
        question: "1. Qual é a sua habilidade favorita?",
        options: [
            { text: "Controlar o Fogo", value: 'fogo' },
            { text: "Controlar a Água", value: 'água' },
            { text: "Super Força", value: 'força' },
            { text: "Super Velocidade", value: 'velocidade' }
        ]
    },
    {
        question: "2. Qual lugar você prefere explorar?",
        options: [
            { text: "Espaço", value: 'aventureiro' },
            { text: "Oceano", value: 'água' },
            { text: "Floresta", value: 'forte' },
            { text: "Cidade", value: 'inteligente' }
        ]
    },
    {
        question: "3. Como você se descreveria?",
        options: [
            { text: "Aventureiro", value: 'aventureiro' },
            { text: "Inteligente", value: 'inteligente' },
            { text: "Forte", value: 'força' },
            { text: "Rápido", value: 'velocidade' }
        ]
    },
    {
        question: "4. O que você faz no seu tempo livre?",
        options: [
            { text: "Explorar a natureza", value: 'aventureiro' },
            { text: "Ler livros", value: 'inteligente' },
            { text: "Malhar", value: 'força' },
            { text: "Correr", value: 'velocidade' }
        ]
    },
    {
        question: "5. Qual é seu tipo de filme favorito?",
        options: [
            { text: "Ação", value: 'fogo' },
            { text: "Aventura", value: 'aventureiro' },
            { text: "Ficção Científica", value: 'inteligente' },
            { text: "Esporte", value: 'velocidade' }
        ]
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = '';
    
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => answer(option.value);
        questionElement.appendChild(button);
    });

    quizDiv.appendChild(questionElement);
}

function answer(choice) {
    scores[choice]++;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('resultBtn').style.display = 'block';
    }
}

function showResult() {
    let maxScore = Math.max(...Object.values(scores));
    let result;

    if (scores['fogo'] === maxScore) {
        result = "Você é o Combustível!";
    } else if (scores['água'] === maxScore) {
        result = "Você é o Aquático!";
    } else if (scores['força'] === maxScore) {
        result = "Você é o Cabeça de Diamante!";
    } else if (scores['velocidade'] === maxScore) {
        result = "Você é o XLR8!";
    } else if (scores['aventureiro'] === maxScore) {
        result = "Você é o Vines Selvagens!";
    } else if (scores['inteligente'] === maxScore) {
        result = "Você é o Matéria Cinza!";
    } else {
        result = "Você é um alienígena desconhecido!";
    }

    document.getElementById('result').innerText = result;
}

window.onload = loadQuestion;
