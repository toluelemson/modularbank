import { FieldInputProps } from 'formik'

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string,
    company: string,
    industry: string
    countries: string
    operatingGeography: string
    message: string
    acceptedTerms: boolean
receiveNewsLetter: boolean
}

export interface FormikFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean
}

export interface FormikSelectItem { label: string; name:
 string; required?: boolean; items: any; value?: string
}

export interface OptionLabel { label: string; value: string
}

export interface FormikSelectProps extends FieldInputProps<string>{
    items: OptionLabel[];
    label: string;
    required?: boolean
}
export interface SelectItems {
 value: string;
 label: string
}

export interface FormikCheckboxProps {
    name: string;
    label: string;
    required?: boolean
}

export interface FormikTextFieldProps extends FieldInputProps<string>{
name: string;
  input: string;
  label: string;
  required?: boolean
}
