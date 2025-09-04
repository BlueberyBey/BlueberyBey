// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('show');
    mobileMenuButton.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
});

// Close mobile menu
mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    mobileMenuButton.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('show');
        mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileMenuButton.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Image Modal functionality
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const closeModal = document.querySelector('.close-modal');

// Add click event to all overlays
document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
        const galleryItem = this.closest('.gallery-item');
        const image = galleryItem.querySelector('.work-image');
        const title = this.querySelector('.overlay-title').textContent;
        const category = this.querySelector('.overlay-category').textContent;
        
        // Set modal content
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalTitle.textContent = title;
        modalCategory.textContent = category;
        
        // Show modal with smooth transition
        imageModal.style.display = 'block';
        setTimeout(() => {
            imageModal.classList.add('show');
        }, 10);
    });
});

// Close modal functionality
closeModal.addEventListener('click', closeImageModal);
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

function closeImageModal() {
    imageModal.classList.remove('show');
    setTimeout(() => {
        imageModal.style.display = 'none';
    }, 300);
}



// Timeline Process functionality
const timelineNodes = document.querySelectorAll('.timeline-node');
const timelineImage = document.getElementById('timelineImage');
const timelineDescription = document.getElementById('timelineDescription');

timelineNodes.forEach(node => {
    node.addEventListener('click', function() {
        // Remove active class from all nodes
        timelineNodes.forEach(n => n.classList.remove('active'));
        
        // Add active class to clicked node
        this.classList.add('active');
        
        // Update content
        const image = this.getAttribute('data-image');
        const description = this.getAttribute('data-description');
        
        timelineImage.src = image;
        timelineDescription.textContent = description;
        
        // Add fade effect
        timelineImage.style.opacity = '0';
        timelineDescription.style.opacity = '0';
        
        setTimeout(() => {
            timelineImage.style.opacity = '1';
            timelineDescription.style.opacity = '1';
        }, 150);
    });
});

// Fade in animations on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
