a = new AudioContext();

function beep(vol, freq, duration) {
    console.log({ vol, freq, duration });
    v = a.createOscillator();
    u = a.createGain();
    v.connect(u);
    v.frequency.value = freq;
    v.type = "square";
    u.connect(a.destination);
    u.gain.value = vol * 0.00001;
    v.start(a.currentTime);
    v.stop(a.currentTime + duration * 0.001);
}
