document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    console.log(menuIcon); // デバッグ用ログ')
    
        if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // activeクラスの切り替え
            console.log('Menu toggled:', navLinks.classList.contains('active')); // デバッグ用ログ
        });
} else {
        console.error('menu-icon または nav-links が見つかりません');
        }
    });
    