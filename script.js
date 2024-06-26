
function displayHeader(pageTitle) {
    document.getElementById("pageheader").innerHTML = "<h2 id='headTitle'>" + pageTitle +
        "</h2><p><a class='headLink' href='index.html'>Home</a>&nbsp;&nbsp;" +
        "<a class='headLink' href='ideas.html'>Ideas</a>&nbsp;&nbsp;" +
        "<a class='headLink' href='add.html'>Add an item</a>&nbsp;&nbsp;" +
        "<a class='headLink' href='browse.html'>Browse the library</a>&nbsp;&nbsp;" +
        "<a class='headLink' href='signout.html'>Sign out</a>&nbsp;&nbsp;</p>";
}

function displaySignedOutHeader(pageTitle) {
    document.getElementById("pageheader").innerHTML = "<h2>" + pageTitle + "</h2>";
}

function displayBrowseTitle(browseTitle) {
    document.getElementById("browseTitleText").innerHTML = "<h2>" + browseTitle +
        "</h2><small style='color: #646464;'><i>Tip: </i>If no items load, please refresh page!</small><br><br>";
}


function displayFooter() {
    document.getElementById("pagefooter").innerHTML = "<hr> <br> &copy; 2024 Tool Library, by Oscar Sill";
}
