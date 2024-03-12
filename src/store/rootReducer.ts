import { combineReducers } from '@reduxjs/toolkit'
import orderReducer from './slices/orders'

const rootReducer = combineReducers({
  orders: orderReducer
})

export default rootReducer
