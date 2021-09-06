export class AuthGaurdService {
    loggedIn: boolean = true;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(this.loggedIn)
                    }, 200
                )
            }
        );

        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

}