import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>User Registration Forms</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Controlled Form</h2>
        <RegistrationForm />
      </section>

      <section>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
