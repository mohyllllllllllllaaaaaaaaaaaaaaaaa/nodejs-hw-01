import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try{
        const contacts = await readContacts();
        return contacts.length;
    }catch(error){
        console.error('Failed read length contacts', error.message);
        return 0;
    }
};

console.log(await countContacts());
