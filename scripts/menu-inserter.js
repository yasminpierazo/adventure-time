

window.onload = () => {
    menuDiv = document.getElementById("navbar");

    menuDiv.innerHTML = `
    <ul>
    <li></li>
    <li></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="gallery.html">Galeria</a></li>

        <a href='index.html'><img src="../images/logo.png" width="400px"></a>
        <li><a href="characters.html" class="dropdown">Personagens</a>
            <ul>
                <a href="finn.html"><li class="dropdown-item">Finn</li></a>
                <a href="jake.html"><li class="dropdown-item">Jake</li></a>
                <a href="marceline.html"><li class="dropdown-item">Marceline</li></a>
                <a href="princesa-jujuba.html"><li class="dropdown-item">Princesa Jujuba</li></a>
                <a href="rei-gelado.html"><li class="dropdown-item">Rei Gelado</li></a>
            </ul>
        </li>
        <li><a href="../pages/contact.html">Contato</a></li>
        <li></li>
    </ul>
    `;

    head = document.getElementsByTagName("head")[0];
    head.innerHTML += `<link rel="stylesheet" href="../css/menu-style.css">`
}