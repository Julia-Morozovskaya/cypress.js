describe('Тестирование staya', function () {
    
    it('Форма логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('log');
        cy.get('.auth-form > form > [type="password"]').type('pass');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
         })

    it('Неправильный логин', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('log');
       cy.get('.auth-form > form > [type="password"]').type('pass');
       cy.get('.auth-form__submit > .s-button__content').click('');
       cy.contains('Невозможно войти с предоставленными учетными данными');
    })     
})
