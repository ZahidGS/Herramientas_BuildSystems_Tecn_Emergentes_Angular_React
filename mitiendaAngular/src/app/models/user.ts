export interface Roles {
    editor?: boolean;
    admin?: boolean;
}

export interface UserInterface {
    id?: string;
    email?: string;
    password?: string;
    roles: Roles;
}