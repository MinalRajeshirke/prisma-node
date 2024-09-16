export class ApiError extends Error{
     // Trace = null;
    // Code = 500;
    Trace: string | null = null;
    Code: number = 500;

    constructor(message: string, errorCode: number, error: Error | null =  null) {
        super();

        console.log(`Message = ${message} Error Code = ${errorCode}`)

        this.message = message ?? 'An unexpected error has occurred. ';

        this. Trace = error != null ? error.stack : '';

        this.Code = errorCode ?? 500;
    }
}