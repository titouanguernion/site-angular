import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{


    username: string| null=null;

    // Username's setter
    setUsername(s:string |null = null):void {
        this.username = s;
    }

    // Username's getter
    getUsername(): string | null{
        return this.username;
    }

    // User's log status
    private loggedIn: boolean = false;

    // Set log status to true
    login(): void{
        this.loggedIn = true;
    }

    // Set log status to false
    logOut(): void {
        this.loggedIn = false;
    }

    // Getter of the user log status
    isLoggedIn() :boolean{
        return this.loggedIn;
    }
}