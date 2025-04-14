(function () {
    var countikWidget = document.createElement('script');
    countikWidget.src = 'https://countik.com/widget.js';
    countikWidget.async = true;
    countikWidget.onload = function () {
        if (typeof window.initializeCountikWidget === 'function') {
            window.initializeCountikWidget({
                container: '#countik-widgetJM',
                themeColor: '#000000',
                uniqueId: 'jmgranabuab',
                language: 'es'
            });
        }
    };
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(countikWidget, firstScript);
})();