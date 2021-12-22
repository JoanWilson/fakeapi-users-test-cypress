import * as GETUsers from '../requests/GETUsers.request'

describe('GET Users', () => {
    it('Listar todos os usuários', () => {
        GETUsers.allUsers().should((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    });
})
