let firstName = 'Joe';
let lastName = 'Sixpack';
let isActive = status => {
  return (status === 'A' ? 'Active' : 'Inactive');
}

let msg = `Mr. ${firstName} ${lastName} is an ${isActive('I')} user.`;
