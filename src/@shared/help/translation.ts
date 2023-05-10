interface IOptions {
  [key: string]: string;
}

export function translateErrors(field: string): string {
  const options: IOptions = {
    "Incorrect email/password combination": "senha/E-mail não combinam!",
    "Email already existing": "E-mail ja existe!",
    "Entity Not Found Using this e-mail": "E-mail não existe",
  };

  return options[field] || field;
}
