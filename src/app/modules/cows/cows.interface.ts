import { Model } from "mongoose";
export type Location =
  | "Dhaka"
  | "Chattogram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh";
export type Breed =
  | "Brahman"
  | "Nellore"
  | "Sahiwal"
  | "Gir"
  | "Indigenous"
  | "Tharparkar"
  | "Kankrej";
export type Label = "for sale" | "sold out";
export type Category = "Dairy" | "Beef" | "DualPurpose";
export type ICow = {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: Breed;
  weight: string;
  label: Label;
  category: Category;
  seller: string;
};

export type IGenericResponse<T>={
  meta:{
    page:number
    limit:number
    count:number 
  }
  data:T
}

export type CowModel = Model<ICow>;
