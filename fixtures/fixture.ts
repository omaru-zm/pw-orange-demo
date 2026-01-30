import { test as base } from "@playwright/test";

export type UserCredentials = {
    user: string;
    pass: string;
}

export type UserOptions = {
    userValid: UserCredentials;
    userInvalid: UserCredentials;
}

export const test = base.extend<UserOptions>({
    userValid: [{ user: '', pass: '' }, {option: true}],
    userInvalid: [{ user: '', pass: '' }, {option: true}],
});

