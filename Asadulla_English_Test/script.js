// ============================================
// Asadulla — English Beginner Test & IELTS Evaluator
// ============================================

// Sound Effects System (Web Audio API)
class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
    }

    playCorrect() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // C6
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        
        osc.start(now);
        osc.stop(now + 0.45);
    }

    playWrong() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);
        
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        
        osc.start(now);
        osc.stop(now + 0.35);
    }

    playTick() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        
        osc.start(now);
        osc.stop(now + 0.05);
    }

    playFanfare() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const now = this.ctx.currentTime + idx * 0.12;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            
            osc.start(now);
            osc.stop(now + 0.35);
        });
    }
}

const sounds = new SoundManager();

// ============================================
// 20 TA MAXSUS BEGINNER & IELTS SAVOLLARI
// ============================================
const ielts20Questions = [
    {
        q: "1. I ___ a beginner English student.",
        topic: "To Be Verb",
        options: ["is", "am", "are", "be"],
        correct: 1,
        explanation: "'I' olmoshi bilan 'am' yordamchi fe'li ishlatiladi (I am = Men ... man)."
    },
    {
        q: "2. Look! She is eating ___ apple.",
        topic: "Articles (A/An)",
        options: ["a", "an", "the", "—"],
        correct: 1,
        explanation: "Unli tovush bilan boshlangan so'zlar oldidan 'an' artikli qo'yiladi (an apple)."
    },
    {
        q: "3. 'Kitob' so'zining inglizcha tarjimasi nima?",
        topic: "Vocabulary",
        options: ["Pen", "Door", "Book", "Desk"],
        correct: 2,
        explanation: "'Book' so'zi o'zbek tiliga 'Kitob' deb tarjima qilinadi."
    },
    {
        q: "4. My brother ___ football every Sunday.",
        topic: "Present Simple",
        options: ["play", "plays", "playing", "played"],
        correct: 1,
        explanation: "Uchinchi shaxs birlikda (He/My brother) fe'lga -s/-es qo'shiladi (plays)."
    },
    {
        q: "5. What time is it? (10:00)",
        topic: "Telling Time",
        options: ["It is ten o'clock.", "It is ten minutes.", "It is ten hour.", "It is ten past."],
        correct: 0,
        explanation: "To'liq soatlar 'It is [son] o'clock' shaklida aytiladi."
    },
    {
        q: "6. Which one is a fruit?",
        topic: "Vocabulary",
        options: ["Carrot", "Banana", "Potato", "Onion"],
        correct: 1,
        explanation: "'Banana' (Banan) — bu meva (fruit). Qolganlari sabzavotlar."
    },
    {
        q: "7. How do you say 'Xayrli tong' in English?",
        topic: "Greetings",
        options: ["Good evening", "Good afternoon", "Good night", "Good morning"],
        correct: 3,
        explanation: "'Good morning' — ertalabki salomlashish (Xayrli tong)."
    },
    {
        q: "8. There are seven ___ in a week.",
        topic: "Nouns & Plurals",
        options: ["day", "days", "dayes", "daies"],
        correct: 1,
        explanation: "Bir haftada 7 kun bor, ko'plikda -s qo'shiladi (seven days)."
    },
    {
        q: "9. Where is the cat? — It is ___ the box.",
        topic: "Prepositions",
        options: ["in", "at", "to", "from"],
        correct: 0,
        explanation: "Biror narsa ichida bo'lsa 'in' predlogi ishlatiladi (in the box = qutining ichida)."
    },
    {
        q: "10. 'Sariq' rang ingliz tilida qanday ataladi?",
        topic: "Colors",
        options: ["Red", "Blue", "Yellow", "Green"],
        correct: 2,
        explanation: "'Yellow' — sariq rang."
    },
    {
        q: "11. ___ you speak English?",
        topic: "Present Simple Question",
        options: ["Are", "Do", "Is", "Have"],
        correct: 1,
        explanation: "'You' olmoshi bilan oddiy hozirgi zamonda 'Do' yordamchi fe'li bilan savol yasaladi."
    },
    {
        q: "12. They ___ not at home yesterday.",
        topic: "Past Simple (Was/Were)",
        options: ["was", "were", "did", "are"],
        correct: 1,
        explanation: "'They' ko'plik olmoshi bilan o'tgan zamonda 'were' ishlatiladi."
    },
    {
        q: "13. This is my sister. ___ name is Malika.",
        topic: "Possessive Pronouns",
        options: ["His", "Her", "My", "Its"],
        correct: 1,
        explanation: "Qiz bola (sister) uchun egalik olmoshi 'Her' (Uning) bo'ladi."
    },
    {
        q: "14. A dog has four ___.",
        topic: "Animals & Body",
        options: ["hands", "wings", "legs", "fingers"],
        correct: 2,
        explanation: "Itning to'rtta oyog'i (legs) bo'ladi."
    },
    {
        q: "15. What is the opposite (qarama-qarshisi) of 'BIG'?",
        topic: "Adjectives",
        options: ["Small", "Fast", "High", "Hot"],
        correct: 0,
        explanation: "'Big' (Katta) so'zining ziddi 'Small' (Kichik)."
    },
    {
        q: "16. We ___ watching a great movie right now.",
        topic: "Present Continuous",
        options: ["is", "am", "are", "be"],
        correct: 2,
        explanation: "'We' olmoshi bilan 'are + V-ing' ishlatiladi (We are watching)."
    },
    {
        q: "17. Choose the correct question:",
        topic: "Question Structure",
        options: ["Where live you?", "Where do you live?", "Where you live?", "Where are you live?"],
        correct: 1,
        explanation: "To'g'ri so'roq gap tuzilishi: 'Where + do + you + live?'"
    },
    {
        q: "18. 'Oila' so'zining inglizcha to'g'ri yozilishi:",
        topic: "Spelling & Vocab",
        options: ["Familly", "Family", "Fameley", "Famly"],
        correct: 1,
        explanation: "To'g'ri imlosi: F-A-M-I-L-Y."
    },
    {
        q: "19. Can you swim? — Yes, I ___.",
        topic: "Modal Verbs",
        options: ["do", "can", "am", "have"],
        correct: 1,
        explanation: "'Can' bilan so'ralgan savolga javobda ham 'can' qaytariladi (Yes, I can)."
    },
    {
        q: "20. How much is this pen? — ___ two dollars.",
        topic: "Shopping & Daily Talk",
        options: ["It is", "They are", "There is", "He is"],
        correct: 0,
        explanation: "Birlikdagi buyum narxini aytishda 'It is [narx]' ishlatiladi."
    }
];

// All Quiz Categories
const quizData = {
    ielts_main: {
        id: 'ielts_main',
        title: '20 ta Test + 30 Sekund (IELTS Baholash)',
        emoji: '🎯',
        desc: 'Asadulla tomonidan tuzilgan 20 ta boshlang\'ich savol. Har bir savolga 30 soniya!',
        timePerQuestion: 30, // 30 seconds per question
        isIELTS: true,
        questions: ielts20Questions
    },
    grammar_basics: {
        id: 'grammar_basics',
        title: 'Grammar Foundation',
        emoji: '📖',
        desc: 'To be, Present Simple, Pronouns va Articles bo\'yicha testlar.',
        timePerQuestion: 30,
        isIELTS: true,
        questions: ielts20Questions.slice(0, 10)
    },
    vocab_daily: {
        id: 'vocab_daily',
        title: 'Daily Vocabulary',
        emoji: '🌟',
        desc: 'Kundalik so\'zlar, ranglar, mevalar va oila a\'zolari.',
        timePerQuestion: 30,
        isIELTS: true,
        questions: ielts20Questions.slice(10, 20)
    }
};

// Application State
let currentCategory = 'ielts_main';
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let questionTimer = null;
let secondsRemaining = 30;
let totalTimeSpent = 0;
let globalTimer = null;
let isAnswerLocked = false;
let studentName = localStorage.getItem('asadulla_studentName') || 'Asadulla';

// DOM Cache
const dom = {
    screens: {
        home: document.getElementById('home-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    },
    studentNameInput: document.getElementById('student-name-input'),
    saveNameBtn: document.getElementById('save-name-btn'),
    totalScoreStat: document.getElementById('total-score'),
    bestBandStat: document.getElementById('best-band'),
    quizzesTakenStat: document.getElementById('quizzes-taken'),
    categoriesGrid: document.getElementById('categories-grid'),
    soundToggle: document.getElementById('sound-toggle'),

    // Quiz elements
    backBtn: document.getElementById('back-btn'),
    quizCategoryName: document.getElementById('quiz-category-name'),
    quizStudentTag: document.getElementById('quiz-student-tag'),
    timeLeft: document.getElementById('time-left'),
    timerBox: document.getElementById('timer-box'),
    timerProgressFill: document.getElementById('timer-progress-fill'),
    currentQNum: document.getElementById('current-q-num'),
    totalQNum: document.getElementById('total-q-num'),
    liveCorrectCount: document.getElementById('live-correct-count'),
    progressBar: document.getElementById('progress-bar'),
    questionLabel: document.getElementById('question-label'),
    questionTopicPill: document.getElementById('question-topic-pill'),
    questionText: document.getElementById('question-text'),
    optionsList: document.getElementById('options-list'),
    feedbackContainer: document.getElementById('feedback-container'),
    skipBtn: document.getElementById('skip-btn'),
    nextBtn: document.getElementById('next-btn'),

    // Results elements
    resultsEmoji: document.getElementById('results-emoji'),
    resultsTitle: document.getElementById('results-title'),
    resultsMessage: document.getElementById('results-message'),
    ieltsBand: document.getElementById('ielts-band'),
    cefrLevel: document.getElementById('cefr-level'),
    bandDescriptor: document.getElementById('band-descriptor'),
    bandComment: document.getElementById('band-comment'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    percentageScore: document.getElementById('percentage-score'),
    timeSpent: document.getElementById('time-spent'),
    viewCertBtn: document.getElementById('view-cert-btn'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn'),
    reviewAnswersBtn: document.getElementById('review-answers-btn'),
    reviewContainer: document.getElementById('review-container'),
    reviewList: document.getElementById('review-list'),

    // Certificate Modal
    certModal: document.getElementById('certificate-modal'),
    certName: document.getElementById('cert-name'),
    certBand: document.getElementById('cert-band'),
    certCefr: document.getElementById('cert-cefr'),
    certAccuracy: document.getElementById('cert-accuracy'),
    certDate: document.getElementById('cert-date'),
    certId: document.getElementById('cert-id')
};

// Global Persistence
let stats = {
    totalScore: parseInt(localStorage.getItem('asadulla_totalScore')) || 0,
    bestBand: parseFloat(localStorage.getItem('asadulla_bestBand')) || 0.0,
    quizzesTaken: parseInt(localStorage.getItem('asadulla_quizzesTaken')) || 0
};

// App Init
function init() {
    dom.studentNameInput.value = studentName;
    updateStatsDisplay();
    renderCategories();
    createParticles();
    bindEvents();
}

function bindEvents() {
    dom.saveNameBtn.onclick = () => {
        const val = dom.studentNameInput.value.trim();
        if (val) {
            studentName = val;
            localStorage.setItem('asadulla_studentName', studentName);
            alert(`O'quvchi ismi muvaffaqiyatli saqlandi: ${studentName}!`);
        }
    };

    dom.soundToggle.onclick = () => {
        sounds.enabled = !sounds.enabled;
        dom.soundToggle.innerText = sounds.enabled ? '🔊' : '🔇';
    };

    dom.backBtn.onclick = () => {
        if (confirm("Rostdan ham testdan chiqmoqchimisiz? Natijangiz saqlanmaydi.")) {
            clearInterval(questionTimer);
            clearInterval(globalTimer);
            switchScreen('home');
        }
    };

    dom.skipBtn.onclick = () => handleAnswer(-1); // -1 means skipped
    dom.nextBtn.onclick = () => nextQuestion();
    dom.retryBtn.onclick = () => startQuiz(currentCategory);
    dom.homeBtn.onclick = () => switchScreen('home');
    dom.viewCertBtn.onclick = () => openCertModal();
    dom.reviewAnswersBtn.onclick = () => toggleReview();
}

function updateStatsDisplay() {
    dom.totalScoreStat.innerText = stats.totalScore;
    dom.bestBandStat.innerText = stats.bestBand > 0 ? stats.bestBand.toFixed(1) : '-.-';
    dom.quizzesTakenStat.innerText = stats.quizzesTaken;
}

function saveStats() {
    localStorage.setItem('asadulla_totalScore', stats.totalScore);
    localStorage.setItem('asadulla_bestBand', stats.bestBand);
    localStorage.setItem('asadulla_quizzesTaken', stats.quizzesTaken);
    updateStatsDisplay();
}

function renderCategories() {
    dom.categoriesGrid.innerHTML = '';
    Object.values(quizData).forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => startQuiz(cat.id);
        
        card.innerHTML = `
            <span class="emoji">${cat.emoji}</span>
            <h3 class="card-title">${cat.title}</h3>
            <p class="card-desc">${cat.desc}</p>
            <div class="card-meta">
                <span class="question-count">${cat.questions.length} ta savol</span>
                <span class="question-count" style="background: rgba(243, 156, 18, 0.15); color: #f39c12;">⏱️ 30s</span>
            </div>
        `;
        dom.categoriesGrid.appendChild(card);
    });
}

function switchScreen(screenName) {
    Object.values(dom.screens).forEach(s => s.classList.add('hidden'));
    dom.screens[screenName].classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.startFeaturedIelts = function() {
    startQuiz('ielts_main');
};

// ============================================
// QUIZ ENGINE
// ============================================
function startQuiz(catId) {
    currentCategory = catId;
    const cat = quizData[catId];
    currentQuestionIndex = 0;
    score = 0;
    totalTimeSpent = 0;
    userAnswers = [];
    isAnswerLocked = false;

    // Set UI labels
    dom.quizCategoryName.innerText = cat.title;
    dom.quizStudentTag.innerText = `O'quvchi: ${studentName}`;
    dom.totalQNum.innerText = cat.questions.length;
    dom.liveCorrectCount.innerText = '0';
    dom.reviewContainer.classList.add('hidden');

    switchScreen('quiz');
    loadQuestion();

    // Start total time tracker
    clearInterval(globalTimer);
    globalTimer = setInterval(() => {
        totalTimeSpent++;
    }, 1000);
}

function loadQuestion() {
    isAnswerLocked = false;
    const cat = quizData[currentCategory];
    const q = cat.questions[currentQuestionIndex];
    const totalQ = cat.questions.length;

    // Update Progress UI
    dom.currentQNum.innerText = currentQuestionIndex + 1;
    dom.questionLabel.innerText = `Savol #${currentQuestionIndex + 1}`;
    dom.questionTopicPill.innerText = q.topic || 'General English';
    
    const progressPct = ((currentQuestionIndex) / totalQ) * 100;
    dom.progressBar.style.width = `${progressPct}%`;

    // Render Question & Options
    dom.questionText.innerText = q.q;
    dom.optionsList.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${optText}</span>
        `;
        btn.onclick = () => handleAnswer(idx);
        dom.optionsList.appendChild(btn);
    });

    // Reset feedback & controls
    dom.feedbackContainer.classList.add('hidden');
    dom.feedbackContainer.className = 'feedback-box hidden';
    dom.nextBtn.classList.add('hidden');
    dom.skipBtn.classList.remove('hidden');

    // Start 30-Second Countdown for this question
    startQuestionTimer(30);
}

function startQuestionTimer(durationSeconds) {
    clearInterval(questionTimer);
    secondsRemaining = durationSeconds;
    
    dom.timeLeft.innerText = `${secondsRemaining}s`;
    dom.timerBox.className = 'timer-box';
    dom.timerProgressFill.className = 'timer-progress-fill';
    dom.timerProgressFill.style.width = '100%';

    questionTimer = setInterval(() => {
        secondsRemaining--;
        dom.timeLeft.innerText = `${secondsRemaining}s`;
        
        const pct = (secondsRemaining / durationSeconds) * 100;
        dom.timerProgressFill.style.width = `${Math.max(0, pct)}%`;

        if (secondsRemaining <= 10) {
            dom.timerBox.className = 'timer-box warning';
            dom.timerProgressFill.className = 'timer-progress-fill danger';
            sounds.playTick();
        }

        if (secondsRemaining <= 5) {
            dom.timerBox.className = 'timer-box danger';
        }

        if (secondsRemaining <= 0) {
            clearInterval(questionTimer);
            handleAnswer(-1, true); // Time expired
        }
    }, 1000);
}

function handleAnswer(selectedIndex, isTimeExpired = false) {
    if (isAnswerLocked) return;
    isAnswerLocked = true;
    clearInterval(questionTimer);

    const cat = quizData[currentCategory];
    const q = cat.questions[currentQuestionIndex];
    const options = dom.optionsList.children;
    const isCorrect = (selectedIndex === q.correct);

    // Save user answer history
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        question: q.q,
        topic: q.topic,
        options: q.options,
        userIndex: selectedIndex,
        correctIndex: q.correct,
        isCorrect: isCorrect,
        explanation: q.explanation,
        timeExpired: isTimeExpired
    });

    // Visual styles for buttons
    Array.from(options).forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === q.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('wrong');
        }
    });

    // Score & Sound
    if (isCorrect) {
        score++;
        dom.liveCorrectCount.innerText = score;
        sounds.playCorrect();
    } else {
        sounds.playWrong();
    }

    // Feedback Container
    dom.feedbackContainer.classList.remove('hidden');
    if (isTimeExpired) {
        dom.feedbackContainer.classList.add('wrong');
        dom.feedbackContainer.innerHTML = `
            <span class="feedback-icon">⏰</span>
            <div><strong>Vaqt tugadi!</strong> To'g'ri javob: <strong>${q.options[q.correct]}</strong><br>${q.explanation}</div>
        `;
    } else if (isCorrect) {
        dom.feedbackContainer.classList.add('correct');
        dom.feedbackContainer.innerHTML = `
            <span class="feedback-icon">🎉</span>
            <div><strong>Barakalla, to'g'ri!</strong><br>${q.explanation}</div>
        `;
    } else if (selectedIndex === -1) {
        dom.feedbackContainer.classList.add('wrong');
        dom.feedbackContainer.innerHTML = `
            <span class="feedback-icon">↷</span>
            <div><strong>O'tkazib yuborildi.</strong> To'g'ri javob: <strong>${q.options[q.correct]}</strong><br>${q.explanation}</div>
        `;
    } else {
        dom.feedbackContainer.classList.add('wrong');
        dom.feedbackContainer.innerHTML = `
            <span class="feedback-icon">❌</span>
            <div><strong>Noto'g'ri.</strong> To'g'ri javob: <strong>${q.options[q.correct]}</strong><br>${q.explanation}</div>
        `;
    }

    // Prepare Next button
    dom.skipBtn.classList.add('hidden');
    dom.nextBtn.classList.remove('hidden');

    if (currentQuestionIndex === cat.questions.length - 1) {
        dom.nextBtn.innerText = "🏆 IELTS Natijasini Ko'rish ➔";
    } else {
        dom.nextBtn.innerText = "Keyingi Savol ➔";
    }
}

function nextQuestion() {
    const cat = quizData[currentCategory];
    if (currentQuestionIndex < cat.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

// ============================================
// IELTS CALCULATION & EVALUATION
// ============================================
function calculateIELTS(correctCount, totalCount) {
    const ratio = correctCount / totalCount;
    let band = 1.0;
    let cefr = 'A1';
    let descriptor = 'Non User';
    let comment = '';

    if (ratio >= 0.95) {
        band = 9.0;
        cefr = 'C2';
        descriptor = 'Expert User';
        comment = 'Mukammal natija! Siz boshlang\'ich darajadan to\'liq o\'tgansiz va ingliz tilini a\'lo darajada bilasiz.';
    } else if (ratio >= 0.85) {
        band = 8.0;
        cefr = 'C1';
        descriptor = 'Very Good User';
        comment = 'Juda kuchli bilim! Murakkab grammatika va so\'z boyligingiz a\'lo darajada.';
    } else if (ratio >= 0.75) {
        band = 7.5;
        cefr = 'B2';
        descriptor = 'Good User';
        comment = 'Ajoyib! O\'rta va yuqori darajadagi mavzularni bemalol tushunyapsiz.';
    } else if (ratio >= 0.65) {
        band = 6.5;
        cefr = 'B2';
        descriptor = 'Competent User';
        comment = 'Yaxshi natija! Mustaqil muloqot qila olasiz, asosiy qoidalarni yaxshi o\'zlashtirgansiz.';
    } else if (ratio >= 0.50) {
        band = 5.5;
        cefr = 'B1';
        descriptor = 'Modest User';
        comment = 'Qoniqarli! Boshlang\'ich qoidalar ma\'lum, yana biroz mashq qilsangiz natijangiz yanada oshadi.';
    } else if (ratio >= 0.35) {
        band = 4.5;
        cefr = 'A2';
        descriptor = 'Limited User';
        comment = 'Boshlang\'ich (Elementary) darajadasiz. So\'z boyligini va grammatikani mustahkamlash tavsiya etiladi.';
    } else if (ratio >= 0.20) {
        band = 3.5;
        cefr = 'A1';
        descriptor = 'Extremely Limited User';
        comment = 'Beginner darajasidagi asosiy tushunchalar endi shakllanmoqda. Mashqlarni davom ettiring!';
    } else {
        band = 2.0;
        cefr = 'A1';
        descriptor = 'Intermittent User';
        comment = 'Ingliz tilini endi boshlayapsiz. Sabr bilan har kuni 15 daqiqa o\'rganishni tavsiya qilamiz!';
    }

    return { band, cefr, descriptor, comment };
}

// ============================================
// RESULTS & CERTIFICATE DISPLAY
// ============================================
function endQuiz() {
    clearInterval(questionTimer);
    clearInterval(globalTimer);

    const cat = quizData[currentCategory];
    const totalQ = cat.questions.length;
    const accuracy = Math.round((score / totalQ) * 100);
    const wrongAnswers = totalQ - score;

    const evaluation = calculateIELTS(score, totalQ);

    // Save statistics
    stats.totalScore += (score * 10);
    stats.quizzesTaken += 1;
    if (evaluation.band > stats.bestBand) {
        stats.bestBand = evaluation.band;
    }
    saveStats();

    // Populate Results Screen
    dom.resultsTitle.innerText = `Tabriklaymiz, ${studentName}!`;
    dom.resultsMessage.innerText = `Siz ${totalQ} ta savolli testni yakunladingiz.`;
    dom.ieltsBand.innerText = evaluation.band.toFixed(1);
    dom.cefrLevel.innerText = `CEFR: ${evaluation.cefr}`;
    dom.bandDescriptor.innerText = evaluation.descriptor;
    dom.bandComment.innerText = evaluation.comment;

    dom.correctCount.innerText = score;
    dom.wrongCount.innerText = wrongAnswers;
    dom.percentageScore.innerText = `${accuracy}%`;
    dom.timeSpent.innerText = `${totalTimeSpent}s`;

    // Populate Certificate Modal Data
    dom.certName.innerText = studentName.toUpperCase();
    dom.certBand.innerText = evaluation.band.toFixed(1);
    dom.certCefr.innerText = evaluation.cefr;
    dom.certAccuracy.innerText = `${score} / ${totalQ}`;
    
    const today = new Date();
    dom.certDate.innerText = today.toLocaleDateString('uz-UZ');
    dom.certId.innerText = `ASD-${Math.floor(10000 + Math.random() * 90000)}`;

    // Confetti and fanfare if good score
    if (evaluation.band >= 5.5) {
        sounds.playFanfare();
        createConfetti();
    }

    switchScreen('results');
    renderReviewList();
}

function renderReviewList() {
    dom.reviewList.innerHTML = '';
    userAnswers.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = `review-item ${item.isCorrect ? 'correct-item' : 'wrong-item'}`;
        
        const letters = ['A', 'B', 'C', 'D'];
        const userChoiceText = item.userIndex >= 0 ? `${letters[item.userIndex]}) ${item.options[item.userIndex]}` : 'O\'tkazib yuborilgan / Vaqt tugadi';
        const correctChoiceText = `${letters[item.correctIndex]}) ${item.options[item.correctIndex]}`;

        div.innerHTML = `
            <div class="review-item-header">
                <span>Savol #${idx + 1} (${item.topic || 'General'})</span>
                <span style="color: ${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">
                    ${item.isCorrect ? '✅ To\'g\'ri' : '❌ Xato'}
                </span>
            </div>
            <div class="review-q-text">${item.question}</div>
            <div class="review-answers">
                <div>Sizning javobingiz: <strong>${userChoiceText}</strong></div>
                <div>To'g'ri javob: <strong style="color: var(--success);">${correctChoiceText}</strong></div>
            </div>
            <div class="review-exp">💡 <strong>Izoh:</strong> ${item.explanation}</div>
        `;
        dom.reviewList.appendChild(div);
    });
}

function toggleReview() {
    dom.reviewContainer.classList.toggle('hidden');
    if (!dom.reviewContainer.classList.contains('hidden')) {
        dom.reviewContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Certificate Modal Controls
window.openCertModal = function() {
    dom.certModal.classList.remove('hidden');
};

window.closeCertModal = function() {
    dom.certModal.classList.add('hidden');
};

// Background Particle Effects
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.animationDuration = `${Math.random() * 8 + 6}s`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(p);
    }
}

// Confetti Celebration
function createConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#6c5ce7', '#a29bfe', '#00cec9', '#00b894', '#fdcb6e', '#e17055', '#f1c40f'];
    
    for (let i = 0; i < 110; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 12 + 6}px`;
        confetti.style.height = `${Math.random() * 6 + 6}px`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.animationDuration = `${Math.random() * 2.5 + 2}s`;
        container.appendChild(confetti);
    }
    
    setTimeout(() => container.remove(), 6000);
}

// Launch
init();
