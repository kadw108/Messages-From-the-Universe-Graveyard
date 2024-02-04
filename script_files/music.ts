import {Howl} from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
    howl["maxVolume"] = maxVolume;
    return howl;
}

const introMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/crumblingcastle_distor6.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0
    })
];

const dormMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/out_of_bounds.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.9),
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.2),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1)
];

const greenhouseMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubble_skrotraff.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/forest_day_wind_roadhumm2.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.3),
];

const sunkenMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/river2.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }),
    addMaxVolume(new Howl({
        src: ["assets/music_real/symphony_of_stones_v3.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubbling.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.4),
];

const amberMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/blessed_are_the_hearts_that_can_bend.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/running_ship_steam_engine.ogg"],
        loop: true,
        rate: 0.8,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.3),
];

const depthsMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience2.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/piano.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.35),
];

const dungeonMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/abandoned_building_puzzles.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.5),
];

const bedroomMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/winter_holiday.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1),
];

const cellMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/dirge_of_the_damned.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1),
];

const bridgeMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/winter_3.2.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7)
];

const playcastleMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/le_banc_dans_le_bois.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1),
];

const hiddenMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/uralia2.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1),
];

const glitchMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/jump_into_art_glitch.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.8),
];

const familiarMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.mp3"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.3),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,
        rate: 1.5,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.45)
];

const transmissionMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/birds_noises.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience2.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.65),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7)
];

const fireMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/re_cycles.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/milk-boiling-sound-effect.ogg"],
        loop: true,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/deep-volcano-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.6),
    addMaxVolume(new Howl({
        src: ["assets/music_real/burning-fire-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: true,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.6),
];

type MusicManager = {
    activeSoundtrack: number,
    soundtracks: Array<Array<Howl>>,
    playSoundtrack: Function
}

const musicManager: MusicManager = {
    activeSoundtrack: -1,
    soundtracks: [dormMusic, greenhouseMusic, sunkenMusic, introMusic, amberMusic, depthsMusic, dungeonMusic, bedroomMusic, cellMusic, bridgeMusic, playcastleMusic, hiddenMusic, glitchMusic, familiarMusic, transmissionMusic, fireMusic],

    playSoundtrack: function(whichSoundtrack: number) {
        if (whichSoundtrack === this.activeSoundtrack) {
            return;
        }

        if (this.activeSoundtrack !== -1) {
            this.soundtracks[this.activeSoundtrack].forEach(howl => {
                howl.fade(howl.volume(), 0, 3000);
            })
        }

        // Fix bug where main menu music and first area music starts playing in first area
        // when you enter first area before it has time to load
        if (whichSoundtrack !== 3) {
            this.soundtracks[3].forEach(howl => {
                howl.stop();
            }) 
        }

        setTimeout(() => {
            this.soundtracks[whichSoundtrack].forEach(howl => {
                let maxVolume = howl["maxVolume"];
                if (maxVolume === undefined) {
                    maxVolume = 1.0;
                }

                if (howl.state() === "unloaded") {
                    howl.load();

                    howl.onplay = () => {
                        setTimeout(() => {
                            // otherwise volume change not applied
                            // see https://github.com/goldfire/howler.js/issues/1603 ?
                            howl.fade(0, maxVolume, 7000);
                        }, 100);
                    }

                }
                else {
                    setTimeout(() => {
                        // otherwise volume change not applied
                        // see https://github.com/goldfire/howler.js/issues/1603 ?
                        howl.fade(0, maxVolume, 7000);
                    }, 100);
                }
            })
        }, 1000);

        this.activeSoundtrack = whichSoundtrack;
    }
}

export {
    musicManager
};