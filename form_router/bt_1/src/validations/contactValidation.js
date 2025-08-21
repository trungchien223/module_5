import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Tên là bắt buộc')
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(50, 'Tên không được quá 50 ký tự'),
  
  email: yup
    .string()
    .required('Email là bắt buộc')
    .matches(
      /^[a-zA-Z0-9+\\-]+@[a-zA-Z0-9\\-]+\.[a-zA-Z0-9\\-]+$/,
      'Email không hợp lệ. Chỉ chấp nhận ký tự a-z, A-Z, 0-9, +, - trước @ và a-z, A-Z, 0-9, - sau @'
    ),
  
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(
      /^[0-9+\-\s()]+$/,
      'Số điện thoại chỉ được chứa số, dấu +, -, khoảng trắng và dấu ngoặc'
    )
    .min(10, 'Số điện thoại phải có ít nhất 10 ký tự')
    .max(15, 'Số điện thoại không được quá 15 ký tự'),
  
  message: yup
    .string()
    .max(500, 'Tin nhắn không được quá 500 ký tự')
});
