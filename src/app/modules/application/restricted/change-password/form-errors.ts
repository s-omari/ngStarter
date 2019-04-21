export const errors = {
    old: '',
    password: '',
    confirmPassword: ''
};

export const errorMessages = {
    old: {
        required: 'Old Password Field is Required',
        minlength: 'Old Password field mst be 6 or more characters'
    },
    password: {
        required: 'New Password Field is Required',
        minlength: 'New Password field mst be 6 or more characters',
        passwordPattern: 'Password must contain one uppercase character, one lowercase character and one number'
    },
    confirmPassword: {
        required: 'New Password Field is Required',
        confirmPassword: 'Please ensure passwords match',
    }
};
