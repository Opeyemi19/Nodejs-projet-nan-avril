const bcrypt = require('bcryptjs');

const cryptage = {};

//Pour crypter le password de l'user
cryptage.encryptPassword = async(Password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(Password, salt);
    return hash;
};

//Pour comparer le password entrez a celui enregistrer en ds ntre bd, Lorsqu on veut se logger
cryptage.matchPassword = async(Password, savedPassword) => {
    try {
       return await bcrypt.compare(Password, savedPassword);
    } catch (error) {
        console.log(error);
    }
};

module.exports = cryptage;