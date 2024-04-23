import {Howl} from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
    howl["maxVolume"] = maxVolume;
    return howl;
}

const introMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/crumblingcastle_distor6.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    })
];

const dormMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/out_of_bounds.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.9),
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.2),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1)
];

const greenhouseMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubble_skrotraff.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/forest_day_wind_roadhumm2.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.3),
];

const sunkenMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/river2.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }),
    addMaxVolume(new Howl({
        src: ["assets/music_real/symphony_of_stones_v3.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubbling.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.4),
];

const amberMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/blessed_are_the_hearts_that_can_bend.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/running_ship_steam_engine.ogg"],
        loop: true,
        rate: 0.8,

        autoplay: false,
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

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/piano.ogg"],
        loop: true,

        autoplay: false,
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

        autoplay: false,
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

        autoplay: false,
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

        autoplay: false,
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

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
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

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 1.5),
];

const hiddenMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/uralia2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
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

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.8),
];

const familiarMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.mp3"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.3),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,
        rate: 1.5,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.45)
];

const transmissionMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/birds_noises.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.65),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7)
];

const fireMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/re_cycles.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/milk-boiling-sound-effect.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/deep-volcano-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.6),
    addMaxVolume(new Howl({
        src: ["assets/music_real/burning-fire-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        html5: true,
        preload: "metadata"
    }), 0.6),
];

type MusicAreaMap = {
    area: string,
    soundtrack: Array<Howl>
}
type MusicManager = {
    activeSoundtrack: MusicAreaMap | null,
    soundtracks: Array<MusicAreaMap>,
    activateSoundtrackMusic: Function,
    playSoundtrack: Function
}

const musicManager: MusicManager = {
    activeSoundtrack: null,
    soundtracks: [
        {area: "dorm", soundtrack: dormMusic},
        {area: "greenhouse", soundtrack: greenhouseMusic},
        {area: "sunken", soundtrack: sunkenMusic},
        {area: "menu", soundtrack: introMusic},
        {area: "amberworks", soundtrack: amberMusic},
        {area: "depths", soundtrack: depthsMusic},
        {area: "dungeon", soundtrack: dungeonMusic},
        {area: "bedroom", soundtrack: bedroomMusic},
        {area: "cell", soundtrack: cellMusic},
        {area: "bridge", soundtrack: bridgeMusic},
        {area: "playcastle", soundtrack: playcastleMusic},
        {area: "hidden", soundtrack: hiddenMusic},
        {area: "glitch", soundtrack: glitchMusic},
        {area: "familiar", soundtrack: familiarMusic},
        {area: "transmission", soundtrack: transmissionMusic},
        {area: "fire", soundtrack: fireMusic},
    ],

    activateSoundtrackMusic: function(newSoundtrack: MusicAreaMap) {
        // in case you enter the area for another ost before
        // this timeout function executes
        // (mainly for issues with main menu -> 1st area transition)

        console.log("activateSoundtrackMusic " + this.activeSoundtrack.area + " " + newSoundtrack.area);

        if (this.activeSoundtrack === null || this.activeSoundtrack.area === newSoundtrack.area) {

            for (const howl of newSoundtrack.soundtrack) {

                console.log("activate " + howl);

                let maxVolume = howl["maxVolume"];
                if (maxVolume === undefined) {
                    maxVolume = 1.0;
                }

                if (howl.state() === "unloaded") {
                    console.log("howl is unloaded. loading.");
                    howl.load();
                }

                /*
                howl.onplay = () => {
                    setTimeout(() => {
                        // otherwise volume change not applied
                        // see https://github.com/goldfire/howler.js/issues/1603 ?
                        howl.fade(0, maxVolume, 7000);
                    }, 100);
                }
                */

                if (!howl.playing()) {
                    console.log("howl is not playing. playing now.");
                    howl.play();
                }

                setTimeout(() => {
                    // otherwise volume change not applied
                    // see https://github.com/goldfire/howler.js/issues/1603 ?
                    howl.fade(0, maxVolume, 7000);
                }, 100);
            }
        }
    },

    playSoundtrack: function(snippetTags: Array<string>) {
        console.log(snippetTags);

        let newSoundtrack = this.soundtracks.find((i: MusicAreaMap) => snippetTags.includes(i.area));
        if (newSoundtrack === undefined) {
            newSoundtrack = null;
        }
        else if (this.activeSoundtrack !== null && newSoundtrack.area === this.activeSoundtrack.area) {
            return;
        }

        // fade out currently playing ost
        if (this.activeSoundtrack !== null) {
            console.log("fading out " + this.activeSoundtrack.area);
            this.activeSoundtrack.soundtrack.forEach(howl => {
                howl.fade(howl.volume(), 0, 3000);
                console.log("3 seconds to fade out: " + howl);
            })
        }

        this.activeSoundtrack = newSoundtrack;

        if (newSoundtrack !== null) {
            // fade in new ost
            setTimeout(() => {
                console.log("playing " + newSoundtrack.area);
                this.activateSoundtrackMusic(newSoundtrack);
            }, 1000);
        }
    }
}

export {
    musicManager
};