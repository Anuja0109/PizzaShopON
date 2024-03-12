import SplitScreenLayout from '@components/SplitScreenLayout'
import PizzaStages from './childComponents/PizzaStages'
import OrdersListing from './childComponents/OrdersListing'

const Landing: React.FC = () => {
  return (
    <SplitScreenLayout>
      <PizzaStages />
      <OrdersListing />
    </SplitScreenLayout>
  )
}

export default Landing
