import { Howl } from "howler";

function addMaxVolume(howl: Howl, maxVolume: number) {
  howl["maxVolume"] = maxVolume;
  return howl;
}

// doesn't work, don't know why
/*
function addRate(howl: Howl, rate: number) {
  howl["rate"] = rate;
  return howl;
}
  */

/*
Note: some sites don't seem to support mp3s. Will act like they're support but they'll load infinitely. Not sure why
On the other hand, mobile doesn't support ogg in certain formats (???)
Must investigate best format/codec to use
*/

/* SOUNDTRACKS */

/*
export const introMusic: Array<Howl> = [
    // removed because I kept running into errors
    // where it wouldn't load fast enough for the menu,
    // would start playing after you entered the first area, and never stop
    new Howl({
        src: ["assets/music_real/crumblingcastle_distor6.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    })
]; */

export const dormMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/out_of_bounds.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        preload: false, html5: true,
    }), 0.9),
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        preload: false, html5: true,
    }), 0.2),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        preload: false, html5: true,
    }), 0.1)
];

export const greenhouseMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubble_skrotraff.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/forest_day_wind_roadhumm2.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.3),
];

export const sunkenMusic: Array<Howl> = [
    new Howl({
        src: ["assets/music_real/river2.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }),
    addMaxVolume(new Howl({
        src: ["assets/music_real/symphony_of_stones_v3.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/bubbling.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.4),
];

export const amberMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/blessed_are_the_hearts_that_can_bend.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/running_ship_steam_engine.ogg"],
        loop: true,
        rate: 0.8,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.3),
];

export const depthsMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/piano.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.35),
];

export const dungeonMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/abandoned_building_puzzles.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1.5),
];

export const bedroomMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/winter_holiday.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1),
];

export const cellMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/dirge_of_the_damned.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1),
];

export const bridgeMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/winter_3.2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7)
];

export const playcastleMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/le_banc_dans_le_bois.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1.5),
];

export const hiddenMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/uralia2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 1),
];

export const glitchMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/jump_into_art_glitch.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.8),
];

export const familiarMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/room_tone.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.3),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.45),
    addMaxVolume(new Howl({
        src: ["assets/music_real/buzzing_light.ogg"],
        loop: true,
        rate: 1.5,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.45)
];

export const transmissionMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/birds_noises.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/outdoor_nighttime_ambience2.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.65),
    addMaxVolume(new Howl({
        src: ["assets/music_real/gusts_of_wind_through_birch_trees.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7)
];

export const fireMusic: Array<Howl> = [
    addMaxVolume(new Howl({
        src: ["assets/music_real/re_cycles.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.7),
    addMaxVolume(new Howl({
        src: ["assets/music_real/milk-boiling-sound-effect.ogg"],
        loop: true,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.1),
    addMaxVolume(new Howl({
        src: ["assets/music_real/deep-volcano-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.6),
    addMaxVolume(new Howl({
        src: ["assets/music_real/burning-fire-sound-effect.ogg"],
        loop: true,
        rate: 1,

        autoplay: false,
        volume: 0,
        
        preload: false, html5: true
    }), 0.6),
];