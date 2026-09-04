import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);

  if (item === null) {
    return null;
  }

  try {
    return JSON.parse(item) as T;
  } catch {
    return null;
  }
}
