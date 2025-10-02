// Image Slider Functionality
const imageContainer = document.getElementById('image-container');
const images = document.querySelectorAll('.image-slide');

let currentIndex = 0;
const totalImages = images.length;

// Only run slider if there are multiple images
if (totalImages > 1) {
    // Set up initial positions for all images
    images.forEach((img, index) => {
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.transition = 'opacity 1s ease-in-out';
    });

    // Make container relative for absolute positioning
    imageContainer.style.position = 'relative';

    // Function to show next image
    function nextSlide() {
        // Fade out current image
        images[currentIndex].style.opacity = '0';
        
        // Move to next index
        currentIndex = (currentIndex + 1) % totalImages;
        
        // Fade in next image
        images[currentIndex].style.opacity = '1';
    
    }

    // Auto slide every 4 seconds
    setInterval(nextSlide, 5000);
}


// hamburger navigation menu

const hamburger = document.querySelector('.js-hamburger');
const menuNavigation = document.querySelector('.js-menu-navigation');
const hamburgerSpan = document.querySelectorAll('.js-hamburger .js-hamburger-span');

hamburger.addEventListener('click', function() {
    menuNavigation.classList.toggle('menu-navigation-shown');

    if(menuNavigation.classList.contains('menu-navigation-shown')) {
        hamburgerSpan[0].classList.add('hamburger-first-child');
        hamburgerSpan[1].classList.add('hamburger-second-child');
        hamburgerSpan[2].classList.add('hamburger-third-child');
    }else{
        hamburgerSpan[0].classList.remove('hamburger-first-child');
        hamburgerSpan[1].classList.remove('hamburger-second-child');
        hamburgerSpan[2].classList.remove('hamburger-third-child');
    }

   
    hamburgerSpan.forEach((span) => {
        span.classList.add('hamburger-span');
    })
});
    
