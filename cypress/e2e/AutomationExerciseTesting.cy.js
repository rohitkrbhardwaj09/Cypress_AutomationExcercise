import registerPage from "../pageObjects/registerPage"
describe("Test AutomationExercise.com", () => {
    // 1. Launch browser

    before(function () {
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit(Cypress.env('url'))

        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible')

        cy.fixture('data1.json').then(function (data) {
            this.data = data;
        })
    })


    it("should register a new user", function () {

        const rg = new registerPage();

        // 4. Click on 'Signup / Login' button
        cy.clickLink('Signup / Login');

        // 5. Verify 'New User Signup!' is visible
        cy.contains("New User Signup!").should('be.visible')

        // 6. Enter name and email address
        rg.getName(this.data.user1.fname + " " + this.data.user1.lname)
        rg.getEmail(this.data.user1.email)

        // 7. Click 'Signup' button
        rg.clickOnSignUpBtn()

        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > b:nth-child(1)").contains("Enter Account Information").should('be.visible')

        // 9. Fill details: Title, Name, Email, Password, Date of birth
        rg.getUserTitle(this.data.user1.title)
        rg.getPasswordBox(this.data.user1.password)
        rg.selectDate(this.data.user1.date)
        rg.selectMonth(this.data.user1.month)
        rg.selectYear(this.data.user1.year)

        // 10. Select checkbox 'Sign up for our newsletter!'
        rg.checkNewsletter()

        // 11. Select checkbox 'Receive special offers from our partners!'
        rg.checkOffer()

        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        rg.getFirstName(this.data.user1.fname)
        rg.getLastName(this.data.user1.lname)
        rg.getCompany(this.data.user1.company)
        rg.getAddress(this.data.user1.address1)
        rg.getAddress2(this.data.user1.address2)
        rg.getCountry(this.data.user1.country)
        rg.getState(this.data.user1.state)
        rg.getCity(this.data.user1.city)
        rg.getZipcode(this.data.user1.zipcode)
        rg.getMobileNumber(this.data.user1.number)

        // 13. Click 'Create Account button'
        rg.createAccountBtn();

        // 14. Verify that 'ACCOUNT CREATED!' is visible
        cy.get("h2[class='title text-center'] b").contains('ACCOUNT CREATED!').should('be.visible')

        // 15. Click 'Continue' button
        cy.clickLink('Continue')

        // 16. Verify that 'Logged in as username' is visible
        
        cy.get("li:nth-child(10) a:nth-child(1)").contains("Logged in as "+rg.getName()).should('be.visible')

        // 17. Click 'Delete Account' button
        cy.clickLink('Delete Account')

        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get("h2[class='title text-center'] b").contains('ACCOUNT DELETED!').should('be.visible')
        cy.clickLink("Continue")
    })


})