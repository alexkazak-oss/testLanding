	// Clone scroll items

	const scrollContent = document.getElementById('contentScroll')
	const resizeMargin = () => {
		const viewportWidth = window.innerWidth
		const lastItem = scrollContent.lastElementChild
		const firstItem = scrollContent.firstElementChild

		if (lastItem) {
			lastItem.style.marginBottom = viewportWidth <= 990 ? '10px' : '16px'
		}
		if (firstItem) {
			firstItem.style.marginTop = viewportWidth <= 990 ? '10px' : '16px'
		}
	}

	window.addEventListener('load', resizeMargin)
	window.addEventListener('resize', resizeMargin)

	const itemsDub = 13
	const scrollItem = document.querySelectorAll('.itemClone')

	scrollItem.forEach((item) => {
		for (let i = 0; i < itemsDub; i++) {
			const cloneItem = item.cloneNode(true)
			scrollContent.appendChild(cloneItem)
		}
	})

// Time
   const postDateElement = document.getElementById('post-date');

    
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    
    const formattedDate = `${day}.${month}.${year}`;
    postDateElement.textContent = formattedDate;

// Weather

