(function() {
    var countikWidget = document.createElement('script');
    countikWidget.src = 'https://countik.com/widget.js';
    countikWidget.async = true;
    countikWidget.onload = function() {
      if (typeof window.initializeCountikWidget === 'function') {
        window.initializeCountikWidget({
          container: '#countik-widgetibaillanos',
          themeColor: '#444444',
          uniqueId: 'ibaillanos',
          language: 'es'
        });
      }
    };
    var firstScript = document.getElementsByTagName('scriptibaillanos')[0];
    firstScript.parentNode.insertBefore(countikWidget, firstScript);
  })();