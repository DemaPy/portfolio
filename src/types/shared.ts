export interface ResponseInterface<T> {
    data: T
    status: number
    message: string
}