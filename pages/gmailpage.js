let gmailPage= function(){

    //elements

    let emailAddress=element(by.id('identifierId'))
    let emailNextButton=element(by.css("span[jsname='V67aGc']"))
    let password=element(by.css("input[type=password]"))
    let pwdNextButton=element(by.css("span[jsname='V67aGc'"))

    let compose=element(by.xpath("//div[@class='T-I T-I-KE L3' and @role='button']"))
    //let newMsg=element(by.xpath("//div[@class='nH']//descendant::span[text()='New Message']"))
    let emailTo=element(by.xpath("//input[@class='wA']/following-sibling::textarea[@class='vO']"))
    let emailSubject=element(by.xpath("//input[@class='aoT']"))
    let emailBody=element(by.xpath("//div[@role='textbox' and @aria-label='Message Body']"))

    let sendButton=element(by.xpath("//div[@role='button' and @aria-label='Send ‪(Ctrl-Enter)‬']"))
    //let sentConfirmtion=element(by.xpath("//span[@class='aT']/child::span[@class='bAq']"))

    //logout
    var logoutIcon=element(by.xpath("//a[@class='gb_C gb_Ma gb_h']"))
    var logoutButton=element(by.xpath("//a[text()='Sign out of all accounts' or text()='Sign out']"))
    var EC = protractor.ExpectedConditions;
    //methods

    this.openGmailLogin=function(url){
      browser.waitForAngularEnabled(false)
      browser.get(url)
    }

    this.enterEmailAddres=function(email){
        emailAddress.sendKeys(email)
    }

    this.clickOnEmailNextButton=function(){
        emailNextButton.click()
        //browser.wait(EC.elementToBeClickable(pwdNextButton), 15000)
        browser.sleep(5000);
    }


    this.enterPassword=function(pwd){
        password.sendKeys(pwd)
    }

    this.clickOnPwdNextButton=function(){
        // Waits for the element with id 'pwd' to be clickable.
        //browser.wait(EC.elementToBeClickable(pwdNextButton), 5000)
        pwdNextButton.click()
        browser.wait(EC.visibilityOf(compose), 180000)
    }

    this.composeNewEmail=function(subject,body,toperson){
        compose.click()
        browser.wait(EC.visibilityOf(emailTo),180000)
        emailTo.sendKeys(toperson)
        emailSubject.sendKeys(subject)
        emailBody.sendKeys(body)
        sendButton.click()
        browser.manage().timeouts().implicitlyWait(180000);
        browser.sleep(10000)
    }
    
    this.logout=function(){
        logoutIcon.click()
        logoutButton.click()
        browser.manage().timeouts().implicitlyWait(180000);
        browser.sleep(10000)
    }

}
module.exports=new gmailPage()