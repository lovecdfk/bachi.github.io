// ============================================
// TWO YEARS — HEART GARDEN
// FULL EXTERNAL JAVASCRIPT
// ============================================

(function(){
    "use strict";

    // --------------------------------------------
    // 1. SILK HEARTS BACKGROUND
    // --------------------------------------------
    function createSilkHeart() {
        const container = document.getElementById('silkHeartContainer');
        if (!container) return;
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'silk-heart');
        const size = Math.random() * 2.8 + 1.5;
        heart.style.fontSize = size + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.animationDuration = (Math.random() * 12 + 16) + 's';
        const hue = Math.floor(Math.random() * 20) + 330;
        heart.style.color = `hsla(${hue}, 75%, 75%, 0.25)`;
        container.appendChild(heart);
        setTimeout(() => { if (heart.parentNode) heart.remove(); }, 28000);
    }

    // initialize silk hearts
    for (let i = 0; i < 40; i++) setTimeout(createSilkHeart, i * 120);
    setInterval(createSilkHeart, 1300);

    // --------------------------------------------
    // 2. DAYS COUNTER (since two years)
    // --------------------------------------------
    function updateCounter() {
        const daysEl = document.getElementById('daysCounter');
        const hoursEl = document.getElementById('hoursCounter');
        if (!daysEl || !hoursEl) return;
        const now = new Date();
        const twoYearsAgo = new Date(now);
        twoYearsAgo.setFullYear(now.getFullYear() - 2);
        const diff = Math.abs(now - twoYearsAgo);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        daysEl.innerText = days;
        hoursEl.innerText = hours;
    }
    updateCounter();
    setInterval(updateCounter, 60000);

    // --------------------------------------------
    // 3. POEM COLLECTION & PAGE GENERATOR
    // --------------------------------------------
    const poemCollection = [
        { 
            title: "🌷 i wait with all i am 🌷", 
            poem: "the clock has no power here.\nyou are not a memory;\nyou are a presence\ni carry beneath my ribs.\nlike a second heartbeat,\nalways, always.", 
            para: "Two years have not made you fade. They have made you eternal. Every love song, every sunset, every sudden breeze — they all whisper your name. I am still here, still yours, still counting the days until i can finally hold you." 
        },
        { 
            title: "💘 yours only, forever 💘", 
            poem: "i don't just love you.\ni recognize you.\nas if my soul\nknew yours\nbefore time existed.\nas if 'apart' is just a word,\nand 'together' is our only truth.", 
            para: "Distance is an illusion when two people are woven from the same thread. You are not just the one i miss — you are the one i belong to. And i know, deep as the sea, that you feel it too." 
        },
        { 
            title: "✨ always, my always ✨", 
            poem: "you ask if i still wait?\nmy love, i never left.\ni have been here,\nplanting flowers in the silence,\nbuilding a home from your letters,\nlearning to love you more\nwith every absent sunrise.", 
            para: "Always is not a word i use lightly. It is the bridge i walk every day to reach you. Even if we haven't met in two years, i have met you in every dream, and you are more real to me than anything else." 
        },
        { 
            title: "🌸 heart's compass 🌸", 
            poem: "if i could fold the miles\nlike paper cranes,\ni'd fill your room with them.\neach one carrying a kiss,\neach one whispering\n'not long now, not long now.'", 
            para: "I close my eyes and see your smile — the one from your photograph, the one that reaches your eyes. I don't just wait for you. I grow for you. I become someone worthy of the love you give me." 
        },
        { 
            title: "🌙 attached, deeply 🌙", 
            poem: "attached does not mean bound.\nit means rooted —\nlike a tree to the earth,\nlike stars to the night sky.\nyou are my gravity.\ni always return to you.", 
            para: "Every night, i send my love into the dark, hoping it reaches you like a lullaby. We are not apart; we are just in different rooms of the same universe. And one day, the door will open." 
        }
    ];

    function openPoemPage(buttonType) {
        let idx;
        if (buttonType === 'imhere') idx = 0;
        else if (buttonType === 'yours') idx = 1;
        else if (buttonType === 'always') idx = 2;
        else idx = Math.floor(Math.random() * poemCollection.length);
        
        const p = poemCollection[idx % poemCollection.length];
        
        let dedication = '';
        if (buttonType === 'imhere') dedication = 'you clicked “I’m here” — and my whole heart smiled.';
        else if (buttonType === 'yours') dedication = '“Yours only” — my favourite truth.';
        else if (buttonType === 'always') dedication = '“Always” — our infinity.';
        else dedication = 'every click is a love letter.';
        
        const newWin = window.open('', '_blank');
        if (!newWin) { 
            alert('please allow pop-ups — my heart wants to show you a poem ❤️'); 
            return; 
        }
        
        const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>❤️ for you, always ❤️</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Quicksand',sans-serif; }
        body { 
            background: radial-gradient(circle at 50% 30%, #ffdfe8, #ffc1cf); 
            min-height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            padding: 2rem; 
        }
        .poem-chamber {
            max-width: 800px;
            background: rgba(255,245,250,0.8);
            backdrop-filter: blur(20px);
            border-radius: 80px 80px 80px 80px;
            padding: 3rem 2.2rem;
            border: 4px solid white;
            box-shadow: 0 35px 55px rgba(180,50,90,0.2);
            text-align: center;
        }
        .heart-circle { display: flex; justify-content: center; gap: 20px; margin-bottom: 25px; }
        .heart-icon {
            background: #ff7a98;
            width: 80px; height: 80px;
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            transform: rotate(45deg);
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 15px 25px #ff8caa;
        }
        .heart-icon i { transform: rotate(-45deg); font-size: 3rem; color: white; }
        .poem-title { font-size: 2.4rem; color: #a01c44; margin-bottom: 25px; }
        .poem-text {
            background: white;
            padding: 30px;
            border-radius: 60px;
            font-size: 1.7rem;
            line-height: 2.8rem;
            white-space: pre-line;
            color: #541e2e;
            border: 3px dashed #ff6b8b;
            margin-bottom: 20px;
        }
        .dedicate {
            font-size: 1.7rem;
            background: #ffe7ee;
            padding: 18px;
            border-radius: 90px;
            margin: 20px 0;
            color: #7e1e3b;
        }
        .para {
            font-size: 1.4rem;
            line-height: 2.2rem;
            background: rgba(255,240,245,0.7);
            padding: 28px;
            border-radius: 45px;
            color: #3f1525;
        }
        .attach-footer {
            margin-top: 30px;
            font-size: 1.3rem;
            color: #b43c5c;
        }
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
            100% { transform: translateY(-120vh) rotate(25deg); opacity: 0.1; }
        }
    </style>
</head>
<body>
    <div class="poem-chamber">
        <div class="heart-circle">
            <div class="heart-icon"><i class="fas fa-heart"></i></div>
            <div class="heart-icon" style="background:#ff95af;"><i class="fas fa-heart"></i></div>
        </div>
        <div class="poem-title"><i class="fas fa-heart"></i> ${p.title} <i class="fas fa-heart"></i></div>
        <div class="poem-text">${p.poem}</div>
        <div class="dedicate"><i class="fas fa-heart-circle"></i> ${dedication} <i class="fas fa-heart-circle"></i></div>
        <div class="para"><i class="fas fa-quote-left"></i> ${p.para} <i class="fas fa-quote-right"></i></div>
        <div class="attach-footer"><i class="fas fa-heart-circle"></i> attached, never apart — i'm here <i class="fas fa-heart-circle"></i></div>
    </div>
    <script>
        (function(){
            for(let i=0; i<15; i++) {
                setTimeout(() => {
                    const h = document.createElement('i');
                    h.classList.add('fas', 'fa-heart');
                    h.style.position = 'fixed';
                    h.style.left = Math.random() * 100 + '%';
                    h.style.bottom = '-10%';
                    h.style.fontSize = (Math.random() * 2 + 1.2) + 'rem';
                    h.style.color = 'rgba(255,120,160,0.2)';
                    h.style.pointerEvents = 'none';
                    h.style.animation = 'float 20s infinite';
                    document.body.appendChild(h);
                    setTimeout(() => h.remove(), 20000);
                }, i * 200);
            }
        })();
    <\/script>
</body>
</html>`;
        newWin.document.write(html);
        newWin.document.close();
    }

    // attach button events
    const btn1 = document.getElementById('btnImHere');
    const btn2 = document.getElementById('btnYoursOnly');
    const btn3 = document.getElementById('btnAlways');
    if (btn1) btn1.addEventListener('click', function() { openPoemPage('imhere'); });
    if (btn2) btn2.addEventListener('click', function() { openPoemPage('yours'); });
    if (btn3) btn3.addEventListener('click', function() { openPoemPage('always'); });

    // --------------------------------------------
    // 4. HEART MATCHING GAME
    // --------------------------------------------
    const heartSymbols = ['❤️', '🧡', '💖', '💘', '💝', '💗']; // 6 pairs
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let lockBoard = false;
    let timer = 0;
    let timerInterval = null;
    let gameStarted = false;

    const gridEl = document.getElementById('heartMatchGrid');
    const matchCountEl = document.getElementById('matchCount');
    const gameTimerEl = document.getElementById('gameTimer');
    const resetBtn = document.getElementById('resetGameBtn');

    if (gridEl && matchCountEl && gameTimerEl && resetBtn) {
        // initialize game
        function initGame() {
            let deck = [];
            heartSymbols.forEach((sym, idx) => {
                deck.push({ id: idx, symbol: sym, matched: false });
                deck.push({ id: idx, symbol: sym, matched: false });
            });
            // shuffle
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            cards = deck;
            flippedCards = [];
            matchedPairs = 0;
            matchCountEl.innerText = '0';
            lockBoard = false;
            renderGrid();
            stopTimer();
            timer = 0;
            gameTimerEl.innerText = '0';
            gameStarted = false;
        }

        function renderGrid() {
            let html = '';
            cards.forEach((card, index) => {
                if (card.matched) {
                    html += `<div class="heart-card matched" data-index="${index}"><i class="fas fa-heart"></i></div>`;
                } else {
                    const isFlipped = flippedCards.includes(index);
                    html += `<div class="heart-card ${isFlipped ? 'flipped' : ''}" data-index="${index}">${isFlipped ? card.symbol : '<i class="fas fa-heart"></i>'}</div>`;
                }
            });
            gridEl.innerHTML = html;
        }

        function handleCardClick(e) {
            const cardDiv = e.target.closest('.heart-card');
            if (!cardDiv) return;
            if (lockBoard) return;
            const index = parseInt(cardDiv.dataset.index, 10);
            if (isNaN(index)) return;
            if (cards[index].matched) return;
            if (flippedCards.includes(index)) return;
            if (flippedCards.length >= 2) return;

            if (!gameStarted) {
                gameStarted = true;
                startTimer();
            }

            flippedCards.push(index);
            renderGrid();

            if (flippedCards.length === 2) {
                lockBoard = true;
                const idx1 = flippedCards[0];
                const idx2 = flippedCards[1];
                const card1 = cards[idx1];
                const card2 = cards[idx2];

                if (card1.id === card2.id) {
                    card1.matched = true;
                    card2.matched = true;
                    matchedPairs++;
                    matchCountEl.innerText = matchedPairs;
                    flippedCards = [];
                    lockBoard = false;
                    renderGrid();
                    if (matchedPairs === heartSymbols.length) {
                        setTimeout(() => {
                            alert('💗 we did it! every heart found you, just like i found you. 💗');
                        }, 50);
                        stopTimer();
                    }
                } else {
                    setTimeout(() => {
                        flippedCards = [];
                        lockBoard = false;
                        renderGrid();
                    }, 900);
                }
            }
        }

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timer++;
                gameTimerEl.innerText = timer;
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        gridEl.addEventListener('click', handleCardClick);
        resetBtn.addEventListener('click', function() {
            stopTimer();
            initGame();
        });

        // start the game
        initGame();
    }
})();
