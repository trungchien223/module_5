import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { medicalFormSchema } from '../validation/medicalFormSchema';
import FormField from './FormField';

const MedicalDeclarationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(medicalFormSchema),
    defaultValues: {
      hasHealthInsurance: false
    }
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert('Khai báo thành công!');
    reset();
  };

  const genderOptions = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nữ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Tờ khai y tế
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Thông tin cá nhân
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Họ tên"
                  name="fullName"
                  register={register}
                  error={errors.fullName}
                  placeholder="Nhập họ tên"
                />

                <FormField
                  label="Số hộ chiếu /CMND"
                  name="passportId"
                  register={register}
                  error={errors.passportId}
                  placeholder="Nhập số hộ chiếu hoặc CMND"
                />

                <FormField
                  label="Năm sinh"
                  name="birthYear"
                  type="number"
                  register={register}
                  error={errors.birthYear}
                  placeholder="Nhập năm sinh"
                />

                <FormField
                  label="Giới tính"
                  name="gender"
                  type="radio"
                  register={register}
                  error={errors.gender}
                  options={genderOptions}
                />

                <FormField
                  label="Quốc tịch"
                  name="nationality"
                  register={register}
                  error={errors.nationality}
                  placeholder="Nhập quốc tịch"
                />

                <FormField
                  label="Công ty làm việc"
                  name="company"
                  register={register}
                  error={errors.company}
                  placeholder="Nhập tên công ty"
                />

                <FormField
                  label="Bộ phận làm việc"
                  name="department"
                  register={register}
                  error={errors.department}
                  placeholder="Nhập bộ phận làm việc"
                />

                <div className="flex items-center gap-2">
                  <FormField
                    label="Có thẻ bảo hiểm y tế"
                    name="hasHealthInsurance"
                    type="checkbox"
                    register={register}
                    error={errors.hasHealthInsurance}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Địa chỉ liên lạc tại Việt Nam
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Tỉnh thành"
                  name="province"
                  register={register}
                  error={errors.province}
                  placeholder="Nhập tỉnh thành"
                />

                <FormField
                  label="Quận /huyện"
                  name="district"
                  register={register}
                  error={errors.district}
                  placeholder="Nhập quận huyện"
                />

                <FormField
                  label="Phường /xã"
                  name="ward"
                  register={register}
                  error={errors.ward}
                  placeholder="Nhập phường xã"
                />

                <FormField
                  label="Điện thoại"
                  name="phone"
                  type="tel"
                  register={register}
                  error={errors.phone}
                  placeholder="Nhập số điện thoại"
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              <FormField
                label="Số nhà, phố, tổ dân phố /thôn /đội"
                name="address"
                register={register}
                error={errors.address}
                placeholder="Nhập địa chỉ chi tiết"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalDeclarationForm;
