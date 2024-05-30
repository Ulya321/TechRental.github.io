document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#katalog').scrollIntoView({ behavior: 'smooth' });
    });
});

let scrollAmount = 0;

function scrollRight() {
    const container = document.querySelector('.product-container');
    const containerWidth = container.offsetWidth;
    const itemWidth = container.querySelector('.product').offsetWidth;

    scrollAmount += itemWidth;

    if (scrollAmount >= container.scrollWidth - containerWidth) {
        scrollAmount = container.scrollWidth - containerWidth;
    }

    container.style.transform = `translateX(-${scrollAmount}px)`;
}
