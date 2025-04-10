const translations = {
    en: {
        about: "About",
        works: "Works",
        contact: "Contact",
        "about-title": "About Me",
        "about-text": "Welcome to my portfolio! I am a passionate developer...",
        "works-title": "My Works",
        "works-text": "Here are some of my recent projects...",
        "contact-title": "Contact Me",
        "contact-text": "Feel free to reach out via email or social media!"
    },
    ja: {
        about: "私について",
        works: "作品",
        contact: "連絡先",
        "about-title": "私について",
        "about-text": "私のポートフォリオへようこそ！私は情熱的な開発者です...",
        "works-title": "作品",
        "works-text": "こちらは私の最近のプロジェクトです...",
        "contact-title": "連絡先",
        "contact-text": "メールやSNSでお気軽にご連絡ください！"
    }
};

const langButtons = document.querySelectorAll(".lang-switcher button");
const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

langButtons.forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.id.split("-")[1]; // "en" or "ja"
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute("data-lang-key");
        el.textContent = translations[lang][key];
    });
}

// ハンバーガーメニューの展開ロジック
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});