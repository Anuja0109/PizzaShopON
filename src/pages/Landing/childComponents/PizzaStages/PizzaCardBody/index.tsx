import { IPizzaOrder } from '@global-types/global'
import Button from '@ui/Button'
import {
  CardBody,
  CardBtnHolder,
  CardHeader,
  CardPane,
  CardSeperator,
  CardText
} from './style'

type TPizzaCardBodyProps = {
  item: IPizzaOrder
}

const PizzaCardBody: React.FC<TPizzaCardBodyProps> = ({ item }) => {
  return (
    <CardPane color="#009966" id={item.id}>
      <CardHeader>{item.id}</CardHeader>
      <CardSeperator />
      <CardBody>
        <CardText>Time</CardText>
        <CardBtnHolder>
          <Button
            type="button"
            variant="primary"
            buttonText="Next"
            resourceId="statusChange"
            onRequestClick={() => console.log()}
          />
        </CardBtnHolder>
      </CardBody>
    </CardPane>
  )
}

export default PizzaCardBody
