export type PropsAddPhonePage = {
  add: (params: AddPhone) => Promise<any>;
  edit: (params: EditPhone) => Promise<any>;
  comeBack: () => any;
  model: any;
};

export interface AddPhone {
  tipo: string;
  numero: string;
  personId: number;
}

export interface EditPhone {
  id: number;
  tipo: string;
  numero: string;
}

export interface InputsPhone {
  id: number;
  tipo: string;
  numero: string;
  personId: number;
}
