export interface Iuser {
    first_name?: string;
    last_name?: string;
    email: string;
    phone_number?: string;
    lang?: string;
    password?: string;
    password_confirmation?: string;
    emailVerified?: boolean;
    id?: any;
}

export class User implements Iuser {
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;

    constructor() {
        this.first_name = null;
        this.last_name = null;
        this.email = null;
        this.phone_number = null;
    }
}
