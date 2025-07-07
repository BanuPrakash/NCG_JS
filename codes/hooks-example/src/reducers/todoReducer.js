 // initial state = []
export default function todoReducer( state, action ) {
    switch(action.type) {
        case 'ADD':
            // avoid using state.push({id: Date.now(), text: action.payload, completed: false});
            // clone and add new payload
            return [...state, {id: Date.now(), text: action.payload, completed: false}]
        case 'TOGGLE':
            // payload will be id
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo)
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
        default:
                return state;
    }
}