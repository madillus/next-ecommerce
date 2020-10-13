import cookie from 'js-cookie';

export function getCartConditionFromCookie() {
  const cart = cookie.getJSON('cart') || [];
  return cart;
}

export function addToCartFromCookie(id) {
  const cart = getCartConditionFromCookie();

  let newCart;

  if (cart.includes(id)) {
    newCart = cart.filter((updated) => updated !== id);
  } else {
    newCart = [...cart, id];
  }

  cookie.set('cart', newCart);

  return newCart;
}
