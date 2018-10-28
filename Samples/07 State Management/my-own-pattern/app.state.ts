export interface AppState {
    readonly user: UserState;
}

export interface UserState {
    readonly userName: string;
    readonly roles: string[];
}
