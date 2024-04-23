export interface Login {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    userId: string;
    password: string;
    isGoogle: boolean;
}

export interface AuthModel {
    userId: string;
    accessToken: string;
    username: string;
    fullName: string;
    isSuccess: number;
}