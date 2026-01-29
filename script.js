// --- 設定 ---
const CORRECT_PASSWORD = "nata777"; // ←ここを好きなパスワードに変えてください
let targetValue = 1000; // 目標値

const updateBtn = document.getElementById('update-btn');
const msgDisplay = document.getElementById('msg');

updateBtn.addEventListener('click', () => {
    const inputVal = document.getElementById('input-current').value;
    const inputPass = document.getElementById('admin-password').value;

    // パスワードチェック
    if (inputPass !== CORRECT_PASSWORD) {
        msgDisplay.innerText = "❌ パスワードが違います";
        msgDisplay.style.color = "#ff4444";
        return;
    }

    if (inputVal === "") {
        msgDisplay.innerText = "⚠️ 数値を入力してください";
        return;
    }

    // 数値の反映
    updateDisplay(inputVal);
    
    msgDisplay.innerText = "✅ データを更新しました！";
    msgDisplay.style.color = "#00ffaa";
    
    // パスワード欄を空にする
    document.getElementById('admin-password').value = "";
});

function updateDisplay(current) {
    const currentNum = parseFloat(current);
    let percent = (currentNum / targetValue) * 100;
    if (percent > 100) percent = 100;

    document.getElementById('current-val').innerText = currentNum.toLocaleString();
    document.getElementById('percent-val').innerText = Math.floor(percent) + "%";
    document.getElementById('progress-bar').style.width = percent + "%";
}

// 初期表示（最初は0にするか、localStorageから読み込むなどの処理が可能）
updateDisplay(0);
