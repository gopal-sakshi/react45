import { Formik, Field, Form, useFormikContext } from "formik";
import { useValidateUser } from "./formik23_validate23";
import { FormikContext44 } from "./formik23_context44";

function Formik23() {
    const initialVal23 = { name23: "", email44: "" };

    const handleSubmit23 = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(JSON.stringify(values, null, 2));
    }

    const validate23 = useValidateUser();


    



    return (
        <div className="App">
            <Formik
                initialValues={initialVal23}
                onSubmit={async () => { console.log("submit clicked") }}
                validate= { validate23 }
            > 
                {({ isValid, values }) => (
                        <FormikContext44 />                     
                )}
            </Formik>
        </div>
    );
}

export default Formik23