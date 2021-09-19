/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    
    open() {
        return browser.url('http://localhost:3000/')
    }

    getAppName() {return $('[data-testid="app-name"]')}
    async getAppNameText() { return await this.getAppName().getText()}
}
