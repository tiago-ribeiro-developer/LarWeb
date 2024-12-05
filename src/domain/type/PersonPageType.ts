export type PropsListPersonPage = {
  add: () => any;
  edit: (id: number) => any;
  list: [];
};

export type PropsAddPersonPage = {
  add: (params: AddPerson) => Promise<any>;
  edit: (params: EditPerson) => Promise<any>;
  remove: () => Promise<any>;
  comeBack: () => any;
  addPhone: () => any;
  editPhone: (idPhone: number) => any;
  deletePhone: (idPhone: number) => any;
  model: any;
  phones: [];
};

export interface AddPerson {
  nome: string;
  cpf: string;
  dataNascimento: string;
}

export interface EditPerson {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
}

export interface InputsPerson {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
}
