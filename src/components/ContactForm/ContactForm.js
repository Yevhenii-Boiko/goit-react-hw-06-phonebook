import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { Field, Formik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import * as yup from 'yup';
import { ErrorMessage, Form, FormField, Button } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(7).required(),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase();
    const nameExists = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (nameExists) {
      return toast.error(`${values.name} is already in contacts!`);
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </FormField>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
