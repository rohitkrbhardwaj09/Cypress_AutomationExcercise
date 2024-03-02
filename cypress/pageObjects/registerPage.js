class registerPage {

    txtName = "input[placeholder='Name']";
    txtEmail = "input[data-qa='signup-email']";
    signUpBtn = "button[data-qa='signup-button']";
    checkTitle = "div[class='radio-inline'] input[type='radio']";
    dobDate = "#days";
    dobMonth = "#months";
    dobYear = "#years";
    newsletter = "#newsletter";
    offers = "#optin";

    first_name = "#first_name"
    last_name = "#last_name"
    company = "#company"
    address = "#address1"
    address2 = "#address2"
    country = "#country"
    state = "#state"
    city = "#city"
    zipcode = "#zipcode"
    mobileNumber = "#mobile_number"
    create_account = "button[data-qa='create-account']"
    accountStatus = "h2[class='title text-center'] b"
    verifyUsername = "li:nth-child(10) a:nth-child(1)"

    getName(name) {
        cy.get(this.txtName).type(name)
    }

    getEmail(email) {
        cy.get(this.txtEmail).type(email)
    }

    clickOnSignUpBtn() {
        cy.get(this.signUpBtn).click()
    }

    getUserTitle(targetValue) {
        cy.get("div[class='radio-inline'] input[value='" + targetValue + "']").check()
    }

    getPasswordBox(pswrd){
        cy.get("#password").type(pswrd)
    }

    selectDate(date) {
        cy.get(this.dobDate).select(date)
    }

    selectMonth(month) {
        cy.get(this.dobMonth).select(month)
    }

    selectYear(year) {
        cy.get(this.dobYear).select(year)
    }

    checkNewsletter() {
        cy.get(this.newsletter).check()
    }

    checkOffer() {
        cy.get(this.offers).check()
    }

    getFirstName(fname) {
        cy.get(this.first_name).type(fname)
    }

    getLastName(lname) {
        cy.get(this.last_name).type(lname)
    }

    getCompany(comp) {
        cy.get(this.company).type(comp)
    }

    getAddress(add) {
        cy.get(this.address).type(add)
    }

    getAddress2(add2) {
        cy.get(this.address2).type(add2)
    }

    getCountry(countryName) {
        cy.get(this.country).select(countryName)
    }

    getState(stateName) {
        cy.get(this.state).type(stateName)
    }

    getCity(cityName) {
        cy.get(this.city).type(cityName)
    }

    getZipcode(zip) {
        cy.get(this.zipcode).type(zip)
    }
    getMobileNumber(number) {
        cy.get(this.mobileNumber).type(number)
    }

    createAccountBtn(){
        cy.get(this.create_account).click()
    }

    accountStatus(status){
        cy.get("h2[class='title text-center'] b").contains(status)
    }

    verifyUsername(){
        cy.get(this.verifyUsername)
    }

}
export default registerPage;