export class AuthService {
    role: string;

    constructor() {
        this.role = "admin";
    }

    isInRole(roles: string[]) {
        for(let role of roles) {
            if(role == this.role) {
                return true;
            }
        }

        return false;
    }
}
