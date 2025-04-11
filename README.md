# Cypress API Testing – Restful Booker

This project contains beginner-level API tests using [Cypress](https://www.cypress.io/) to interact with the [Restful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html). It is part of my QA learning journey.

## 📌 Project Goal

To practice and demonstrate API testing with real endpoints using the following:

- `GET`
- `POST`
- `PUT`
- `DELETE`

---

## 🧪 Test Cases Included

| Test Name          | Endpoint                         | Method | Purpose                        |
|-------------------|----------------------------------|--------|--------------------------------|
| Health Check       | `/ping`                          | GET    | Verify API is running          |
| Create Booking     | `/booking`                       | POST   | Create a new booking           |
| Get Booking        | `/booking/1`                     | GET    | Retrieve a booking by ID       |
| Update Booking     | `/booking/1`                     | PUT    | Update booking (requires token)|
| Delete Booking     | `/booking/1`                     | DELETE | Delete booking (requires token)|

---

## 🔧 How It's Structured

- All tests are inside a single spec file:  
  `cypress/e2e/restfulBookerTests.spec.js`
- `cy.request()` is used for API calls.
- Token-based endpoints (`PUT`, `DELETE`) include login to get a token first.
- Status codes are validated for each test.

---

## ✍️ Author

**Malik Davis**  
QA Student at Coding Temple
