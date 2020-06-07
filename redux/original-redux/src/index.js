import { createStore} from 'redux'; 

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (state = 0,action) => {
    if(action.type === "ADD") {
        return ++state;
    } else if(action.type === "MINUS") {
        return --state;
    }
    return state;
}

const countStore = createStore(countModifier);
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
countStore.dispatch({type:"ADD"})
console.log(countStore.getState());