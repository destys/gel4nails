// Подключение функционала "Чертоги фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const starsBlocks = document.querySelectorAll('[data-stars]');

if (starsBlocks.length) {
    starsBlocks.forEach(block => {
        const rating = block.dataset.stars;
        const stars = block.querySelectorAll('.star');

        stars.forEach((item, index) => {
            if ((index + 1) <= rating) {
                item.classList.add('_fill');
            }
        })
    })
}