document.addEventListener('DOMContentLoaded', function () {
	// Clone animation items

	const dubItems = 4

	const wrapper1 = document.getElementById('colWrap1')
	const lineItems1 = wrapper1.querySelectorAll('.anim__line1')
	lineItems1.forEach((item) => {
		for (let i = 0; i < dubItems; i++) {
			const clone = item.cloneNode(true)
			wrapper1.appendChild(clone)
		}
	})

	const wrapper2 = document.getElementById('colWrap2')
	const lineItems2 = wrapper2.querySelectorAll('.anim__line2')
	lineItems2.forEach((item) => {
		for (let i = 0; i < dubItems; i++) {
			const clone2 = item.cloneNode(true)
			wrapper2.appendChild(clone2)
		}
	})

	const wrapper3 = document.getElementById('colWrap3')
	const lineItems3 = wrapper3.querySelectorAll('.anim__line3')
	lineItems3.forEach((item) => {
		for (let i = 0; i < dubItems; i++) {
			const clone3 = item.cloneNode(true)
			wrapper3.appendChild(clone3)
		}
	})

	// Burger menu

	const checkBurger = document.getElementById('checkbox')
	const burgerMenu = document.getElementById('burgerMenu')

	checkBurger.addEventListener('click', function () {
		burgerMenu.classList.toggle('menu-active')

		if (burgerMenu.classList.contains('menu-active')) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'scroll'
		}
	})



	// Footer links on hover BG

	document.querySelectorAll('.links__button').forEach((button, index) => {
		button.addEventListener('mouseover', () => {
			const path = button.querySelector('.path')
			path.setAttribute('fill', 'url(#paint0_linear_21903_179_1)')
		})

		button.addEventListener('mouseout', () => {
			const path = button.querySelector('.path')
			path.setAttribute('fill', '#F97247')
		})
	})

	// Language

	const languageBtn = document.getElementById('langBtn');

languageBtn.addEventListener('click', function () {
    languageBtn.classList.toggle('visible');
});

const dropDownLang = document.getElementById('langList');
const selectedLang = document.getElementById('lang-selected');
const defaultLangItem = document.getElementById('lang-EN');
	
selectedLang.textContent = defaultLangItem.textContent;
defaultLangItem.style.display = 'none';

document.querySelectorAll('.list-lang-item').forEach((item) => {
    item.addEventListener('click', function () {
        let currentLang = selectedLang.textContent;
        selectedLang.textContent = this.textContent;
        this.textContent = currentLang;
				dropDownLang.classList.remove('visible');
				if (selectedLang == item) {
				selectedLang.style.display = 'none'
			}
    });
});
})
