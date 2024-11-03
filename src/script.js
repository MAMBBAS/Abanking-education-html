document.addEventListener('DOMContentLoaded', function() {
	const gridElements = document.querySelectorAll('.gridElement');
	
	gridElements.forEach(grid => {
		const likeButton = grid.querySelector('.like-button');
		likeButton.addEventListener('click', function(e) {
			// Предотвращаем всплытие события
			e.stopPropagation();
			this.classList.toggle('like-button--active');
		});
	});
});
