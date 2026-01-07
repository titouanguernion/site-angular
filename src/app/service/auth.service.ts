import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{


    username: string| null=null;

    setUsername(s:string |null = null):void {
        this.username = s;
    }

    getUsername(): string | null{
        return this.username;
    }

    private loggedIn: boolean = false;

    login(): void{
        this.loggedIn = true;
    }

    logOut(): void {
        this.loggedIn = false;
    }

    isLoggedIn() :boolean{
        return this.loggedIn;
    }
}