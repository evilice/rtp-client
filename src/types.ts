import React from "react";

export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

export enum UserRole {
  ANONIM,
  BASE,
  VIP,
}

export interface IUser {
  uid: string;
  name: string;
  role: UserRole;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
