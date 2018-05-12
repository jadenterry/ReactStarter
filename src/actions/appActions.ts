import {Dispatch} from 'redux';
import {ApplicationState} from '../state';

export interface Increment {
    type: 'App/Increment'
}

export function increment(): Increment {
    return {
        type: 'App/Increment'
    }
}

export interface Decrement {
    type: 'App/Decrement'
}

export function decrement(): Decrement {
    return {
        type: 'App/Decrement'
    }
}

export type Action = Increment | Decrement;