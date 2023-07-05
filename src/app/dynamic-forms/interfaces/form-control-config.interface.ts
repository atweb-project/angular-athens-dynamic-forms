export interface IFormControlConfig {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: any;
  options?: Array<Record<string,string>>;
  required?: boolean;
  disabled?: boolean;
}
