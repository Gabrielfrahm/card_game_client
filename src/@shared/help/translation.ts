interface IOptions {
  [key: string]: string;
}

export function translateErrors(field: string): string {
  const options: IOptions = {
    "Incorrect email/password combination":
      "Incorrect email/password combination!",
    "Email already existing": "Email already existing!",
    "Entity Not Found Using this e-mail": "Entity Not Found Using this e-mail",
  };

  return options[field] || field;
}
