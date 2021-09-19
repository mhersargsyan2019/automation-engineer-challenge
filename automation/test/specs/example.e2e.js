const AppointmentPage = require('../pageobjects/appointment.page');
const FormPage = require('../pageobjects/form.page');

describe('Appointment managment', () => {
    it('should verify app title', async () => {
        await FormPage.open()

        const appName = await FormPage.getAppNameText()
        expect(appName).toBe('APPOINTMENT MANAGEMENT')
    });

    it('should verify form title', async () => {

        const formTitle = await FormPage.getFormTitleText()
        expect(formTitle).toBe('CREATE APPOINTMENT')
    });

    it('should verify appointment title', async () => {
        const appotmentTitle = await AppointmentPage.getDynamicTitleText()
        expect(appotmentTitle).toBe('THERE ARE NO APPOINTMENTS')
    });

    it('should verify appointment box 1', async () => {

        await FormPage.getAppointmentField('pet').setValue('Bulldog')
        await FormPage.getAppointmentField('owner').setValue('Mher')
        await FormPage.getAppointmentField('date').setValue('09272021')
        await FormPage.getAppointmentField('time').setValue('0720PM')
        await FormPage.getAppointmentField('symptoms').setValue('Headach')

        await FormPage.getAddAppointmentButton().click()

        await AppointmentPage.getAppointmentBox(1).isDisplayed()
    
    });

    it('should verify appointment title with appointment', async () => {
        const appotmentTitle = await AppointmentPage.getDynamicTitleText()
        expect(appotmentTitle).toBe('MANAGE YOUR APPOINTMENTS')
    });

    it('should verify appointment box 2', async () => {
        await FormPage.getAppointmentField('pet').setValue('TestDog')
        await FormPage.getAppointmentField('owner').setValue('Mike')
        await FormPage.getAppointmentField('date').setValue('08272021')
        await FormPage.getAppointmentField('time').setValue('0820PM')
        await FormPage.getAppointmentField('symptoms').setValue('Stomachach')

        await FormPage.getAddAppointmentButton().click()

        await AppointmentPage.getAppointmentBox(2).isDisplayed()

    });

    it('should verify appointment box 1 details', async () => {
        const petName = await AppointmentPage.getDetailText(1, 'pet')
        const owner = await AppointmentPage.getDetailText(1, 'owner')
        const date = await AppointmentPage.getDetailText(1, 'date')
        const time = await AppointmentPage.getDetailText(1, 'time')
        const symptoms = await AppointmentPage.getDetailText(1, 'symptoms')

        expect(petName).toBe('Bulldog')
        expect(owner).toBe('Mher')
        expect(date).toBe('2021-09-27')
        expect(time).toBe('19:20')
        expect(symptoms).toBe('Headach')
    });

    it('should verify appointment box 2 details', async () => {
        const petName = await AppointmentPage.getDetailText(2, 'pet')
        const owner = await AppointmentPage.getDetailText(2, 'owner')
        const date = await AppointmentPage.getDetailText(2, 'date')
        const time = await AppointmentPage.getDetailText(2, 'time')
        const symptoms = await AppointmentPage.getDetailText(2, 'symptoms')

        expect(petName).toBe('TestDog')
        expect(owner).toBe('Mike')
        expect(date).toBe('2021-08-27')
        expect(time).toBe('20:20')
        expect(symptoms).toBe('Stomachach')
    });

    it('should verify appointment box delet button', async () => {

        await AppointmentPage.getDeleteButton(1).click()
        await AppointmentPage.getDeleteButton(1).click()
        const appointmentBox1 = await AppointmentPage.getAppointmentBox(1).isDisplayed()
        const appointmentBox2 = await AppointmentPage.getAppointmentBox(2).isDisplayed()

        expect(appointmentBox1).not.toBe(true)
        expect(appointmentBox2).not.toBe(true)
    });

    it('should verify pet field empty', async () => {

        await FormPage.open()
        await FormPage.getAppointmentField('owner').setValue('Mher')
        await FormPage.getAppointmentField('date').setValue('09272021')
        await FormPage.getAppointmentField('time').setValue('0720PM')
        await FormPage.getAppointmentField('symptoms').setValue('Headach')

        await FormPage.getAddAppointmentButton().click()

        await FormPage.getFormAlert().isDisplayed()
        expect(await FormPage.getFormAlertText()).toBe('ALL FIELDS ARE REQUIRED')
    
    });
    it('should verify owner field empty', async () => {

        await FormPage.open()
        await FormPage.getAppointmentField('pet').setValue('Bulldog')
        await FormPage.getAppointmentField('date').setValue('09272021')
        await FormPage.getAppointmentField('time').setValue('0720PM')
        await FormPage.getAppointmentField('symptoms').setValue('Headach')

        await FormPage.getAddAppointmentButton().click()

        await FormPage.getFormAlert().isDisplayed()
        expect(await FormPage.getFormAlertText()).toBe('ALL FIELDS ARE REQUIRED')
    
    });
    it('should verify date field empty', async () => {

        await FormPage.open()
        await FormPage.getAppointmentField('pet').setValue('Bulldog')
        await FormPage.getAppointmentField('owner').setValue('Mher')
        await FormPage.getAppointmentField('time').setValue('0720PM')
        await FormPage.getAppointmentField('symptoms').setValue('Headach')

        await FormPage.getAddAppointmentButton().click()

        await FormPage.getFormAlert().isDisplayed()
        expect(await FormPage.getFormAlertText()).toBe('ALL FIELDS ARE REQUIRED')
    
    });
    it('should verify time field empty', async () => {

        await FormPage.open()
        await FormPage.getAppointmentField('pet').setValue('Bulldog')
        await FormPage.getAppointmentField('owner').setValue('Mher')
        await FormPage.getAppointmentField('date').setValue('09272021')
        await FormPage.getAppointmentField('symptoms').setValue('Headach')

        await FormPage.getAddAppointmentButton().click()

        await FormPage.getFormAlert().isDisplayed()
        expect(await FormPage.getFormAlertText()).toBe('ALL FIELDS ARE REQUIRED')
    
    });

    it('should verify symptoms field empty', async () => {

        await FormPage.open()
        await FormPage.getAppointmentField('pet').setValue('Bulldog')
        await FormPage.getAppointmentField('owner').setValue('Mher')
        await FormPage.getAppointmentField('date').setValue('09272021')
        await FormPage.getAppointmentField('time').setValue('0720PM')

        await FormPage.getAddAppointmentButton().click()

        await FormPage.getFormAlert().isDisplayed()
        expect(await FormPage.getFormAlertText()).toBe('ALL FIELDS ARE REQUIRED')
    
    });

});


