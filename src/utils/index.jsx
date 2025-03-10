import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const CN =(...classes) => {
  return twMerge(clsx(classes));
};



export const generateRandomString = (length = 10) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};