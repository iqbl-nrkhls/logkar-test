const given = {
  'address.street': 'jalan sakura',
  'address.provice': 'banten',
  'address.city': 'tangerang',
  'person.name': 'john',
  'person.email': 'john@doe.com',
  'userType': 'admin',
  'accessLevel': 'QA'
}

const convertObject = (object) => {
  let result = {};

  for (const key in object) {
    if (key.includes('.')) {

      const splitKey = key.split('.');

      if (result.hasOwnProperty(splitKey[0])) {
        result[splitKey[0]][splitKey[1]] = object[key];
      } else {
        result[splitKey[0]] = {};
      }

    } else {
      result[key] = object[key];
    }
  }

  console.log(result);
}

convertObject(given);