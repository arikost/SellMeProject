const INCREMENT = 'increment';

export const increment = () =>({
    type: INCREMENT
})

const initialState = {
    currentSetStetus : 0,
    total : 0,

};

export default (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            if(state.currentSetStetus === 2){
                var newState = {...state, currentSetStetus: 0 , total : state.total+1};
                return newState;
            }
            return {...state, currentSetStetus: state.currentSetStetus +1};
        default:
            return state;
    }
}