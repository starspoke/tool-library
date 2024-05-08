function displayFooter() {
    document.getElementById("pagefooter").innerHTML = "&copy; 2024 Tool Library, by Oscar Sill";
}


function displayHeader(pageTitle) {
    document.getElementById("pageheader").innerHTML = "<h2>" + pageTitle +
        "</h2><p><a href='home.html'>Home</a>&nbsp;&nbsp;" +
        "<a href='ideas.html'>Ideas</a>&nbsp;&nbsp;" +
        "<a href='add.html'>Add an item</a>&nbsp;&nbsp;" +
        "<a href='browse.html'>Browse the library</a>&nbsp;&nbsp;</p >";
}
