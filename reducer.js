const actions = [
    { type: "increment", playload: 1 },
    { type: "increment", playload: 1 },
    { type: "increment", playload: 1 },
    { type: "decrement", playload: 1 },
];

const initialState = {
    value: 0,
};

const counterReducer = (state, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.playload,
        };
    }else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.playload,
        };
    }else {
        return state;
    }
};

const finalResult = actions.reduce(counterReducer, initialState);

console.log ( finalResult);