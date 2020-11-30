export interface LoginDtoResponse{
    token: string;
    username: string;
    email: string;
    picurl: string;
    created: Date;
    active: boolean;
}