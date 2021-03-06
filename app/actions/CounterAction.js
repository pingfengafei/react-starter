export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

let CounterAction = {
    increase(text) {
        return {type: INCREASE, text: text};
    },

    decrease(text) {
        return {type: DECREASE, text: text};
    }
};

export default CounterAction;