import data from "../data/users.json";

  export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    domain: string
    ip: string
    address: Address
  }
  

  export interface Address {
    address: string
    city: string
    coordinates: {
        lat: number
        lng: number
    }
    postalCode: string
    state: string
  }

  export function getUsers(): User[] {
    return data.items;
  }
