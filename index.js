import yargs from "yargs";
import * as contactList from "./contacts.js"

const invokeAction = async ({action, id, ...data}) => {
  switch (action) {
    case "list":
      const allContacts = await contactList.listContacts();
      return console.log(allContacts);
    case "get":
      const getContact = await contactList.getContactById(id);
      return console.log(getContact);
    case "add":
      const newContact = await contactList.addContact(data);
      return console.log(newContact);
    case "remove":
      const removeContact = await contactList.removeContact(id);
      return console.log(removeContact);
  }
}

const {argv} = yargs(process.argv);
invokeAction(argv);
