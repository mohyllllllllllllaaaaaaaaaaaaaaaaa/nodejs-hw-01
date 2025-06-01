import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try{
        await writeContacts([]);
        console.log('All contact removed');
    }catch(error){
        console.error('Error removing the All contact', error.message);
    }
};

removeAllContacts();
