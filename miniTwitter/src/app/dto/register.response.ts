export interface RegisterResponse{
    token: string;
    username: string;
    email: string;
    role: string;
    picurl: string;
    created: Date;
    active: boolean;
}