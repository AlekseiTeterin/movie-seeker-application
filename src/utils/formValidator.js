import * as constants from '../CONSTANTS';

function formValidator(value, isPasswordArea) {
    if (!isPasswordArea) {
        if (value.length > constants.MAX_NICK_NAME_LENGTH) {
            return `превышена максимальная длина имени ${constants.MAX_NICK_NAME_LENGTH} символов`;
        }
        if (
            !value.match(constants.REGULAR_EXPRESSION_FOR_NICK_NAME) &&
            value.length !== 0
        ) {
            return 'используйте только латинские символы, цифры или _';
        }
    }
    if (isPasswordArea) {
        if (
            value.length < constants.MIN_PASSWORD_LENGTH ||
            value.length > constants.MAX_PASSWORD_LENGTH
        ) {
            return `длина пароля должна быть ${constants.MIN_PASSWORD_LENGTH} - ${constants.MAX_PASSWORD_LENGTH} символов`;
        }
        if (
            !value.match(constants.REGULAR_EXPRESSION_FOR_PASSWORD) &&
            value.length !== 0
        ) {
            return 'пароль не соответствует требованиям';
        }
    }

    return '';
}

export default formValidator;
