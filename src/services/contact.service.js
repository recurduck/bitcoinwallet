import { saveToStorage, loadFromStorage } from './storage.service';
export const contactService = {
  query,
  getById,
  remove,
  save
}

const CONTACTS = [
  {
    "_id": "I6ebsuqLXN",
    "name": "Doris Aubut",
    "email": "LSjaardema@tortor.gov",
    "phone": "(774)563-9173"
  },
  {
    "_id": "lrynIvQH3y",
    "name": "Gary Krebs",
    "email": "KBreuninger@sit.org",
    "phone": "(686)150-3186"
  },
  {
    "_id": "x4uqEqSijQ",
    "name": "Craig Quintana",
    "email": "NRussell@dolor.net",
    "phone": "(961)273-0067"
  },
  {
    "_id": "9F88y1OkCd",
    "name": "Trang Sundell",
    "email": "EWelle@amet.ly",
    "phone": "(680)845-9029"
  },
  {
    "_id": "6psY9So3Xd",
    "name": "Rajesh Mcmenamin",
    "email": "NLawson@non.ly",
    "phone": "(533)158-1157"
  },
  {
    "_id": "mhozb2IUYv",
    "name": "Angelo Suzanne",
    "email": "JAltschuler@fringilla.net",
    "phone": "(207)329-5560"
  },
  {
    "_id": "a1WwjwyzRG",
    "name": "Terese Jessica",
    "email": "LZiegler@adipiscing.org",
    "phone": "(895)435-1636"
  },
  {
    "_id": "CSosUNU92a",
    "name": "Sangita Woode",
    "email": "RAmacker@quis.gov",
    "phone": "(315)467-1450"
  },
  {
    "_id": "4ZKukQjNdD",
    "name": "Tonja Najanick",
    "email": "AFraley@massa.ly",
    "phone": "(425)646-9914"
  },
  {
    "_id": "ckb2Fcrl8y",
    "name": "Manolo Branscombe",
    "email": "CBamommy@facilisis.ly",
    "phone": "(471)141-2202"
  },
  {
    "_id": "82R5xGU11r",
    "name": "Byron Lessenberry",
    "email": "MDinkel@nullam.gov",
    "phone": "(286)960-5296"
  },
  {
    "_id": "CLkpAz1fj2",
    "name": "Shanae Holcombe",
    "email": "HMinihane@tempor.net",
    "phone": "(518)847-4785"
  },
  {
    "_id": "GujDwBQSam",
    "name": "Mickey Rubiano",
    "email": "MCarson@amet.ly",
    "phone": "(663)119-3722"
  },
  {
    "_id": "iGu5AKafzz",
    "name": "Barkat Greene",
    "email": "SWalstead@vestibulum.gov",
    "phone": "(853)297-8310"
  },
  {
    "_id": "x9wDxsmKmj",
    "name": "Homma Mooney",
    "email": "KKieser@nullam.io",
    "phone": "(651)189-2223"
  },
  {
    "_id": "UVMZtjDVA4",
    "name": "Sajid Marton",
    "email": "HLee@sed.com",
    "phone": "(696)724-7706"
  },
  {
    "_id": "SD4cUy0OHj",
    "name": "Brooks Kreigler",
    "email": "XCarter@malesuada.com",
    "phone": "(666)797-1531"
  },
  {
    "_id": "Yer8TPtggC",
    "name": "Louis Pennell",
    "email": "SCozad@augue.com",
    "phone": "(962)807-4457"
  },
  {
    "_id": "tOTPb6PTGF",
    "name": "Fang Granzow",
    "email": "ACosta@aliquam.io",
    "phone": "(101)538-5011"
  },
  {
    "_id": "nwbOqMPdsB",
    "name": "Esperanza Proctor",
    "email": "EReimer@magna.org",
    "phone": "(989)681-5311"
  }
];

function query(filterBy) {
  let contacts = loadFromStorage('contact')
  if (contacts && contacts.length != 0) {
    if(filterBy) return contacts.filter(contact => {
      return (contact.name.includes(filterBy) || 
      contact.phone.includes(filterBy) ||
      contact.email.includes(filterBy))
    })
    return contacts;
  } else {
    saveToStorage('contact', CONTACTS);
    return CONTACTS;
  }
}

function getById(contactId) {
  const contacts = loadFromStorage('contact')
  const contact = contacts.find(contact => contactId === contact._id)
  if (contact) return contact
  else return//TROW err
}

function save(contact) {
  const contacts = loadFromStorage('contact')
  if (contact._id) {
    const contactIdx = contacts.findIndex(cont => cont._id === contact._id)
    contacts[contactIdx] = contact;
  } else {
    contact._id = _createId();
    // contact.balance = 0
    contacts.push(contact)
  }
  saveToStorage('contact', contacts)
  return
}

function remove(contactId) {
  const contacts = loadFromStorage('contact')
  const contactIdx = contacts.findIndex(contact => contactId === contact._id)
  if (contactIdx >= 0) {
    contacts.splice(contactIdx, 1)
    saveToStorage('contact', contacts)
  }
}

function _createId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(11);
}