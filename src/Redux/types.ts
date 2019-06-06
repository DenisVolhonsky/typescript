// user(pin): null => {id:'4mLCVewHZ',name:'Deasdasd…mail.com'}
// token(pin): null => 'eyJhbGciOiJIUzI1NiIsInR5cCI6I…LtNFb2yb4'
// isAthenticated(pin): false => truea
export interface IUserSignUp {
    readonly id: string;
    readonly name: string;
    readonly email: string;
}

// export interface IAuthData {
//     dispatch?: () =>{},
//     readonly isAuthenticated?: boolean;
// }