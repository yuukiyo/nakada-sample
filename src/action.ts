import actionCreatorFactory, { } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const Actions = {
    updateUsername: actionCreator<string>('UPDATE_USERNAME'),
    updatePrice: actionCreator<number>('UPDATE_PRICE'),
    updateQuantity: actionCreator<number>('UPDATE_QUANTITY')
}