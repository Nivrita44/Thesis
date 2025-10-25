// Configuration for Magento2 Demo website tests
export const websiteURL = 'https://magento2demo.firebearstudio.com/';
export const TIMEOUT = 30000; // 30 seconds timeout

// Elements for Magento2 Demo website
export const elements = {
  // Account creation and login elements
  menuButton: '//*[@id="html-body"]/div[2]/header/div[2]/span',
  accountButton: '//*[@id="html-body"]/div[2]/div/div/div[3]/a',
  createAccountLink: '//*[@id="idZ1AaMwcy_mobile"]',
  signInLink: '//*[@id="store.links"]/ul/li[2]/a',
  signOutLink: '//*[@id="store.links"]/ul/li[2]/div/ul/li[3]/a',
  
  // Account form fields
  firstNameField: 'firstname',
  lastNameField: 'lastname',
  newsletterCheckbox: 'is_subscribed',
  assistanceCheckbox: 'assistance_allowed_checkbox',
  emailAddressField: 'email_address',
  passwordField: 'password',
  confirmPasswordField: 'password-confirmation',
  submitButton: '//*[@id="send2"]',
  
  // Login form fields
  emailField: 'email',
  passField: 'pass',
  
  // Navigation elements
  womenButton: 'ui-id-3',
  topsLink: '//*[@id="ui-id-4"]/span[2]',
  
  // Product elements
  product: '//*[@id="product-item-info_1812"]/div/strong/a',
  product2: '//*[@id="product-item-info_1796"]/a/span/span',
  sizeOption: 'option-label-size-144-item-167',
  colorOption: 'option-label-color-93-item-57',
  colorOption2: 'option-label-color-93-item-49',
  quantityField: 'qty',
  addToCartButton: 'product-addtocart-button',
  addToWishlistButton: '//*[@id="maincontent"]/div[2]/div/div[1]/div[6]/div/a[1]/span',
  addToCompareButton: '//*[@id="maincontent"]/div[2]/div/div[1]/div[6]/div/a[2]/span',
  notificationMessage: '//*[@id="maincontent"]/div[1]/div[2]/div/div/div',
  comparisonListLink: '//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a',
  
  // Checkout elements
  checkoutButton: '//*[@id="html-body"]/div[2]/header/div[2]/div[1]/a',
  proceedToCheckoutButton: 'top-cart-btn-checkout',
  
  // Checkout form fields
  checkoutFirstName: 'O4S6RKS',
  checkoutLastName: 'JAW3Y9O',
  checkoutCompany: 'NRXP3WJ',
  checkoutAddress: 'LBYB8NS',
  checkoutCountry: 'N01L844',
  checkoutState: 'BR0O989',
  checkoutCity: 'IM0XOFX',
  checkoutZip: 'NGAEMQ0',
  checkoutPhone: 'IVQASST',
  shippingMethod: '//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input',
  nextButton: '//*[@id="shipping-method-buttons-container"]/div/button',
  placeOrderButton: '//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[4]/div/button',
  confirmationText: '//*[@id="maincontent"]/div[1]/h1/span',
  
  // Review elements
  reviewButton: 'tab-label-reviews-title',
  ratingOption: 'Rating_1_label',
  summaryField: 'summary_field',
  reviewField: 'review_field',
  submitReviewButton: '//*[@id="review-form"]/div/div/button',
  
  // Subscribe elements
  subscribeField: 'newsletter',
  subscribeButton: '//*[@id="newsletter-validate-detail"]/div[2]/button'
};

// Test data
export const accountData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'test' + Math.floor(Math.random() * 10000) + '@example.com',
  password: 'Test@123456',
  company: 'Test Company',
  address: '123 Test Street',
  country: 'United States',
  state: 'New York',
  city: 'New York',
  zip: '10001',
  phone: '1234567890',
  reviewSummary: 'Great product',
  reviewText: 'This is an excellent product. I highly recommend it to everyone.'
};

// URLs for verification
export const verificationURLs = {
  accountCreation: 'customer/account/',
  login: 'https://magento2demo.firebearstudio.com/',
  wishlist: 'wishlist',
  checkout: 'checkout/#shipping',
  productCompare: 'product_compare'
};

// Messages for verification
export const verificationMessages = {
  addToCart: 'You added',
  comparisonList: 'comparison list',
  reviewSubmission: 'You submitted your review for moderation',
  subscription: 'Thank you for your subscription',
  purchaseConfirmation: 'Thank you for your purchase'
};