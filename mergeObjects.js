let user = { firstName: 'Joe', lastName: 'Sixpack', username: 'joeSix' };
let contact = { firstName: 'Joe', lastName: 'Sixpack', email: 'joe6@mailinator.com', phone: '2142142144', account: { name: 'ACME Inc' } };

let contactUser = { ...user, ...contact };
// result in {firstName: "Joe", lastName: "Sixpack", username: "joeSix", email: "joe6@mailinator.com", phone: "2142142144", account: { name: 'ACME Inc' } }

let contactUser2 = Object.assign( {}, user, contact );
// same result

// NOTE:  account is pointing to the same object in memory (shallow copy)
// contactUser.account === contact.account results in true
