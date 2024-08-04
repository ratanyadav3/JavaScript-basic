// Function to load the about page content
export function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>About Page</h1>
        <p>This is the about page of our SPA.</p>
    `;
}
