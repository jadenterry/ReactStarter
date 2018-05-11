import {Dispatch} from 'redux';
import {ApplicationState} from '../state';

export interface Increment {
    type: 'App/Increment',
    value: number
}

export function increment(val: number): Increment {
    return {
        type: 'App/Increment',
        value: val
    }
}

export interface Decrement {
    type: 'App/Decrement',
    value: number
}

export function decrement(val: number): Decrement {
    return {
        type: 'App/Decrement',
        value: val
    }
}

export type Action = Increment | Decrement;