document.addEventListener('keypress', function (event) {
    if (event.which === 118) {  // 118: 'v'
        safari.self.tab.dispatchMessage('test', 'hello');
    }
}, true);