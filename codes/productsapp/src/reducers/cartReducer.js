
export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // return new state / object
            return {
                // actually payload should only contain id of product and qty
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            let existingItems = state.cartItems;
            existingItems.forEach(item => {
                if (item.id === action.payload) {
                    item.qty++;
                    item.amount = item.qty * item.price;
                    // add GST, discount
                }
            }
            );
            let ttl = existingItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);

            return {
                cartItems: existingItems,
                total: ttl,
                quantity: state.quantity
            };

        case 'DECREMENT':
            return state;
        case 'REMOVE_FROM_CART':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0.0,
                quantity: 0
            };
        default:
            return state;
    }
}

/*
{
        cartItems: [ {
            id: 52, name : "A", "qty": 1, amount: 521,
        } ,
            {
                id: 91, name: "T", "qty": 2, amount: 8000.00
            }
        ],
        total: 9011.33,
        quantity: 4
    }
*/