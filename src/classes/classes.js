class Store{
    constructor(){
        
    }
    //Login and Logout
    Login(loginAs,username,passowrd)
    {
        const response = null;
        //Get data
        if(response.status===200)
        {
            if(loginAs=="SALESPERSON"){
                this.Employee = new Salesperson();
            }
            else if(loginAs=="CASHIER"){
                this.Employee = new Cashier();
            }
            else if(loginAs=="MANAGER"){
                this.Employee = new Manager();
            }
           // Store Employee Token and Session
           // this.Employee.setEmployeeToken(response.token);
           // this.Employee.setEmployeeDetails(response.PersonalDetails);
        }
    }
    Logout(){
        delete this.Employee;
    }
    //Booking
    verifyBlackList(CNIC){
        const VerifyBlackListHandler = new VerifyBlackListHandler();
        const Authentication = VerifyBlackListHandler.authenticateCustomer();
        delete VerifyBlackListHandler;
        return Authentication;
    }
    initiateBooking(CNIC){
        this.BookProductHandler = new BookProductHandler();
        this.BookProductHandler.initiateBooking(CNIC);
    }
    setProduct(id){
        return this.BookProductHandler.setProduct(id);
    }
    confirmBooking(){
        this.BookProductHandler.confirmBooking();
    }
    generateBookingChallan(id){
        const challan = this.BookProductHandler.getChallan(id);
        delete this.BookProductHandler;
    }
    //Payment
    verifyChallan(challanID){
        const verifyChallanHandler = new verifyChallanHandler();
        const data = verifyChallanHandler.verifyChallan(challanID);
        delete verifyChallanHandler;
        return data;
    }
    initiatePayment(){
        this.makePaymentHandler = new makePaymentHandler();
        this.makePaymentHandler.initiatePayment();
    }
    setAmountPaid(amount){
        return this.makePaymentHandler.setAmountPaid(amount);
    }
    confirmPayment(){
        this.makePaymentHandler.confirm();
    }
    generatePaymentReceipt(id){
        const receipt = this.makePaymentHandler.getReceipt(id);
        delete this.makePaymentHandler;
        return receipt;
    }
    //Add Complaint
    verifyReceipt(receiptID){
        const verifyReceiptHandler = new verifyReceiptHandler();
        const receipt = verifyReceiptHandler.getReceipt(receiptID);
        delete verifyReceiptHandler;
        return receipt;
    }
    initiateComplaint(receiptID){
        this.LaunchComplaintHandler = new LaunchComplaintHandler();
        this.LaunchComplaintHandler.initiateComplaint(receiptID);
    }
    setComplaint(subject,complaint){
        this.LaunchComplaintHandler.setComplaint(subject,complaint);
    }
    submitComplaint(){
        const response = this.LaunchComplaintHandler.submit();
        return response;
    }
    generateComplaintReceipt(id){
        const receipt = this.LaunchComplaintHandler.getReceipt(id);
        delete this.LaunchComplaintHandler;
        return receipt;
    }
}

class Challan
{
    constructor(){
        
    }
    initiateChallan()
    {
        this.challanId = null;
        this.totalAmount = null;
        this.paidAmount = null;
        this.dueDate = null;
        this.challanType = null;
        this.status = "UNPAID";
    }
    setChallan(){

    }
}
class FineChallan extends Challan{
    constructor(){
       super();
    }
    initiateChallan(){
        this.challanId = null;
        this.totalAmount = null;
        this.paidAmount = null;
        this.dueDate = null;
        this.returnId = null;
        this.challanType = "FINE";
    }
    setChallan(){

    }
}
class BookingChallan extends Challan
{    
    initiateChallan(){
        this.challanId = null;
        this.totalAmount = null;
        this.paidAmount = null;
        this.dueDate = null;
        this.bookingId = null;
        this.challanType = "BOOKING";

    }
    setChallan(){

    }
}
class makeChallanHandler
{   
    constructor(){

    }
    initiateFineChallan(returnid){
        this.challan = new FineChallan();
        this.challan.initiateChallan(returnid);
    }
    initiateRentChallan(bookingid){
        this.challan = new BookingChallan();
        this.challan.initiateChallan(bookingid);
    }
    setFineChallan(details){
        //setChallan
    }
    setRentChallan(details){
        //setChallan
    }
    getChallan(challanId){
        //get type

      //  this.challan = new Challan();

        //this.challan.getChallan(challanId);
    }
}
class Ledger{
    costructor(){
        this.number = null;
    }
    setLedger(){
        //get ledger number from db handler
        //store in this.number
    }
    logpayment(NewPayment){
        //store payment details in ledger document
        //return record id
    }

}
class Product{
    constructor(){

    }
    setProduct(productId,quanity){
        this.productId = productId;
        this.quanity = quanity;
        this.productDescription = null;
    }
    setProductDescription(description){
        this.productDescription = new ProductDescription();
    }
    getProductDescription(){
        return this.productDescription;
    }
    addProduct(){
        //store product by db handler
    }
    updateProduct(updatedProduct){
        //updateProduct from db handler
    }
    updateProductDescription(description){
        //reload the description
        //store in description
        //update description
    }
}
class ProductDescription{
    constructor(){

    }
    setProductDescription(){
        category = "NONE";
        rentCharges = 0;
        maxDayLimit = 0;
        finePerDay = 0;
        instructions = "";
        thumbnail = "";
    }
}
class ProductCatalogue{
    constructor(){

    }
    setProductCatalogue(){
        const res = null;
        this.ProductList = new Product[res.data.length];
        for(let i=0;i<res.data.length;i++){
            this.ProductList[i].setProduct(res.productId,res.quanity);
            this.ProductList[i].setProductDescription();
        }
    }
}
class addProductHandler{
    constructor(){

    }
    initiateProduct(){
        this.newProduct = new Product();
    }
    setProductDescription(description){

    }
    setProductQuantity(n){

    }

}
class updateProduct{
    constructor(){

    }
    verifyProduct(id){

    }
    initiateProductUpdate(id){
        this.Product = new Product();
        this.Product.initiate();
        this.Product.setProduct(id);
        this.Product.getProductDescription();
    }
    incrementQuanityBy(n){

    }
    decrementProductQuantityBy(n){

    }
    setAvailability(status){

    }
    setDescription(description){

    }
}
class Booking{
    constructor(){
        
    }
    initiateBooking(){
        this.bookingID = null;
        this.totalRent = null;
        this.quantity = null;
        this.Product = null;
        this.BookingDate = null;
        this.ChallanIssued = null;
        this.Status = null;
    }
    setProduct(id,quantity){
        //search product
    }
    getBooking(id){
        //get booking
    }
    addBooking(){

    }
    cancelBooking(){

    }
    makeChallan(){

    }
    calculateRent(){

    }
    getChallan(id){

    }
}
class Customer
{
    constructor()
    {
        
    }
    setCustomer(name,nationaility,city,street,postalCode,dateOfBirth,cnic,phoneNo,status){
        this.id = "";
        this.name = name;
        this.nationaility = nationaility;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
        this.dateOfBirth = dateOfBirth;
        this.cnic = cnic;
        this.phoneNo = phoneNo;
        this.status = status;
    }
    getCustomer(cnic){
        let response = null;
        this.id = response.id;
        this.name = response.name;
        this.nationaility = response.nationaility;
        this.city = response.city;
        this.street = response.street;
        this.postalCode = response.postalCode;
        this.dateOfBirth = response.dateOfBirth;
        this.cnic = response.cnic;
        this.phoneNo = response.phoneNo;
        this.status = response.status;
    }
    storeCustomer(){
        //store and return id;
    }
}
class Defaulter{
    constructor()
    {

    }
    getDefaulter(defaulterDate,CustomerDetail){
        const res = CustomerDetail;
        this.Customer = new Customer();
        this.Customer.setCustomer(res.name,res.nationaility,res.city,res.street,res.postalCode,res.dateOfBirth,res.cnic,res.phoneNo,res.status)
        this.defaultedDate = defaulterDate;
    }
    isDefaulter(Cnic){
        //search in list and return status
    }
}
class BlackList{
    constructor(){

    }   
    getDefaulterList(){
        const res = null;
        this.Blacklist = new Defaulter[res.data.length];
        for(let i=0;i<res.data.length;i++){
            this.Blacklist[i].setDefaulter(res.data.defaulterDate,res.data.CustomerDetail)
        }
    }
    searchDefaulter(cnic){

    }
}
class VerifyBlackListHandler{
    constructor(){

    }
    getIfDefaulter(cnic){
        const Blacklist = new BlackList();
        BlackList.getDefaulterList();
        return BlackList.searchDefaulter(cnic);
    }
}
class BookProductHandler
{
    constructor(){
        
    }
    verifyCustomer(cnic){

    }
    initiateBooking(cnic){

    }
    setProduct(id){

    }
    confirmBooking(){

    }
    generateChallan(id){

    }
    generateReceipt(id){

    }
}
class ReturnProductHandler{
    constructor(){

    }
    verifyCustomer(cnic){

    }
    initiateReturn(){

    }
    verifyRentalProduct(receipt){

    }
    confirmReturn(){

    }
    generateChallan(){

    }
    generateReceipt(){

    }
}
class RentProductHandler{
    constructor(){

    }
    verifyCustomer(cnic){

    }
    initiateRent(){

    }
    verifyPayment(id){

    }
    confirmRented(){

    }
    generateReceipt(){

    }
}
class LaunchComplaintHandler{
    constructor(){

    }
    verifyReceipt(receiptId){

    }
    initiateNewComplaint(){

    }
    enterComplaint(subject,complaint){

    }
    submitComplaint(){

    }
    generateReceipt(){

    }
}
class Complaint{
    constructor(){

    }
    initiateComplaint(){
        this.complaintId = "";
        this.subject = "";
        this.complaint = "";
        this.receiptId = "";
    }
}
class Employee{
    constructor(){

    }
    initiateEmployee(){
        this.email = null;
        this.address = null;
        this.jobTite = null;
    }
}
class Salesperson extends Employee{
    constructor(){
        super();
    }
}
class Cashier extends Employee{
    constructor(){
        super();
    }
}
class Manager extends Employee{
    constructor(){
        super();
    }
}
class Receipt{
    
}
class BookingReceipt extends Receipt{

}
class PaymentReceipt extends Receipt{

}
class ReturnReceipt extends Receipt{

}
class ComplaintReceipt extends Receipt{

}
class Payment{
    constructor(){
        this.total = null;
        this.paidAmount  = null;
        this.paidDate = null;
        this.challanId = null;
    }
}
class CashPayment extends Payment{
    constructor(){
        super();
        this.returnAmount = null;
    }
}
class CreditCardPayment extends Payment{
    constructor(){
        super();
        this.cardNumber = null;
        this.serviceCharges = null;
        this.CardType = null;
    }
}
class makePaymentHandler{
    constructor(){

    }
    verifyChallan(id){

    }
    initiatePayment(id,methodDetails){

    }
    setAmountPaid(amount){
        
    }
    confirmPayment(){

    }
    generateReceipt(id){

    }
    
}

class DB_Handler{
    constructor(){

    }
}
class MongoDB_Handler extends DB_Handler{
    constructor(){
        super();
    }
    logPayment(Payment){
        //Add payment information to ledger
    }
    updateProduct(id,product){
        //Search product
        //Update product
    }
    updateBooking(id,booking){
        //Search booking
        //Update Booking
    }
    addBooking(booking){
        //add new Booking
    }
    addComplaint(complaint){
        //Add new booking
        //return booking id
    }
    decrementProductQuantityBy(x){
        //deccrease quanity of product by x
    }
    incrementProductQuanityBy(x){
        //increase product quanity by x
    }
    addPaymentReceipt(receipt){
        //store receipt in db
    }
    addComplaintReceipt(receipt){
        //store complaint and return details
    }
    getCustomer(id){
        //get customer details
    }
    getEmployee(id){
        //get employee details except login details
    }
    loginEmployee(loginAs,username,password){
        //login employee and return login and employee details
    }
    isCustomer(cnic){
        //check if customer exists or not
    }
    isBlacklisted(cnic){
        //check if entered cnic is in blacklist
    }
    addChallan(challanDetails){
        //add new challan record
    }
    getChallan(id){
        //search challan in db and return
    }
    getReceipt(id,type){
        //search receipt in db and return
    }   
    getLedgerRecord(id){
        //getLedgerRecord at corresponding id
    }
    getBooking(id){
        //get booking details on id 
    }
    getReturn(id){

    }
    getRentedProduct(id){

    }
    getAvailableProducts(){

    }
    addProduct(details){

    }
}
class SQLDB_Handler extends DB_Handler{
    constructor(){
        super();
    }
    logPayment(Payment){
        //Add payment information to ledger
    }
    updateProduct(id,product){
        //Search product
        //Update product
    }
    updateBooking(id,booking){
        //Search booking
        //Update Booking
    }
    addBooking(booking){
        //add new Booking
    }
    addComplaint(complaint){
        //Add new booking
        //return booking id
    }
    decrementProductQuantityBy(x){
        //deccrease quanity of product by x
    }
    incrementProductQuanityBy(x){
        //increase product quanity by x
    }
    addPaymentReceipt(receipt){
        //store receipt in db
    }
    addComplaintReceipt(receipt){
        //store complaint and return details
    }
    getCustomer(id){
        //get customer details
    }
    getEmployee(id){
        //get employee details except login details
    }
    loginEmployee(loginAs,username,password){
        //login employee and return login and employee details
    }
    isCustomer(cnic){
        //check if customer exists or not
    }
    isBlacklisted(cnic){
        //check if entered cnic is in blacklist
    }
    addChallan(challanDetails){
        //add new challan record
    }
    getChallan(id){
        //search challan in db and return
    }
    getReceipt(id,type){
        //search receipt in db and return
    }   
    getLedgerRecord(id){
        //getLedgerRecord at corresponding id
    }
    getBooking(id){
        //get booking details on id 
    }
    getReturn(id){

    }
    getRentedProduct(id){

    }
    getAvailableProducts(){

    }
    addProduct(details){

    }
}
class FirebaseDB extends DB_Handler{
    constructor(){
        super();
    }
    logPayment(Payment){
        //Add payment information to ledger
    }
    updateProduct(id,product){
        //Search product
        //Update product
    }
    updateBooking(id,booking){
        //Search booking
        //Update Booking
    }
    addBooking(booking){
        //add new Booking
    }
    addComplaint(complaint){
        //Add new booking
        //return booking id
    }
    decrementProductQuantityBy(x){
        //deccrease quanity of product by x
    }
    incrementProductQuanityBy(x){
        //increase product quanity by x
    }
    addPaymentReceipt(receipt){
        //store receipt in db
    }
    addComplaintReceipt(receipt){
        //store complaint and return details
    }
    getCustomer(id){
        //get customer details
    }
    getEmployee(id){
        //get employee details except login details
    }
    loginEmployee(loginAs,username,password){
        //login employee and return login and employee details
    }
    isCustomer(cnic){
        //check if customer exists or not
    }
    isBlacklisted(cnic){
        //check if entered cnic is in blacklist
    }
    addChallan(challanDetails){
        //add new challan record
    }
    getChallan(id){
        //search challan in db and return
    }
    getReceipt(id,type){
        //search receipt in db and return
    }   
    getLedgerRecord(id){
        //getLedgerRecord at corresponding id
    }
    getBooking(id){
        //get booking details on id 
    }
    getReturn(id){

    }
    getRentedProduct(id){

    }
    getAvailableProducts(){

    }
    addProduct(details){

    }
}

