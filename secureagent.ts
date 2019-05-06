/**
*   SecureAgente define a standard class to provide to classes the capacibility to assure the clients with security mechanimns
*/
export class secureagent {
private fingerHash: string;
private passwordHash: string;
/**
//  Constructor of SecureAgent, ensure the security variables are null;
*/
constructor() {
    this.fingerHash=null;
    this.passwordHash=null;
}
    
        public setPassword(password:string):void{
            this.passwordHash=password;
        }

        public setFingerHash(hash:string):void{
            this.fingerHash=hash;
        }
protected getFingerHashDb():string{
    // To do:
    return null;
    }
    
    /**
     // This method get the hash of the password
    // @return {string} return the hash of password provided
     */
    private hashPassword(password): string {
        // To do:
        return null;
    }
/**
 * This method provide the capacibility to authenticated with a string password of client
 // @param {string} password The string finger hash of client
// @return {boolean} Return if the finger hash can be authenticate the client-
 */
public authenticateWithPassword(password:string):boolean{
    if(this.hashPassword(password) === this.passwordHash) {
        return true;
    } else {
        return false;
    }
}
    public authenticateWithFinger(finger:string):boolean{
if(finger===this.fingerHash)
{return true;}
else 
{
    return false;
}
}
    /**
    //   A method to get the password hash from database
    //   @return {string} Return the password hash
    */
protected getPasswordHashDb():string{
            // To do:
            return null;
}

}
