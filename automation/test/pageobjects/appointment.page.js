
class AppointmentPage {

    getAppointmentBox(index) { return $(`[data-testid="appointment${index}"]`) }
    getDetails(index, name) { return this.getAppointmentBox(index).$(`[data-testid=${name}]`) }
    getDeleteButton(index) { return this.getAppointmentBox(index).$('[data-testid="btn-delete"]') }
    getDynamicTitle() { return $('[data-testid="dynamic-title"]') }


    async getDetailText(index, name) { return await this.getDetails(index, name).getText() }
    async getDynamicTitleText() { return await this.getDynamicTitle().getText() }


}

module.exports = new AppointmentPage()