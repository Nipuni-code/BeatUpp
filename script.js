const body = document.querySelector('body'),
    modeNav = body.querySelector('.mode-nav'),
    mode = body.querySelector('.mode'),
    modeText = body.querySelector('.mode-text');

    // === get item local storage 

    if (localStorage.getItem('nightMode') === 'true') {
        body.classList.add('dark');
    }

    modeNav.addEventListener('click', () => {
        body.classList.toggle('dark');

        // === change mode text 
        if (body.classList.contains('dark')) {
            modeText.innerText = 'Light Mode';
        } else {
            modeText.innerText = 'Dark Mode';
        };


        // === set mode loacl storage 
        localStorage.setItem('nightMode', body.classList.contains('dark'));
    });

