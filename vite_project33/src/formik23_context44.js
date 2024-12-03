import { Formik, Field, Form, useFormikContext } from "formik";
import { useEffect, useCallback, useMemo } from 'react';

export function FormikContext44() {
    const { values, setFieldValue } = useFormikContext();
    console.log("values_in_formikContext ===> ", values);

    // const handleNameChange23 = useCallback(
    //     (event) => {
    //         console.log("value222 ====>", Date.now(), event.target.value);
    //         setFieldValue('name23', values.name23);
    //         // setFieldValue('tenantId', value?.id || '');
    //     },
    //     [setFieldValue]
    // );
    // const handleNameChange24 = useCallback(
    //     (value) => {
    //         console.log("value222 ====>", Date.now(), value);
    //         // setFieldValue('company', value);
    //         // setFieldValue('tenantId', value?.id || '');
    //     },
    //     [setFieldValue]
    // );

    return (
        <Form>
            <Field name="name23" value={values.name23} />
            <Field name="email44" value={values.email44} />
            <button  type="submit">Submit</button>

            {/* disabled={!isValid} */}
        </Form>
    )
}