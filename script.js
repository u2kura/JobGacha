// FF14のジョブ定義
const jobs = {
    tanks: [
        'ナイト',
        '戦士',
        '暗黒騎士',
        'ガンブレイカー'
    ],
    dps: [
        // 近接DPS
        'モンク',
        '竜騎士',
        '忍者',
        '侍',
        'リーパー',
        'ヴァイパー',
        // 遠隔物理DPS
        '吟遊詩人',
        '機工士',
        '踊り子',
        // キャスター
        '黒魔道士',
        '赤魔道士',
        '召喚士',
        'ピクトマンサー'
    ],
    healers: [
        '白魔道士',
        '学者',
        '占星術師',
        '賢者'
    ]
};

// DOM要素の取得
const randomizeBtn = document.getElementById('randomizeBtn');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('results');

// プレイヤー名入力フィールド
const playerInputs = [
    document.getElementById('player1'),
    document.getElementById('player2'),
    document.getElementById('player3'),
    document.getElementById('player4')
];

// 結果表示要素
const tankResult = document.getElementById('tank-result');
const dps1Result = document.getElementById('dps1-result');
const dps2Result = document.getElementById('dps2-result');
const healerResult = document.getElementById('healer-result');

// ランダムな要素を取得する関数
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 配列をシャッフルする関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 入力検証関数
function validateInputs() {
    const playerNames = playerInputs.map(input => input.value.trim());
    
    // 空の入力をチェック
    for (let i = 0; i < playerNames.length; i++) {
        if (playerNames[i] === '') {
            alert(`プレイヤー${i + 1}の名前を入力してください。`);
            playerInputs[i].focus();
            return false;
        }
    }
    
    // 重複する名前をチェック
    const uniqueNames = new Set(playerNames);
    if (uniqueNames.size !== playerNames.length) {
        alert('重複するプレイヤー名があります。異なる名前を入力してください。');
        return false;
    }
    
    return true;
}

// 結果を表示する関数
function displayResult(resultElement, playerName, jobName) {
    const playerNameSpan = resultElement.querySelector('.player-name');
    const jobNameSpan = resultElement.querySelector('.job-name');
    
    playerNameSpan.textContent = playerName;
    jobNameSpan.textContent = jobName;
}

// ジョブ割り当て実行関数
function randomizeJobs() {
    if (!validateInputs()) {
        return;
    }
    
    // プレイヤー名を取得
    const playerNames = playerInputs.map(input => input.value.trim());
    
    // プレイヤーをシャッフル
    const shuffledPlayers = shuffleArray(playerNames);
    
    // ジョブをランダムに選択
    const selectedTank = getRandomElement(jobs.tanks);
    const selectedHealer = getRandomElement(jobs.healers);
    
    // DPSは重複しないように2つ選択
    const shuffledDPS = shuffleArray(jobs.dps);
    const selectedDPS1 = shuffledDPS[0];
    const selectedDPS2 = shuffledDPS[1];
    
    // 結果を表示
    displayResult(tankResult, shuffledPlayers[0], selectedTank);
    displayResult(dps1Result, shuffledPlayers[1], selectedDPS1);
    displayResult(dps2Result, shuffledPlayers[2], selectedDPS2);
    displayResult(healerResult, shuffledPlayers[3], selectedHealer);
    
    // 結果セクションを表示
    resultsSection.style.display = 'block';
    
    // 結果セクションにスクロール
    resultsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// リセット関数（名前は保持したまま結果を非表示）
function resetResults() {
    resultsSection.style.display = 'none';
    
    // 入力フィールドの最初にフォーカス
    playerInputs[0].focus();
}

// イベントリスナーの設定
randomizeBtn.addEventListener('click', randomizeJobs);
resetBtn.addEventListener('click', resetResults);

// Enterキーでジョブ割り当て実行
playerInputs.forEach((input, index) => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (index < playerInputs.length - 1) {
                // 次の入力フィールドにフォーカス
                playerInputs[index + 1].focus();
            } else {
                // 最後の入力フィールドの場合、ジョブ割り当て実行
                randomizeJobs();
            }
        }
    });
});

// 初期フォーカス設定
document.addEventListener('DOMContentLoaded', () => {
    playerInputs[0].focus();
});