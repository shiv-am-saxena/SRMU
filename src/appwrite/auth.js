import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(conf.appwrite_url).setProject(conf.project_id);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) return this.login({email, password});
            else return userAccount;
        } catch (error) {
            throw Error(error.message);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw Error(error.message);
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log(error.message)
            console.log(conf.appwrite_url);
            
            return null;
        }
    }
    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            throw Error(error.message);
        }
    }
}


const authService = new AuthService();
export default authService;