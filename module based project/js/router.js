// Importing page modules
import { loadHomePage } from './home.js';
import { loadAboutPage } from './about.js';
import { loadContactPage } from './contact.js';

// Function to navigate between pages
export function navigateTo(page) {
    switch(page) {
        case 'home':
            loadHomePage();
            break;
        case 'about':
            loadAboutPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        default:
            loadHomePage();
    }
}
