document.addEventListener('DOMContentLoaded', function() {
    // Function to get query string from current URL
    function getQueryString() {
        return window.location.search;
    }

    // Get all links on the page
    var links = document.getElementsByTagName('a');

    // Append query string to each link
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var queryString = getQueryString();

        // Check if the link already has a query string
        if (link.href.includes('?')) {
            // Append & and the additional query string
            link.href += '&' + queryString.substring(1);
        } else {
            // Append ? and the query string
            link.href += queryString;
        }
    }
});
