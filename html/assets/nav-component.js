class NavComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="menu">
                <h2>Menu</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">Web</a></li>
                    <li><a href="index.html">Appka</a></li>
                    <li><a href="index.html">Service</a></li>
                    <li><a href="index.html">Dokumentácia</a></li>
                    <li><a href="index.html">Čistý kód</a></li>
                    <li><a href="index.html">Výskum</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);