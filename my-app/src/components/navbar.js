import React from "react"

function navbar(){
    return (<nav class="navbar navbar-dark bg-dark"><h1 class="col-sm-3"> Pablo A. Garcia </h1>
    <ul class="col-sm-8 nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
    </ul>
</nav>

    )
}
export default navbar