// Quiz data structure
const quizData = {
    group1: Array.from({ length: 10 }, (_, i) => ({
        id: `g1q${i + 1}`,
        question: `Câu ${i + 1}: Đây là câu hỏi đúng/sai ${i + 1}`,
        type: 'trueFalse'
    })),
    group2: Array.from({ length: 10 }, (_, i) => ({
        id: `g2q${i + 1}`,
        question: `Câu ${i + 11}: Đây là câu hỏi trắc nghiệm ${i + 1}`,
        options: ['A. Đáp án 1', 'B. Đáp án 2', 'C. Đáp án 3', 'D. Đáp án 4'],
        type: 'singleChoice'
    })),
    group3: Array.from({ length: 10 }, (_, i) => ({
        id: `g3q${i + 1}`,
        question: `Câu ${i + 21}: Đây là câu hỏi nhiều đáp án ${i + 1}`,
        options: ['A. Đáp án 1', 'B. Đáp án 2', 'C. Đáp án 3', 'D. Đáp án 4'],
        type: 'multiChoice'
    })),
    group4: Array.from({ length: 10 }, (_, i) => ({
        id: `g4q${i + 1}`,
        question: `Câu ${i + 31}: Đây là câu hỏi tự luận ${i + 1}`,
        type: 'essay'
    }))
};

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    generateQuiz();
});

function generateQuiz() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';

    // Generate Group 1 - True/False questions
    const group1Div = createQuestionGroup('Phần 1: Câu hỏi Đúng/Sai', quizData.group1, generateTrueFalseQuestion);
    quizContent.appendChild(group1Div);

    // Generate Group 2 - Single choice questions
    const group2Div = createQuestionGroup('Phần 2: Câu hỏi Trắc nghiệm', quizData.group2, generateSingleChoiceQuestion);
    quizContent.appendChild(group2Div);

    // Generate Group 3 - Multiple choice questions
    const group3Div = createQuestionGroup('Phần 3: Câu hỏi Nhiều đáp án', quizData.group3, generateMultiChoiceQuestion);
    quizContent.appendChild(group3Div);

    // Generate Group 4 - Essay questions
    const group4Div = createQuestionGroup('Phần 4: Câu hỏi Tự luận', quizData.group4, generateEssayQuestion);
    quizContent.appendChild(group4Div);

    updateProgress(0);
}

function createQuestionGroup(title, questions, generateFunc) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'question-group';
    groupDiv.innerHTML = `<h3>${title}</h3>`;
    questions.forEach(q => {
        groupDiv.appendChild(generateFunc(q));
    });
    return groupDiv;
}

function generateTrueFalseQuestion(q) {
    return createQuestionElement(`
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                <input type="radio" name="${q.id}" value="true" required> Đúng
                <input type="radio" name="${q.id}" value="false" required> Sai
            </div>
        </div>
    `);
}

function generateSingleChoiceQuestion(q) {
    return createQuestionElement(`
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <div>
                        <input type="radio" name="${q.id}" value="${i}" required>
                        <label>${opt}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `);
}

function generateMultiChoiceQuestion(q) {
    return createQuestionElement(`
        <div class="question">
            <p>${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <div>
                        <input type="checkbox" name="${q.id}" value="${i}">
                        <label>${opt}</label>
                    </div>
                `).join('')}
            </div>
        </div>
    `);
}

function generateEssayQuestion(q) {
    return createQuestionElement(`
        <div class="question">
            <p>${q.question}</p>
            <textarea name="${q.id}" rows="4" cols="50"></textarea>
        </div>
    `);
}

function createQuestionElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
}

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    showResults();
});

function showResults() {
    const resultContent = document.getElementById('resultContent');
    const formData = new FormData(document.getElementById('quizForm'));
    let resultHTML = `
        <div class="result-summary">
            <h3><i class="fas fa-check-circle"></i> Kết quả bài làm</h3>
            <div class="results">
    `;
    
    let questionCount = 0;
    for (let [key, value] of formData.entries()) {
        questionCount++;
        resultHTML += `
            <div class="result-item">
                <strong>Câu ${questionCount}:</strong> 
                <span>${value}</span>
            </div>
        `;
    }
    
    resultHTML += `
            </div>
        </div>
    `;
    resultContent.innerHTML = resultHTML;

    // Add animation
    resultContent.style.animation = 'fadeIn 0.5s ease-in';
}

// Add progress bar update function
function updateProgress(progress) {
    const progressBar = document.getElementById('quizProgress');
    progressBar.style.width = `${progress}%`;
}

// Add event listener for quiz progress
document.getElementById('quizForm').addEventListener('change', function(e) {
    const totalQuestions = 40;
    const answered = new FormData(this).entries().length;
    const progress = (answered / totalQuestions) * 100;
    updateProgress(progress);
});
