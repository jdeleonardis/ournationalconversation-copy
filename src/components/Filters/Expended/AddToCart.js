import React, { PureComponent } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization
} from 'react-shopping-cart';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;
const bookLocalization = {
  book: 'book',
  USD: '$'
};

class ItemInCart extends PureComponent {
  state = {
    products: {},
    product: {
      name: 'book',
      id: 'book',
      path: '/shop/book/',
      prices: {
        USD: 90
      },
      currency: 'USD',
      imageSrc: 'book-cover.jpg'
    },
    getProductLocalization: getDefaultLocalization('product', 'en', {
      ...bookLocalization,
  
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      'checkoutButton',
      'en',
      bookLocalization
    ),
    getCartLocalization: getDefaultLocalization('cart', 'en', bookLocalization)
  };

  addProduct = (key, product, currency) =>
    void this.setState(
      ({
        products: { [key]: cartProduct = { quantity: 0 }, ...restOfProducts }
      }) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity: product.quantity + cartProduct.quantity
          }
        }
      })
    );

  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join('_')}`;
  render() {
    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state
    } = this;

    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product
    } = state;

    const checkoutButtonElement = (
      <CheckoutButtonComponent
        grandTotal={500}
        hidden={false}
        checkoutURL='/checkout'
        currency='USD'
        getLocalization={getCheckoutButtonLocalization}
      />
    );
    return (
      <div className='container'>
        <ProductComponent
          {...product}
  
          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
            // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />

        
      </div>
    );
  }
}

export default ItemInCart;