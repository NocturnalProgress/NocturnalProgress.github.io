function fancytime(link) {
    var link = document.createElement('link');

    link.rel = 'stylesheet', link.type = 'text/css', link.href = 'assets/fancy.css';

    document.getElementsByTagName('HEAD')[0].appendChild(link);

}

/*
        function normaltime(link) {
            var link = document.createElement('link');

            link.rel = 'stylesheet', link.type = 'text/css', link.href = 'assets/styles.css';

            document.getElementsByTagName('HEAD')[0].appendChild(link);
        }

*/