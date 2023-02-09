export type Idtype = number;

export interface Identifiable<K> {
    _id: K
}

export type Partial<T> = {
    [K in keyof T]?: T[K]
}