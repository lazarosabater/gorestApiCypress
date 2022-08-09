describe('post api add user test', ()=>{

  it('post user', ()=>{
    cy.request({
      method: 'POST',
      url: '/graphql',
      headers:{
        'Authorization': "Bearer 92ca5f285b67ac3019ec8e3825eaae4e5e7210d704f90414749c1235c8e010db"
      },
      body: {"query":"mutation{createUser(input: {name: \"Prueba Cypress\" gender: \"male\" email: \"tenali.ramakrishna@15ce123.com\" status: \"active\"}) {user{id name gender email status}}}"}
    }).then((res)=>{
      cy.log(res.body)
      expect(res.status).to.eq(200);
    })
  })
})