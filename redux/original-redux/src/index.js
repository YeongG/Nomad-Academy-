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

const onChange = () => {
    number.innerText = countStore.getState();
}
countStore.subscribe(onChange);


add.onclick=() => countStore.dispatch({type:"ADD"});
minus.onclick=() => countStore.dispatch({type:"MINUS"});