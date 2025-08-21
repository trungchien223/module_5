# Medical Declaration Form

A React application for medical information declaration with form validation.

## Features

- **Form Validation**: Uses Yup schema validation with React Hook Form
- **Required Field Validation**: Shows "Required" error for mandatory fields
- **Year Validation**: Birth year must be greater than 1900
- **Email Validation**: Validates email format and shows "Invalid email address" error
- **Success Alert**: Shows "Khai báo thành công!" when form is submitted successfully
- **Responsive Design**: Built with Tailwind CSS for modern, responsive UI
- **Component Architecture**: Clean separation of concerns with reusable components

## Form Fields

### Personal Information (Required)
- Full Name (Họ tên)
- Passport/ID Number (Số hộ chiếu /CMND)
- Birth Year (Năm sinh) - Must be > 1900
- Gender (Giới tính) - Radio buttons (Nam/Nữ)
- Nationality (Quốc tịch)
- Company (Công ty làm việc)
- Department (Bộ phận làm việc)
- Health Insurance Card (Có thẻ bảo hiểm y tế) - Optional checkbox

### Contact Information (Required)
- Province/City (Tỉnh thành)
- District (Quận /huyện)
- Ward/Commune (Phường /xã)
- Detailed Address (Số nhà, phố, tổ dân phố /thôn /đội)
- Phone Number (Điện thoại)
- Email - Must be valid email format

## Technologies Used

- React 19
- React Hook Form
- Yup validation
- Tailwind CSS
- Vite

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL.

## Validation Rules

- All fields except "Health Insurance Card" are required
- Birth year must be greater than 1900
- Email must be in valid format
- Form shows appropriate error messages for validation failures
- Success alert appears when form is submitted without errors
