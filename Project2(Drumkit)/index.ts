const soundElements: HTMLAudioElement[] = [document.querySelector('[data-sound="boom"]'), 
                                        document.querySelector('[data-sound="clap"]'),
                                        document.querySelector('[data-sound="hihat"]'),
                                        document.querySelector('[data-sound="kick"]'),
                                        document.querySelector('[data-sound="openhat"]'),
                                        document.querySelector('[data-sound="ride"]'),
                                        document.querySelector('[data-sound="snare"]'),
                                        document.querySelector('[data-sound="tink"]') 
                                    ];
enum Sounds {
    boom = 0,
    clap = 1,
    hithat = 2,
    kick = 3,
    openhat = 4,
    ride = 5,
    snare = 6,
    tink = 7
}
const playButtonsArray: HTMLButtonElement[] = [document.querySelector('#track1Play'),
                                          document.querySelector('#track2Play'),
                                          document.querySelector('#track3Play'),
                                          document.querySelector('#track4Play')
                                        ];
const recordButtonsArray: HTMLButtonElement[] = [document.querySelector('#track1Record'),
                                            document.querySelector('#track2Record'),
                                            document.querySelector('#track3Record'),
                                            document.querySelector('#track4Record')];

const checkBoxesArray: HTMLInputElement[] = [document.querySelector('#track1Checkbox'),
                                            document.querySelector('#track2Checkbox'),
                                            document.querySelector('#track3Checkbox'),
                                            document.querySelector('#track4Checkbox')];

document.body.addEventListener('keypress', onKeyPress);

recordButtonsArray[0].addEventListener('click', recordChannel1);
recordButtonsArray[1].addEventListener('click', recordChannel2);
recordButtonsArray[2].addEventListener('click', recordChannel3);
recordButtonsArray[3].addEventListener('click', recordChannel4);

playButtonsArray[0].addEventListener('click', playChannel1);
playButtonsArray[1].addEventListener('click', playChannel2);
playButtonsArray[2].addEventListener('click', playChannel3);
playButtonsArray[3].addEventListener('click', playChannel4);

let channel1: any[] = [];
let channel2: any[] = [];
let channel3: any[] = [];
let channel4: any[] = [];

let startRecordTime1: number = 0;
let startRecordTime2: number = 0;
let startRecordTime3: number = 0;
let startRecordTime4: number = 0;

function  trackCheckboxCheck(checkbox: HTMLInputElement): boolean{
    if(checkbox.checked === true){
        return true;
    }
    if(checkbox.checked === false){
        return false;
    }
}

function onKeyPress(ev: KeyboardEvent): void {

    const key = ev.key;
    const time = ev.timeStamp;

    if(trackCheckboxCheck(checkBoxesArray[0])){
        channel1.push({
            key,
            time
        })
    }
    if(trackCheckboxCheck(checkBoxesArray[1])){
        channel2.push({
            key,
            time
        })
    }
    if(trackCheckboxCheck(checkBoxesArray[2])){
        channel3.push({
            key,
            time
        })
    }
    if(trackCheckboxCheck(checkBoxesArray[3])){
        channel4.push({
            key,
            time
        })
    }
    playSound(key);
    console.log(channel1);
    //console.log(channel2);
    //console.log(channel3);
    //console.log(channel4);
}   

function recordChannel1(ev: Event): void{
    channel1 = [];
    startRecordTime1 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel2(ev: Event): void{
    channel1 = [];
    startRecordTime2 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel3(ev: Event): void{
    channel1 = [];
    startRecordTime3 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel4(ev: Event): void{
    channel1 = [];
    startRecordTime4 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function playSound(key: string){

    switch(key){
        case 'q':
            soundElements[Sounds.boom].currentTime = 0;
            soundElements[Sounds.boom].play()
        break;

        case 'w':
            soundElements[Sounds.clap].currentTime = 0;
            soundElements[Sounds.clap].play()
        break;

        case 'e':
            soundElements[Sounds.hithat].currentTime = 0;
            soundElements[Sounds.hithat].play()
        break;

        case 'r':
            soundElements[Sounds.kick].currentTime = 0;
            soundElements[Sounds.kick].play()
        break;
        ////////////////////////////////
        case 'a':
            soundElements[Sounds.openhat].currentTime = 0;
            soundElements[Sounds.openhat].play()
        break;

        case 's':
            soundElements[Sounds.ride].currentTime = 0;
            soundElements[Sounds.ride].play()
        break;

        case 'd':
            soundElements[Sounds.snare].currentTime = 0;
            soundElements[Sounds.snare].play()
        break;

        case 'f':
            soundElements[Sounds.tink].currentTime = 0;
            soundElements[Sounds.tink].play()
        break;
    }
}

function playChannel1(): void {

    channel1.forEach(sound =>{
        console.log(startRecordTime1 - sound.time);
        const timeout = sound.time - startRecordTime1;
        setTimeout(() => playSound(sound.key),timeout);
    })
}
function playChannel2(): void {

    channel2.forEach(sound =>{
        const timeout = sound.time - startRecordTime2;
        setTimeout(() => playSound(sound.key),timeout);
    })
}

function playChannel3(): void {

    channel3.forEach(sound =>{
        const timeout = sound.time - startRecordTime3;
        setTimeout(() => playSound(sound.key),timeout);
    })
}

function playChannel4(): void {

    channel4.forEach(sound =>{
        const timeout = sound.time - startRecordTime4;
        setTimeout(() => playSound(sound.key),timeout);
    })
}


