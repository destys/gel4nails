/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет (HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: {Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs / swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Список слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.clients__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.clients__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.clients .prev',
				nextEl: '.clients .next',
			},
			
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 6,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.listing__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.listing__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.clients .prev',
				nextEl: '.clients .next',
			}, */
			
			// Брейкпоинты
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.partners__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 60,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.partners__prev',
				nextEl: '.partners__next',
			},
			
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 90,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 100,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 120,
				},
				1440: {
					slidesPerView: 7,
					spaceBetween: 140,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelectorAll('.product-item__slider').length) {//указываем склас нужного слайдера
		document.querySelectorAll('.product-item__slider').forEach(slider => {
			new Swiper(slider, { // Указываем склас нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				autoHeight: false,
				speed: 800,

				//touchRatio: 0,
				//simulateTouch: false,
				//loop: true,
				//preloadImages: false,
				//lazy: true,

				/*
				// Еффекты
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

				// Пагинация

				pagination: {
					el: '.product-item__pagination',
					clickable: true,
				},


				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки "влево/вправо"
				/* navigation: {
					prevEl: '.clients .prev',
					nextEl: '.clients .next',
				}, */
				/*
				// Брейкпоинты
				breakpoints: {
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				*/
				// События
				on: {

				}
			});
		})
		// Создаем слайдер

	}
	if (document.querySelector('.left-product__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.left-product__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.left-product__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.left-product__nav .prev',
				nextEl: '.left-product__nav .next',
			},
			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			reviewser: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			/* pagination: {
				el: '.left-product__pagination',
				clickable: true,
			}, */


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews__nav .prev',
				nextEl: '.reviews__nav .next',
			},
			
			// Брейкпоинты
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 3,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.about-friends__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.about-friends__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			reviewser: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			/* pagination: {
				el: '.left-product__pagination',
				clickable: true,
			}, */


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.about-friends__nav .prev',
				nextEl: '.about-friends__nav .next',
			},
			
			// Брейкпоинты
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 3,
				},
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.recommended__slider')) {//указываем склас нужного слайдера
		// Создаем слайдер
		new Swiper('.recommended__slider', { // Указываем склас нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Еффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			/* pagination: {
				el: '.__pagination',
				clickable: true,
			}, */


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.recommended__nav .prev',
				nextEl: '.recommended__nav .next',
			},
			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	// initSlidersScroll();
});