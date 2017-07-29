import { counterReducer } from './counter.reducer';

export interface AppState {
    counter: number;
};

export const reducer = {
    counter: counterReducer
};
