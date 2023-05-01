export interface IError {
  response: {
    data: {
      error: string;
      message: string;
      statusCode: number;
    };
  };
}
