// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

console.log('music player script file');

// get a reference to all of the audio tags on the page
let allAudio = document.querySelectorAll('audio');

window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    // event is what gets generated every time the user does sth in the browser.
    // in this case, the event is the keyup event - it has lots of information about that event, including which key was pressed and the key code that identifies it.

    // we can get that infor and use it to find the matching audio element via the data-key custom data attributes on each element in our HTML file
    
    // debugger;

    // square brackets are an attribute selector -> element[attribute]
    // ex. input[type="text"]
    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // rewind the audio clip and Then play it (over and over again)

    // the ! operator tests for a negative condition (not true)
    // in this case, if there is NOT a matching audio clip (audioClip will be null) then exit the function and don't continue
    
    // this will catch errors and let the program run properly 
    if (!audioClip) { return; }

    audioClip.currentTime = 0;

    // play the matching audio clip
    audioClip.play();

    // animate the matching div element -> add the playing class
    // it already has a transition defined in the CSS, so this will trigger the flash of UI that we want 
    targetDiv.classList.add('playing');
}

function resetDivs() {
    let currentDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

    currentDiv.classList.remove('playing');
}

allAudio.forEach(audio => audio.addEventListener('ended', resetDivs));
