export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  avatar_path: string;
  user_type_id: number;  
}
