export const websiteURL = "https://demoqa.com/text-box";
export const TIMEOUT = 15000;

// Form field values
export const formValues = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  currentAddress: "123 Main Street, Apt 4B",
  permanentAddress: "456 Oak Avenue, Suite 7C"
};

// Element IDs and selectors
export const elements = {
  // 1. Text Box Form
  textBoxMenuItem: "item-0",
  fullName: "userName",
  email: "userEmail",
  currentAddress: "currentAddress",
  permanentAddress: "permanentAddress",
  submitButton: "submit",
  outputSection: "output",
  
  // 2. Check Box
  checkBoxMenuItem: "item-1",
  homeCheckbox: "rct-checkbox", // Updated selector
  expandButton: "rct-collapse rct-collapse-btn", // Added expand button
  checkboxResult: "display-result", // Added result display
  
  // 3. Radio Button
  radioButtonMenuItem: "item-2",
  yesRadio: "yesRadio",
  impressiveRadio: "impressiveRadio", // Added alternative radio
  radioResult: "text-success", // Added result display
  
  // 4. Web Tables
  webTablesMenuItem: "item-3",
  addNewRecordButton: "addNewRecordButton",
  webTable: "rt-table", // Added table selector
  
  // 5. Web Tables Form
  firstName: "firstName",
  lastName: "lastName",
  userEmail: "userEmail",
  age: "age",
  salary: "salary",
  department: "department",
  
  // 6. Search Box
  searchBox: "searchBox",
  searchIcon: "//span[@class='input-group-text']//i", // Added XPath for search icon
  
  // 7. Edit Record
  editRecord1: "//span[@title='Edit']", // Updated to XPath
  
  // 8. Delete Record
  deleteRecord2: "//span[@title='Delete']", // Updated to XPath
  
  // 9. Buttons
  buttonsMenuItem: "item-4",
  doubleClickBtn: "doubleClickBtn",
  doubleClickMessage: "doubleClickMessage", // Added message element
  
  // 10. Right Click
  rightClickBtn: "rightClickBtn",
  rightClickMessage: "rightClickMessage" // Added message element
};

// Form data for adding a new record
export const newRecordData = {
  firstName: "Alice",
  lastName: "Smith",
  email: "alice.smith@example.com",
  age: "30",
  salary: "50000",
  department: "QA"
};

// Search term for searching records
export const searchTerm = "Alice";

// Edit record data
export const editRecordData = {
  firstName: "Bob",
  lastName: "Johnson",
  email: "bob.johnson@example.com",
  age: "35",
  salary: "60000",
  department: "Development"
};