describe('Restful Booker API - Beginner Tests', () => {

  // 1. Check if the API is working
  it('Health Check', () => {
    cy.request('https://restful-booker.herokuapp.com/ping')
      .should((response) => {
        expect(response.status).to.equal(201)
      })
  })

  // 2. Create a booking
  it('Create Booking', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 120,
      depositpaid: true,
      bookingdates: {
        checkin: '2024-12-01',
        checkout: '2024-12-05'
      },
      additionalneeds: 'Breakfast'
    }).should((response) => {
      expect(response.status).to.equal(200)
    })
  })

  // 3. Get a booking by ID
  it('Get Booking ID 1', () => {
    cy.request('https://restful-booker.herokuapp.com/booking/1')
      .should((response) => {
        expect(response.status).to.equal(200)
      })
  })

  // 4. Update a booking
  it('Update Booking ID 1', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: 'admin',
      password: 'password123'
    }).then((login) => {
      const token = login.body.token

      cy.request({
        method: 'PUT',
        url: 'https://restful-booker.herokuapp.com/booking/1',
        headers: {
          Cookie: `token=${token}`
        },
        body: {
          firstname: 'Jane',
          lastname: 'Smith',
          totalprice: 150,
          depositpaid: false,
          bookingdates: {
            checkin: '2024-12-10',
            checkout: '2024-12-15'
          },
          additionalneeds: 'Lunch'
        }
      }).should((response) => {
        expect(response.status).to.equal(200)
      })
    })
  })

  // 5. Delete a booking
  it('Delete Booking ID 1', () => {
    cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
      username: 'admin',
      password: 'password123'
    }).then((login) => {
      const token = login.body.token

      cy.request({
        method: 'DELETE',
        url: 'https://restful-booker.herokuapp.com/booking/1',
        headers: {
          Cookie: `token=${token}`
        }
      }).should((response) => {
        expect([200, 201, 204]).to.include(response.status)
      })
    })
  })

})
