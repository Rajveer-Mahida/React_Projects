import { Form, Formik,Field } from 'formik'
import Model from './Model'
const AddAndUpdateContact = ({ onClose, isOpen, children }) => {
  return (
    <div>
      <Model  className="mt-4 ">
      <Formik>
          <Form>
              <label htmlFor="name">Name </label>
              <Field name="name" id="name" />
          </Form>
        </Formik>
        </Model>
      <div>
     
      </div>
    </div>
  )
}

export default AddAndUpdateContact
