var soundElements = [document.querySelector('[data-sound="boom"]'),
    document.querySelector('[data-sound="clap"]'),
    document.querySelector('[data-sound="hihat"]'),
    document.querySelector('[data-sound="kick"]'),
    document.querySelector('[data-sound="openhat"]'),
    document.querySelector('[data-sound="ride"]'),
    document.querySelector('[data-sound="snare"]'),
    document.querySelector('[data-sound="tink"]')
];
var Sounds;
(function (Sounds) {
    Sounds[Sounds["boom"] = 0] = "boom";
    Sounds[Sounds["clap"] = 1] = "clap";
    Sounds[Sounds["hithat"] = 2] = "hithat";
    Sounds[Sounds["kick"] = 3] = "kick";
    Sounds[Sounds["openhat"] = 4] = "openhat";
    Sounds[Sounds["ride"] = 5] = "ride";
    Sounds[Sounds["snare"] = 6] = "snare";
    Sounds[Sounds["tink"] = 7] = "tink";
})(Sounds || (Sounds = {}));
var playButtonsArray = [document.querySelector('#track1Play'),
    document.querySelector('#track2Play'),
    document.querySelector('#track3Play'),
    document.querySelector('#track4Play')
];
var recordButtonsArray = [document.querySelector('#track1Record'),
    document.querySelector('#track2Record'),
    document.querySelector('#track3Record'),
    document.querySelector('#track4Record')];
var checkBoxesArray = [document.querySelector('#track1Checkbox'),
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
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var startRecordTime1 = 0;
var startRecordTime2 = 0;
var startRecordTime3 = 0;
var startRecordTime4 = 0;
function trackCheckboxCheck(checkbox) {
    if (checkbox.checked === true) {
        return true;
    }
    if (checkbox.checked === false) {
        return false;
    }
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (trackCheckboxCheck(checkBoxesArray[0])) {
        channel1.push({
            key: key,
            time: time
        });
    }
    if (trackCheckboxCheck(checkBoxesArray[1])) {
        channel2.push({
            key: key,
            time: time
        });
    }
    if (trackCheckboxCheck(checkBoxesArray[2])) {
        channel3.push({
            key: key,
            time: time
        });
    }
    if (trackCheckboxCheck(checkBoxesArray[3])) {
        channel4.push({
            key: key,
            time: time
        });
    }
    playSound(key);
    console.log(channel1);
    //console.log(channel2);
    //console.log(channel3);
    //console.log(channel4);
}
function recordChannel1(ev) {
    channel1 = [];
    startRecordTime1 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel2(ev) {
    channel1 = [];
    startRecordTime2 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel3(ev) {
    channel1 = [];
    startRecordTime3 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordChannel4(ev) {
    channel1 = [];
    startRecordTime4 = ev.timeStamp;
    console.log(ev.timeStamp);
}
function playSound(key) {
    switch (key) {
        case 'q':
            soundElements[Sounds.boom].currentTime = 0;
            soundElements[Sounds.boom].play();
            break;
        case 'w':
            soundElements[Sounds.clap].currentTime = 0;
            soundElements[Sounds.clap].play();
            break;
        case 'e':
            soundElements[Sounds.hithat].currentTime = 0;
            soundElements[Sounds.hithat].play();
            break;
        case 'r':
            soundElements[Sounds.kick].currentTime = 0;
            soundElements[Sounds.kick].play();
            break;
        ////////////////////////////////
        case 'a':
            soundElements[Sounds.openhat].currentTime = 0;
            soundElements[Sounds.openhat].play();
            break;
        case 's':
            soundElements[Sounds.ride].currentTime = 0;
            soundElements[Sounds.ride].play();
            break;
        case 'd':
            soundElements[Sounds.snare].currentTime = 0;
            soundElements[Sounds.snare].play();
            break;
        case 'f':
            soundElements[Sounds.tink].currentTime = 0;
            soundElements[Sounds.tink].play();
            break;
    }
}
function playChannel1() {
    channel1.forEach(function (sound) {
        console.log(startRecordTime1 - sound.time);
        var timeout = sound.time - startRecordTime1;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
function playChannel2() {
    channel2.forEach(function (sound) {
        var timeout = sound.time - startRecordTime2;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
function playChannel3() {
    channel3.forEach(function (sound) {
        var timeout = sound.time - startRecordTime3;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
function playChannel4() {
    channel4.forEach(function (sound) {
        var timeout = sound.time - startRecordTime4;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
