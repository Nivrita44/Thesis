export const websiteURL = "https://demo.nopcommerce.com/";
export const TIMEOUT = 3000;

// User credentials
export const firstName = "Yasin";
export const lastName = "Bashar";
export const password = "Password123";
export const email = "yasin@example.com";
export const country = "India";
export const state = "Bihar";
export const city = "Patna";
export const address = "MG Road";
export const postalCode = "800001";
export const phoneNumber = "9876543210";

// Element IDs
export const elements = {
  // Registration elements
  genderMale: "gender-male",
  firstName: "FirstName",
  lastName: "LastName",
  email: "Email",
  password: "Password",
  confirmPassword: "ConfirmPassword",
  registerButton: "register-button",
  
  // Login elements
  loginButton: "button-1 login-button",
  
  // Search elements
  searchBox: "small-searchterms",
  searchButton: "button-1 search-box-button",
  
  // Cart and checkout elements
  termsOfService: "termsofservice",
  checkout: "checkout",
  billingCountry: "BillingNewAddress_CountryId",
  billingState: "BillingNewAddress_StateProvinceId",
  billingCity: "BillingNewAddress_City",
  billingAddress1: "BillingNewAddress_Address1",
  billingZip: "BillingNewAddress_ZipPostalCode",
  billingPhone: "BillingNewAddress_PhoneNumber",
  
  // Newsletter
  newsletterEmail: "newsletter-email",
  newsletterSubscribe: "newsletter-subscribe-button",
  
  // Coupon
  discountCode: "discountcouponcode",
  applyCoupon: "applydiscountcouponcode",
  
  // Cart
  cartLink: "topcartlink"
};

// XPaths
export const xpaths = {
  // Navigation
  booksCategory: "/html/body/div[6]/div[2]/ul[1]/li[5]/a",
  
  // Product interactions
  addToCart: "(//button[contains(text(),'Add to cart')])[1]",
  addToWishlist: "(//button[contains(text(),'Add to wishlist')])[1]",
  addToCompare: "(//button[contains(text(),'Add to compare list')])[1]",
  productTitle: "(//h2[@class='product-title']/a)[1]",
  
  // Footer links
  contactUs: "/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a",
  
  // Checkout process
  billingContinue: "//*[@id='billing-buttons-container']/button[2]",
  shippingMethodContinue: "//*[@id='shipping-method-buttons-container']/button",
  paymentMethodContinue: "//*[@id='payment-method-buttons-container']/button",
  paymentInfoContinue: "//*[@id='payment-info-buttons-container']/button",
  confirmOrder: "//*[@id='confirm-order-buttons-container']/button",
  
  // Account
  myAccount: "/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a",
  
  // Notifications
  closeNotification: "//*[@id='bar-notification']/div/span"
};

// Test data
export const testData = {
  searchTerm: "laptop",
  enquiry: "Hello, I'm testing Selenium automation.",
  city: "Patna",
  address: "MG Road",
  zipCode: "800001",
  phoneNumber: "9876543210",
  country: "India",
  state: "Bihar",
  couponCode: "FAKECODE"
};

// Price filter
export const priceFilter = {
  leftHandleXpath: "//*[@id='price-range-slider']/span[1]",
  rightHandleXpath: "//*[@id='price-range-slider']/span[2]",
  rightHandleOffset: -80
};