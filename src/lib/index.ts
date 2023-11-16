// place files you want to import through the `$lib` alias in this folder.

export type FormType = {
  data: {
    token: string;
    name: string;
    company: string;
    email: string;
    message: string;
    terms: string;
  };
  errors: {
    token: string;
    name: string;
    company: string;
    email: string;
    message: string;
    terms: string;
  };
};
