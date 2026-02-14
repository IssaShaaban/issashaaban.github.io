class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="logo"></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="cv.html">CV</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </nav>
        `;
    }
}
customElements.define('main-navbar', MyNavbar);