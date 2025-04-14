document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired"); // デバッグ用ログ

    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    if (!loadingScreen) {
        console.error("Error: #loading-screen element not found");
        return;
    }

    if (!mainContent) {
        console.error("Error: #main-content element not found");
        return;
    }

    // ローディング画面を数秒後に非表示にして、メイン画面を表示
    setTimeout(() => {
        console.log("Hiding loading screen and showing main content"); // デバッグ用ログ
        loadingScreen.classList.add("fade-out"); // フェードアウトを適用
        setTimeout(() => {
            loadingScreen.classList.add("hidden"); // フェードアウト後に非表示
            mainContent.classList.remove("hidden"); // main-contentを表示
        }, 500); // フェードアウトの時間に合わせる
    }, 2500); // 必要に応じて時間を調整
});

