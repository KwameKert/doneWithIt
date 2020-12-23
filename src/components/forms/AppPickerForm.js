import React from 'react';
import { useFormikContext } from "formik";
import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';


function AppPickerForm({items,name, placeholder, width}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker 
                width={width}
                items={items}
                onSelectItem={(item)=>setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppPickerForm;