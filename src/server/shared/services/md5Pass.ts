import md5 from 'md5';

const hashPassword = (password: string): string => {
  return md5(process.env.PASSWORD_SALT + password + process.env.PASSWORD_SALT);
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const verifyPassword= hashPassword(password);
  if(verifyPassword == hashedPassword){
    return true;
  }
  return false;
};


export const PasswordCrypto = {
  hashPassword,
  verifyPassword,
};