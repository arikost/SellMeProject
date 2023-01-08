const ADD_SHOES = 'addShoes';
const ADD_PANTS = 'addPants';
const ADD_SHIRT = 'addShirt';
const ADD_SET = 'addSes';
export const GET_ITEMS = 'getItems';
const SET_ITEMS = 'setItems';

export const getItems = () =>({
    type: GET_ITEMS,
});
export const setItems = (items) =>({
    type: SET_ITEMS,
    items
});
export const addShoes = (shoes) =>({
    type : ADD_SHOES,
    shoes
});
export const addShirt = (shirt) =>({
    type : ADD_SHIRT,
    shirt
});
export const addPants = (pants) =>({
    type : ADD_PANTS,
    pants
});
export const addSet = () =>({
    type : ADD_SET,
});



const initialState = {
    shoes: {},
    pants: {},
    shirt: {},
    setList : [],
    items: undefined,
};

export default (state = initialState, action) => {
    switch(action){
        case SET_ITEMS:
            const {items} = action;
            return {...state, items}
        case ADD_SHOES:
            const {shoes} = action;
            return {...state, shoes};
        case ADD_SHIRT:
            const {shirt} = action;
            return {...state, shirt};
        case ADD_PANTS:
            const {pants} = action;
            return {...state, pants};
        case ADD_SET:
            const set = {
                shoes : state.shoes,
                pants : state.pants,
                shirt : state.shirt,
            };
            return {...state, setList: [...state.setList, set], shoes : {}, shirt: {}, pants: {}};
        default:
            return state;
    
    }
}
