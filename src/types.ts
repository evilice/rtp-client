import React from "react";

export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

export interface IUser {
  name?: string;
  token: string | null;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
