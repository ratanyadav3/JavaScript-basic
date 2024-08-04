// Importing modules
import { navigateTo } from './router.js';
import { loadHomePage } from './home.js';

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Set up navigation links
    document.getElementById('home-link').addEventListener('click', () => navigateTo('home'));
    document.getElementById('about-link').addEventListener('click', () => navigateTo('about'));
    document.getElementById('contact-link').addEventListener('click', () => navigateTo('contact'));

    // Load initial page
    loadHomePage();
});
