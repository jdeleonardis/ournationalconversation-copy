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

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const bookLocalization = {
  // color: 'Color',
  // book: 'book case',
  // red: 'Red',
  // green: 'Green',
  // yellow: 'Yellow',
  // GBP: '£',
  // EUR: '€',
  book:'book',
  USD: '$'
};

const bookPropertiesWithAdditionalCostLocalization = {
  yellow: 'Yellow (+{cost}{localizedCurrency})'
};

class ItemInCart extends PureComponent {
  state = {
    products: {},
    product: {
      name: 'book',
      id: 'book',
      path: '/shop/book/',
      // properties: {
      //   color: [
      //     'red',
      //     'green',
      //     {
      //       additionalCost: {
      //         GBP: 1,
      //         EUR: 2,
      //         USD: 3.5
      //       },
      //       value: 'yellow'
      //     }
      //   ]
      // },
      // propertiesToShowInCart: ['color'],
      prices: { 
        // GBP: 70, EUR: 80, 
        USD: 90 },
      currency: 'USD',
      imageSrc: 'book-cover.jpg'
    },
    getProductLocalization: getDefaultLocalization('product', 'en', {
      ...bookLocalization,
      ...bookPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      'checkoutButton',
      'en',
      bookLocalization
    ),
    getCartLocalization: getDefaultLocalization(
      'cart',
      'en',
      bookLocalization
    )
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

  updateProduct = (key, updatedProduct) => void console.log(':)');

  removeProduct = (key) => void console.log(':C');

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
          checkoutButton={checkoutButtonElement}
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

        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={getCartLocalization}
          currency='USD'
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={checkoutButtonElement}
          isCartEmpty={false}
          getLocalization={getCartLocalization}
        />
      </div>
    );
  }
}

export default ItemInCart;
