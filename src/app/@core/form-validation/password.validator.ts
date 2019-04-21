import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    /**
     * Compare password against password confirmation.
     */
    static confirmPassword(AC: AbstractControl): any {
        if (AC.get('password').value !== AC.get('confirmPassword').value) {
            AC.get('confirmPassword').setErrors({ confirmPassword: true });
            return false;
        }

        return true;
    }

    /**
     * Make sure password matches a specific pattern.
     */
    static passwordPattern(AC: AbstractControl): any {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        if (!pattern.test(AC.get('password').value)) {
            AC.get('password').setErrors({ passwordPattern: true });
            return false;
        }

        return true;
    }

}
