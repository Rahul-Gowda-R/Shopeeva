// Cart functionality
let cart = [];
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');
const totalAmountElement = document.getElementById('total-amount');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const price = parseFloat(button.getAttribute('data-price'));

    // Add to cart array
    cart.push({ product, price });
    cartCount++;

    // Update cart count
    cartCountElement.textContent = cartCount;

    // Update total amount
    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);
  });
});

// Handle payment form submission
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const paymentMethod = document.getElementById('payment-method').value;
  const totalAmount = parseFloat(totalAmountElement.textContent);

  if (totalAmount > 0) {
    alert(`Payment of $${totalAmount} has been processed using ${paymentMethod}.`);
    // Clear the cart after payment
    cart = [];
    cartCount = 0;
    cartCountElement.textContent = cartCount;
    totalAmountElement.textContent = '0.00';
  } else {
    alert('Please add items to the cart before proceeding.');
  }
});
