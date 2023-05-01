interface IOptions {
  [key: string]: string;
}

export function translateErrors(field: string): string {
  const options: IOptions = {
    "Incorrect email/password combination": "senha/E-mail não combinam!",
  };

  return options[field] || field;
}
