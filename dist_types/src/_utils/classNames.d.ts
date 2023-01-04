export declare type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
export declare type ClassDictionary = Record<string, any>;
export declare type ClassArray = ClassValue[];
export declare function classNames(...args: ClassValue[]): string;
