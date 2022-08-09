describe('get api user test', ()=>{

  it('ger users', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers:{
        'Authorization': "Bearer 1847275968af013ed4fd5a74cc2407a6e7b8e31fe5e8830f38c4251c2e385c45"
      }
    }).then((res)=>{
      expect(res.status).to.eq(200);
      cy.log(res);
      expect(res.body[0].name).to.eq("Chandraketu Embranthiri");
    })
  })
})