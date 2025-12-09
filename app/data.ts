import profilePic from "./assets/nerd.png"

export const profile = {
  firstName: "Jason",
  lastName: "Bourne",
  gender: "Male",
  relationshipStatus: "Single",
  city: "Apapa",
  state: "Lagos",
  country: "Nigeria",
  bio: "nerd",
  imageUrl : profilePic
};

export const users = [
  {
    following: false,
    firstName: "Jessica",
    lastName: "Dream",
    relationshipStatus: "Single",
    city: "Queens",
    state: "New York",
    country: "USA",
  },
  {
    following: false,
    firstName: "Michael",
    lastName: " Cole",
    relationshipStatus: "Married",
    city: "Ibadan",
    state: "Ogun",
    country: "Nigeria",
  },
  {
    following: false,
    firstName: "Joyce",
    lastName: " Kim",
    relationshipStatus: "Divorced",
    city: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    following: false,
    firstName: "Mark",
    lastName: " Zuck",
    relationshipStatus: "Single",
    city: "Lekki",
    state: "Lagos",
    country: "Nigeria",
  },
  {
    following: false,
    firstName: "Beyonce",
    lastName: " Zeal",
    relationshipStatus: "Married",
    city: "Owerri",
    state: "Imo",
    country: "Nigeria",
  },
  {
    following: false,
    firstName: "Harry",
    lastName: " Gringo",
    relationshipStatus: "Single",
    city: "Kumasi",
    state: "Accra",
    country: "Ghana",
  },
];

export interface Friend {
  firstName: string;
  lastName: string;
  relationshipStatus?: string;
  city?: string;
  state?: string;
  country?: string;
  following: boolean
}

export interface User {
  firstName: string;
  lastName: string;
  relationshipStatus?: string;
  bio?: string;
  gender?: string;
  city?: string;
  state?: string;
  country?: string;
  imageUrl?: string
}
