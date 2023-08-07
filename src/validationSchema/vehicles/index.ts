import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  info: yup.string().required(),
  company_id: yup.string().nullable(),
});
