import { connect } from "react-redux";
import { AppState } from './store';
import { PizzaComponent } from "./pizzaComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

export interface pizzaHundler {
    hundleInit(): void
    hundleOrder(username: string, price: number): void
    hundleUpdateQuantity(event: any, newValue: number | number[]): void
}

const hundleInit = () => async (dispatch: Dispatch) => {
    const login: string = '吉田'
    dispatch(Actions.updateUsername(login))
    // Auth.currentSession()
    // .then(data => {
    //     dispatch(Actions.updateUsername(data["accessToken"]["payload"]["username"]))
    // })
    // .catch(err => console.log(err));
}

const hundleUpdateQuantity = (event: any, quantity: number) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateQuantity(quantity))
    const price = quantity > 9 ? 9800 : quantity * 1000
    dispatch(Actions.updatePrice(price))
}

const hundleOrder = (username: string, price: number) => async () => {
    console.log(username)
    console.log(price)
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        username: appState.state.username,
    })
}
export default connect(mapStateToProps, {
    hundleInit,
    hundleOrder,
    hundleUpdateQuantity
})(PizzaComponent)