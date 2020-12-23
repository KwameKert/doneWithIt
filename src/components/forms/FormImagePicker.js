import React from 'react';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext } from "formik";

import InputImageList from '../InputImageList';
function FormImagePicker({name}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    const imageUris = values[name];

    const addImage = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
      };
    
      const removeImage = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri != uri));
      };

    return (
        <>
            <InputImageList
                imageUris={imageUris}
                onAddImage={addImage}
                onRemoveImage={removeImage}
            />
            
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;