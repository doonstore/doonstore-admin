import { Injectable, NgZone } from '@angular/core';
import { User } from "./user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: any; // Save logged in user data

    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone // NgZone service to remove outside scope warning
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null && user.email != null;
    }

    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    AuthLogin(provider) {
        return auth().signInWithPopup(provider)
            .then((result) => {
                this.SetUserData(result.user).then(() => {
                    this.ngZone.run(() => {
                        this.router.navigate(['dashboard']);
                    });
                }).catch((error) => {
                    console.error(error);
                    this.ngZone.run(() => {
                        this.router.navigate(['login']);
                    });
                });
            }).catch((error) => {
                console.error(error);
                this.ngZone.run(() => {
                    this.router.navigate(['login']);
                });
            })
    }

    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    SignOut() {
        return auth().signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        })
    }

}
