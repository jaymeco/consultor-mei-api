export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  avatar_path: string;
  license_id: number;
  user_type_id: number;  
}
