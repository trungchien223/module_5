import * as yup from 'yup';

export const medicalFormSchema = yup.object({
  // Required fields
  fullName: yup.string().required('Required'),
  passportId: yup.string().required('Required'),
  birthYear: yup
    .number()
    .typeError('Required')
    .required('Required')
    .min(1900, 'Year must be greater than 1900'),
  gender: yup.string().required('Required'),
  nationality: yup.string().required('Required'),
  company: yup.string().required('Required'),
  department: yup.string().required('Required'),
  
  // Optional fields
  hasHealthInsurance: yup.boolean(),
  
  // Contact information - required
  province: yup.string().required('Required'),
  district: yup.string().required('Required'),
  ward: yup.string().required('Required'),
  address: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
});
