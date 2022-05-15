import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Cart Data loaded successfully!',
          }))

        const fetchData = async () => {
            const response = await fetch('https://react-http-21f5a-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if(!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart(cartData || [])
            )
        }
        catch (err) {
            console.log(err)

            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Fetching Cart Data failed!',
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'loading',
            title: 'Loading...',
          }))

        console.log('sending...')
        const sendRequest = async () => {
            const response = await fetch('https://react-http-21f5a-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            })

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
              }
        }

        try {
            await sendRequest();
            console.log('success')

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Sent Cart Data successfully!',
              }))
        }

        catch(err) {
            console.log('error');

            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Sending Cart Data failed!',
              }))
        }
    }
}