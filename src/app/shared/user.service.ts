export class UserService{
    userType: string;
    onLogin(){
        this.userType = 'player';
    }
    getUserType(): string{
        return this.userType ? this.userType : 'player';
    }
}