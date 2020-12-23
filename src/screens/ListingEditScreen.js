import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, AppPickerForm, SubmitButton} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().required().label("Images")
})

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
];

function ListingEditScreen(props) {
 
    return (
        <Screen style={styles.container}>
            <AppForm
            initialValues={{
                 title: "",
                 price: "",
                description: "", 
                images:[],
                category: null
            }}
            onSubmit={(values) => console.log("values here: ",  location)}
            validationSchema={validationSchema}
            >
                <FormImagePicker  
                name="images" /> 
                <AppFormField  
                    placeholder="title"
                    maxLength={255}
                    name="title"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <AppFormField
                    placeholder="price"
                    maxLength={8}
                    name="price"
                    width={120}
                    keyboardType="numeric"
                />
                <AppPickerForm 
                    items={categories}
                    name="category"
                    width="50%"
                    placeholder="Category"
                />

                <AppFormField
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    name="description"
                />

            <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20
      },
})

export default ListingEditScreen;