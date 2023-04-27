export interface UserForm {
  email: string;
  password: string;
}

export interface UserResponse {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
  };
}
