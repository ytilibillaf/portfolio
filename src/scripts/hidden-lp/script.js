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

    // ランダムな星を生成する関数
    function generateStars() {
        const starContainer = document.createElement("div");
        starContainer.classList.add("star-container");
        document.body.appendChild(starContainer);

        const starCount = 300; // 星の数
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`; // ランダムな縦位置
            star.style.left = `${Math.random() * 100}vw`; // ランダムな横位置
            star.style.width = `${Math.random() * 2 + 1}px`; // ランダムなサイズ
            star.style.animationDelay = `${Math.random() * 5}s`; // ランダムなアニメーション遅延
            starContainer.appendChild(star);
        }
    }

    generateStars();
});