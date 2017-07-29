import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const INCREMENTBY10 = 'INCREMENTBY10';
export const DECREMENTBT10 = 'DECREMENTBT10';

export function counterReducer(state: number = 0, action: Action): number {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        case INCREMENTBY10:
            return state + 10;
        case DECREMENTBT10:
            return state - 10;
        default:
            return state;
    }
}
