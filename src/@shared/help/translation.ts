interface IOptions {
  [key: string]: string;
}

export function translateErrors(field: string): string {
  const options: IOptions = {
    "Incorrect email/password combination": "senha/E-mail não combinam!",
    "Email already existing": "E-mail ja existe!",
  };

  return options[field] || field;
}
