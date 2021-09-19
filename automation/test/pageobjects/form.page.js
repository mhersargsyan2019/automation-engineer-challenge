const Page = require('../pageobjects/page')



class FormPage extends Page {

    getForm() { return $('[data-testid="form"]') }
    getFormTitle() { return $('[data-testid="Title"]') }
    getFormAlert() { return $('[data-testid="alert"]') }
    getAddAppointmentButton() { return $('[data-testid="btn-submit"]') }
    getAppointmentField(name) { return this.getForm().$(`[data-testid=${name}]`) }

    async getFormTitleText() { return await this.getFormTitle().getText() }
    async getFormAlertText() { return await this.getFormAlert().getText() }

    async open() {
        await super.open()
    }

}

module.exports = new FormPage()