import {Howl} from "howler";

const dormMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music/Serat - Flow Sessions - 16 Out of Bounds.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    })
];

const greenhouseMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music/Blear Moon - Sauvignon Valley - 01 Come Fly With Me.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    })
];

const sunkenMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music/Serat - Flow Sessions - 12 Harfenzwischenspiel.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    })
];

type MusicManager = {
    activeSoundtrack: number,
    soundtracks: Array<Array<Howl>>,
    playSoundtrack: Function
}

const musicManager: MusicManager = {
    activeSoundtrack: -1,
    soundtracks: [dormMusic, greenhouseMusic, sunkenMusic],

    playSoundtrack: function(whichSoundtrack: number) {
        if (whichSoundtrack === this.activeSoundtrack) {
            return;
        }

        if (this.activeSoundtrack !== -1) {
            this.soundtracks[this.activeSoundtrack].forEach(howl => {
                howl.fade(1.0, 0, 3000);
            })
        }

        setTimeout(() => {
            this.soundtracks[whichSoundtrack].forEach(howl => {
                howl.fade(0, 1.0, 9000);
            })
        }, 1000);

        this.activeSoundtrack = whichSoundtrack;
    }
}

export {
    musicManager
};