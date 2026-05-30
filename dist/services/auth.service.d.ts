export declare function loginService(email: string, password: string): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        fullName: string | null;
        roles: string[];
        permissions: string[];
    };
}>;
