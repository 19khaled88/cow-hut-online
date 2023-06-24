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
  price: string;
  location: Location;
  breed: Breed;
  weight: string;
  label: Label;
  category: Category;
  seller: string;
};

export type CowModel = Model<ICow>;
