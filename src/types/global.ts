export type TPizzaDetails = {
  type: 'veg' | 'nonVeg' | null
  size: 'small' | 'medium' | 'large' | null
  base: 'thin' | 'thik' | null
}

export type TCurrentStatus = ['placed', 'making', 'ready', 'picked']
export interface IPizzaOrder {
  id: string
  currentStatus: 'placed' | 'making' | 'ready' | 'picked' | null
  orderPlaced: Date | number | null
  pizzaDetails: TPizzaDetails
}
