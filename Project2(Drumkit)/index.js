document.body.addEventListener('keypress', onKeyPress);
function onKeyPress(ev) {
    var boom = document.querySelector('[data-sound="boom"]');
    var clap = document.querySelector('[data-sound="clap"]');
    var hihat = document.querySelector('[data-sound="hihat"]');
    var kick = document.querySelector('[data-sound="kick"]');
    var openhat = document.querySelector('[data-sound="openhat"]');
    var ride = document.querySelector('[data-sound="ride"]');
    var snare = document.querySelector('[data-sound="snare"]');
    var tink = document.querySelector('[data-sound="tink"]');
    switch (ev.key) {
        case 'q':
            //boom.currentTime = 0;
            boom.play();
            break;
        case 'w':
            //clap.currentTime = 0;
            clap.play();
            break;
        case 'e':
            //hihat.currentTime = 0;
            hihat.play();
            break;
        case 'r':
            //kick.currentTime = 0;
            kick.play();
            break;
        case 'a':
            //openhat.currentTime = 0;
            openhat.play();
            break;
        case 's':
            //ride.currentTime = 0;
            ride.play();
            break;
        case 'd':
            //snare.currentTime = 0;
            snare.play();
            break;
        case 'f':
            //  tink.currentTime = 0;
            tink.play();
            break;
    }
}
