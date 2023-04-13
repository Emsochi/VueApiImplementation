import type {Hair} from "./Hair"
import type { Address } from "./Address"
import type { Bank } from "./Bank"
import type { Company } from "./Company"
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
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
  }
  