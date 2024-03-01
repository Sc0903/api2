import {hash, compare} from "bcryptjs";


const encrypt = (pass:string) => {
    const passwordHash = hash(pass, 8);
    return passwordHash;
};


const verified = async (pass:string, passHash:string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
};


export {encrypt, verified};