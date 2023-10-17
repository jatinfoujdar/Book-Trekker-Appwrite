import config from "../config/config";
import { Client,Account,ID } from "appwrite";


export class AuthServies {
    client = new client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId);  
        this.account = new Account(this.client);
    }

    
}

const authService = new AuthServies()

export default authService;