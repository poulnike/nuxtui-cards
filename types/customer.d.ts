declare interface Customer {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     string;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  Date;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   string;
    hair:       Hair;
    domain:     string;
    ip:         string;
    address:    Address;
    macAddress: string;
    university: string;
    bank:       Bank;
    company:    Company;
    ein:        string;
    ssn:        string;
    userAgent:  string;
}

declare interface Address {
    address:     string;
    city:        string;
    coordinates: Coordinates;
    postalCode:  string;
    state:       string;
}

declare interface Coordinates {
    lat: number;
    lng: number;
}

declare interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType:   string;
    currency:   string;
    iban:       string;
}

declare interface Company {
    address:    Address;
    department: string;
    name:       string;
    title:      string;
}

declare interface Hair {
    color: string;
    type:  string;
}
