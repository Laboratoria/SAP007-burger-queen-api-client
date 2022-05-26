import { Button } from './MenuToggleBtnStyle';

const MenuToggleBtn = ({ callback, idProduct, nameProduct, price, quantityProduct = 0, flavor, complement }) => {

  function AddProduct() {
    callback(idProduct, nameProduct, price, quantityProduct + 1, flavor, complement)
  }

  function RemoveProduct() {
    let quantity = quantityProduct;
    if(quantityProduct > 0) {
      quantity--;
    }
    
    callback(idProduct, nameProduct, price, quantity, flavor, complement)
  }


  const BtnAddOrRemoveQuantity = (quantityProduct === 0 ? 'black' : 'black')

  return (
    <>
      <div>
        <Button onClick={RemoveProduct} style={{ color: BtnAddOrRemoveQuantity }}>-</Button>
        <Button>{quantityProduct}</Button>
        <Button onClick={AddProduct}>+</Button>
      </div>
    </>
  )
}

export default MenuToggleBtn