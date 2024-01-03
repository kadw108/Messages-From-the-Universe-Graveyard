import {Howl} from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
    howl["maxVolume"] = maxVolume;
    return howl;
}

const introMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/crumblingcastle_distor6.mp3"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0
    })
];

const dormMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/out_of_bounds.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }), 0.7)
];

const greenhouseMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music/Blear Moon - Sauvignon Valley - 01 Come Fly With Me.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
    new Howl({
        src: ["assets/music_real/forest_day_wind_roadhumm.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
];

const sunkenMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/river2.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
    new Howl({
        src: ["assets/music_real/sheen_shine_2.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
];

const amberMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/river2.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
    new Howl({
        src: ["assets/music_real/sheen_shine_2.mp3"],
        loop: true,

        autoplay: true,
        volume: 0
    }),
];

const depthsMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience.ogg"],
        loop: true,

        autoplay: true,
        volume: 0
    }), 1.9),
    addMaxVolume(new Howl({
        src: ["assets/music_real/piano.mp3"],
        loop: true,
        rate: 0.8,

        autoplay: true,
        volume: 0
    }), 1.6)
];

type MusicManager = {
    activeSoundtrack: number,
    soundtracks: Array<Array<Howl>>,
    playSoundtrack: Function
}

const musicManager: MusicManager = {
    activeSoundtrack: -1,
    soundtracks: [dormMusic, greenhouseMusic, sunkenMusic, introMusic, amberMusic, depthsMusic],

    playSoundtrack: function(whichSoundtrack: number) {
        if (whichSoundtrack === this.activeSoundtrack) {
            return;
        }

        if (this.activeSoundtrack !== -1) {
            this.soundtracks[this.activeSoundtrack].forEach(howl => {
                howl.fade(howl.volume(), 0, 3000);
            })
        }

        setTimeout(() => {
            this.soundtracks[whichSoundtrack].forEach(howl => {
                if (howl["maxVolume"] !== undefined) {
                    console.log(howl["maxVolume"]);
                    howl.fade(0, howl["maxVolume"], 9000);
                }
                else {
                    howl.fade(0, 1.0, 9000);
                }
            })
        }, 1000);

        this.activeSoundtrack = whichSoundtrack;
    }
}

export {
    musicManager
};