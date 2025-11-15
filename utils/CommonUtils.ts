import cryptoJS from 'crypto-js';

export default class CommonUtils {
    private secretKey: string ;
    constructor() {
      if (process.env.ENCRYPTION_KEY ) {
        this.secretKey = process.env.ENCRYPTION_KEY;
      }  else {    
            throw new Error('ENCRYPTION_KEY is not defined in environment variables')
          };
    }
    /**
     * Provides encrypted data from string
     * @param data 
     * @returns encrypted string
     */
    public encryptData(data: string): string {
        const encryptedData = cryptoJS.AES.encrypt(data, this.secretKey).toString();
        console.log("Encrypted Data: " + encryptedData);
        return encryptedData;
        
    }

    public decryptData(encryptedData: string): string {
        const bytes = cryptoJS.AES.decrypt(encryptedData, this.secretKey);
        return bytes.toString(cryptoJS.enc.Utf8);
    }}
