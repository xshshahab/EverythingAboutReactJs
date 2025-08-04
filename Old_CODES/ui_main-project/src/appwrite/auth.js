import Config from '../Config/Config';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(Config.appwriteUrl).setProject(Config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call another method
                return this.login({email, password});
            } 
        } catch (error) {
            return userAccount;         
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
}

const authServ = new AuthService();

export default authServ;