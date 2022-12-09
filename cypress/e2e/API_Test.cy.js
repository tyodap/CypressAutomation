/// <reference types="Cypress" />

const host = 'https://jsonplaceholder.typicode.com/posts'

describe ('API', () => {
    //This request is to get and assert the data type of the response
    it('API', () => {
        cy.request({
            method: 'GET',
            url: host
        }).then(response => {
            expect(response.status).to.eq(200)
            assert.isNumber(response.body[0].userId)
            assert.isNumber(response.body[0].id)
            assert.isString(response.body[0].title)
            assert.isString(response.body[0].body)
            cy.log(JSON.stringify(response.body[0]))
        })
    })

    //This request is to POST and assert the data is correct like body request
    it('API 2', () => {
        cy.request({
            method: 'POST',
            url: host,
            body: {
                "title": "recommendation",
                "body": "motorcycle",
                "userId": 12
            }
        }).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq('recommendation')
            expect(response.body.body).to.eq('motorcycle')
            expect(response.body.userId).to.eq(12)
            cy.log(JSON.stringify(response.body))
        })
    })
})