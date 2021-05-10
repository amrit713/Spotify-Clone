import {SET_AUDIO,
SET_PLAYING_SOUND,
SET_VOLUME,
SET_SHUFFLE,
SET_REPEAT

} from "./constant"

export const setPlayingSound=(res) =>dispatch=>{
    console.log(res)
    dispatch({
        type:SET_PLAYING_SOUND,
        playing: res
    })

}

export const setAudio = (audio)=>dispatch =>{
    console.log(audio)
    dispatch({
        type:SET_AUDIO,
        audio: audio
    })
}

export const setVolume =(volume) =>dispatch =>{
    dispatch({
        type:SET_VOLUME,
        volume: volume
    })
}

export const setShuffle = (shuffle)=>dispatch=>{
    dispatch({
        type:SET_SHUFFLE,
        shuffle: shuffle
    })
}

export const setRepeat = (repeat) =>dispatch =>{
    dispatch({
        type:SET_REPEAT,
        repeat: repeat
    })
}
