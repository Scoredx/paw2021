document.body.addEventListener('keypress', onKeyPress);

function onKeyPress(ev: KeyboardEvent): void {

    const boom: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
    const clap: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
    const hihat: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
    const kick: HTMLAudioElement = document.querySelector('[data-sound="kick"]');

    const openhat: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
    const ride: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
    const snare: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
    const tink: HTMLAudioElement = document.querySelector('[data-sound="tink"]');

    switch(ev.key){
        case 'q':
            //boom.currentTime = 0;
            boom.play()
        break;

        case 'w':
            //clap.currentTime = 0;
            clap.play()
        break;

        case 'e':
            //hihat.currentTime = 0;
            hihat.play()
        break;

        case 'r':
            //kick.currentTime = 0;
            kick.play()
        break;

        

        case 'a':
            //openhat.currentTime = 0;
            openhat.play()
        break;

        case 's':
            //ride.currentTime = 0;
            ride.play()
        break;

        case 'd':
            //snare.currentTime = 0;
            snare.play()
        break;

        case 'f':
            //  tink.currentTime = 0;
            tink.play()
        break;
    }
}   