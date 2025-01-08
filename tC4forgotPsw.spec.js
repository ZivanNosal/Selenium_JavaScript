//Skeleton generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
//const assert = require('assert')

describe('TC4 forgotten password', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC4 forgotten password', async function() {
    await driver.get("https://proxy-portal-test.web.app/")
    await driver.manage().window().setRect({ width: 1050, height: 847 })
    await driver.wait(until.elementLocated(By.xpath("//button[contains(.,\'Forgot\')]")), 30000).click()
    await driver.findElement(By.css("#email")).sendKeys("admin@proxyqb.com")
    //or: await driver.findElement(By.id("email")).sendKeys("admin@proxyqb.com")
    await driver.findElement(By.xpath("//button[contains(.,\'Reset\')]")).click()
    //optional - message form, general: await driver.wait(until.elementLocated(By.css(".MuiAlert-message")), 30000)
    await driver.wait(until.elementLocated(By.xpath("//form[contains(.,\'Check your email\')]")), 30000)
  })
})
