let gmailPage=require('../pages/gmailPage.js')
let userCredentials=require('../testData/credentials.js')
let email=require('../testData/email.js')
describe('', function() {

    it('', function() {
      //gmailPage.openGmailLogin("https://mail.google.com/")
      gmailPage.enterEmailAddres(userCredentials.getUserName())
      gmailPage.clickOnEmailNextButton()

      gmailPage.enterPassword(userCredentials.getPassword())
      gmailPage.clickOnPwdNextButton()

      gmailPage.composeNewEmail(email.getSubject(),email.getBody(),email.getTo())
      gmailPage.logout()
    });
  });