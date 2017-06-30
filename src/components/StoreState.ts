import {observable, action} from 'mobx';

const increment = () => { StoreState.enthusiasmLevel++; };

const decrement = () => { StoreState.enthusiasmLevel = Math.max(1, StoreState.enthusiasmLevel - 1); };

export const StoreState = observable({
    name: 'TypeScript',
    enthusiasmLevel: 1,
    increment: action(increment),
    decrement: action(decrement)
});