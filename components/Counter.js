import styled from 'styled-components';
import Link from 'next/link';

const BuyButton = styled.button`
  background-color: #2b2020;
  border-radius: 8px;
  padding: 18px;
  margin: 4px;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`;
const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0x;
  margin-right: 100px;
  cursor: pointer;
  h4 {
    margin: 0;
    padding: 0;
  }
`;

export default function Counter(props) {
  const subTotalPerItem = props.productsWithCartConditionData.map((hat) => {
    return hat.price * hat.count;
  });

  const countPerProductString = props.productsWithCartConditionData.map((hat) => {
    return hat.count;
  });

  const countPerItemInt = countPerProductString.map(Number);

  const totalCount = countPerItemInt.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPrice = subTotalPerItem.reduce(function (a, b) {
    return a + b;
  }, 0);

  const totalPriceRounded = Math.round(totalPrice * 100) / 100;

  return (
    <Checkout>
      <h4>
        Subtotal ({totalCount} ) : {totalPriceRounded} €
      </h4>
      <Link href="../checkout">
        <a>
          <BuyButton>Proceed to Checkout</BuyButton>
        </a>
      </Link>
    </Checkout>
  );
}
