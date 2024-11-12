import bcrypt from 'bcrypt'

let password = "L1234567"

const passCrypt = async(pass)=>{
    try {
        const newHash = await bcrypt.hash(pass, 12);
       return newHash
    } catch (error) {
        console.error('Error al hashear el password', error)
    }
    
}

passCrypt(password)
    .then(hashedPassword =>console.log('Password: ',hashedPassword))
    .catch(error => console.error('Error: ', error))