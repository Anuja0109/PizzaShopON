import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/index'
import { IPizzaOrder } from '@global-types/global'

const initialState: Array<IPizzaOrder> = [
  {
    id: '001',
    currentStatus: 'placed',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  },
  {
    id: '002',
    currentStatus: 'making',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  },
  {
    id: '003',
    currentStatus: 'ready',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  },
  {
    id: '004',
    currentStatus: 'picked',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  },
  {
    id: '005',
    currentStatus: 'ready',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  },
  {
    id: '006',
    currentStatus: 'picked',
    orderPlaced: Date.now(),
    pizzaDetails: {
      type: 'veg',
      size: 'large',
      base: 'thik'
    }
  }
]
export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IPizzaOrder>) => {
      state.push(action.payload)
    },
    changeOrderStatus: (state, action: PayloadAction<IPizzaOrder>) => {
      console.log({ state, payload: action.payload })
    }
  }
})
export const { addOrder, changeOrderStatus } = orderSlice.actions
export const orderSelector = (state: RootState) => state.orders
export default orderSlice.reducer
