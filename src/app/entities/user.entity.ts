export class UserEntity {
    id?: number;
    username?: string;
    email? : string;
    password?: string;
    role?: string;
    totalcards?: number;
    rocks?: number;
    papers?: number;
    scissors?: number;
    coins?: number;
    stars?: number;
    victory?: number;
    defeat?: number;
    gamesplayed?: number;
    image?: string;

    constructor( _id ?: number, _username ?: string, _email ?: string, _password ?: string , _role ?: string , _totalcards ?: number , _rocks ?: number , _papers ?: number , _scissors ?: number , _coins ?: number , _stars ?: number , _victory ?: number , _defeat ?: number , _gamesplayed ?: number , _image ?: string){
        this.id = _id
        this.username = _username
        this.email = _email
        this.password = _password
        this.role = _role
        this.totalcards = _totalcards
        this.rocks = _rocks
        this.papers = _papers
        this.scissors = _scissors
        this.coins = _coins
        this.stars = _stars
        this.victory = _victory
        this.defeat = _defeat
        this.gamesplayed = _gamesplayed
        this.image = _image
    }
}