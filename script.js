// Логика для открытия и скрытия меню с анимацией  
const menuIcon = document.getElementById('menuIcon');  
const dropdownMenu = document.getElementById('dropdownMenu');  

menuIcon.addEventListener('click', () => {  
    menuIcon.classList.toggle('rotated'); // Включаем поворот  
    dropdownMenu.classList.toggle('show'); // Показать/скрыть меню  
});  

// Закрытие меню при клике вне его  
document.addEventListener('click', (event) => {  
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {  
        dropdownMenu.classList.remove('show'); // Скрыть меню  
        menuIcon.classList.remove('rotated'); // Вернуть положение иконки  
    }  
});  

// Добавление класса вращения через CSS, когда открыто меню  
const styles = `  
    .menu-icon.rotated {  
        transform: rotate(90deg);  
        transition: transform 0.3s ease;  
    }  
`;  
const styleSheet = document.createElement("style");  
styleSheet.type = "text/css";  
styleSheet.innerText = styles;  
document.head.appendChild(styleSheet);


document.addEventListener("DOMContentLoaded", function () {
    const accountIcon = document.getElementById("accountIcon");

    accountIcon.addEventListener("click", function () {
        $("#registerModal").modal("show");
    });

    // Переключение между вкладками Вход / Регистрация
    $("#authTabs a").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    // Обработка формы входа
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Вход выполнен!");
        $("#registerModal").modal("hide");
    });

    // Обработка формы регистрации
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Регистрация завершена!");
        $("#registerModal").modal("hide");
    });
});
