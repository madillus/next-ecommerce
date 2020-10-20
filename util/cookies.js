import cookie from 'js-cookie';


export function getCartCondition() {
  const cart = cookie.getJSON('cart') || [];
  console.log('cookie.getJSON - getting Cookie', cart);
  return cart;
}

// export function addToCartFromCookie(id) {
//   const cart = getCartCondition();

//   let newCart;


//   if (cart.includes(id)) {
//     newCart = cart.filter((updated) => updated !== id);
//   } else {
//     newCart = [...cart, id];
//   }

//   cookie.set('cart', newCart);

//   return newCart;
// }
function parse(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

export function removeFromCookie(id) {
    const cart = getCartCondition();
    const parsedId = parse(id, 10);
    const newCart = cart.filter((hat) => hat.id !== parsedId);

    cookie.set('cart', newCart);
    console.log('removed item, updated cart', newCart);

    return newCart;
  }

  export function addToCookie(id, count) {
    const cart = getCartCondition();
    const parsedId = parse(id, 10);
    const check = cart.filter((hat) => hat.id === parsedId);

    function addAnotherProduct(id, count) {
      const newCart = [...cart, { id: id, count: count }];

      cookie.set('cart', newCart);

      return newCart;
    }

    function editProduct(id, count) {
      console.log('edit cookie');

      const index = cart.findIndex((hat) => id === hat.id);
      console.log('index', index);
      const newCart = [...cart];
      newCart[index] = { ...newCart[index], count: count };

      cookie.set('cart', newCart);
      console.log('cookie.set: updated product.count', newCart);

      return newCart;
    }
    return check.length < 1
      ? addAnotherProduct(parsedId, count)
      : editProduct(parsedId, count);
  }




// export function getCartCondition() {
//   const cart = cookie.getJSON('cart') || [];

//   return cart;
// }
// export function getProduct() {
//   const productCart = cookie.getJSON('productCart') || [];
//   return productCart;
// }

// export function addToCartFromCookie(id) {
//   const productCart = getProduct();
//   const newProductCart = [...productCart, { id: id }];
//   cookie.set('productCart', newProductCart);

//   return newProductCart;
// }

// function parse(x, base) {
//   const parsed = parseInt(x, base);
//   if (isNaN(parsed)) {
//     return 0;
//   }
//   return parsed;
// }
// export function removeFromCookie(id) {
//   const cart = getCartCondition();
//   const parsedId = parse(id, 10);
//   const newCart = cart.filter((product) => product.id !== parsedId);

//   cookie.set('cart', newCart);

//   return newCart;
// }

// export function addToCookie(id, count) {
//   const cart = getCartCondition();
//   const parsedId = parse(id, 10);
//   const check = cart.filter((product) => product.id === parsedId);

//   function addAnotherProduct(id, count) {
//     const newCart = [...cart, { id: id, count: count }];

//     cookie.set('cart', newCart);

//     return newCart;
//   }

//   function editProduct(id, count) {
//     console.log('edit cookie');

//     const index = cart.findIndex((product) => id === product.id);
//     console.log('index', index);
//     const newCart = [...cart];
//     newCart[index] = { ...newCart[index], count: count };

//     cookie.set('cart', newCart);
//     console.log('cookie.set: updated product.count', newCart);

//     return newCart;
//   }
//   return check.length < 1
//     ? addAnotherProduct(parsedId, count)
//     : editProduct(parsedId, count);
// }
