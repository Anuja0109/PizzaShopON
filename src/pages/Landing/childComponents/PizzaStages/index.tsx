// import { useState } from 'react'
// import Button from '@ui/Button'
// import AppModal from '@ui/Modal'
import RegularList from '@ui/List'
import { StagesContainer } from './style'
import { orderSelector } from '@store/slices/orders'
import { useAppSelector } from '@hooks/useAppSelector'
import { IPizzaOrder, TCurrentStatus } from '@global-types/global'
import PizzaCard from './PizzaCardItem'
import GridLayout from '@components/GridLayout'
import React from 'react'
import { filterItems } from '@utils/filterItems'

const PizzaStages: React.FC = () => {
  // const [showModalOrder, setShowOrderModal] = useState(false)
  const orders: IPizzaOrder[] = useAppSelector(orderSelector)
  const statusArr = ['placed', 'making', 'ready', 'picked'] as TCurrentStatus

  return (
    <StagesContainer>
      Pizza Stages
      <GridLayout columnsAmount={4}>
        {(itemWidth) =>
          statusArr.map((status) => (
            <div
              style={{
                width: itemWidth,
                height: itemWidth
              }}>
              <RegularList
                items={filterItems({
                  items: [...orders],
                  key: 'currentStatus',
                  value: status
                })}
                resourceName="order"
                itemComponent={PizzaCard}
              />
            </div>
          ))
        }
      </GridLayout>
      {/* <Button
        type="button"
        resourceId="addPizzaModal"
        buttonText="Order"
        size="big"
        onRequestClick={() => setShowOrderModal(true)}
      />
      <AppModal
        shouldShow={showModalOrder}
        onRequestClose={() => setShowOrderModal(false)}
        title="Order Pizza">
        <h2>order</h2>
      </AppModal> */}
    </StagesContainer>
  )
}

export default PizzaStages
