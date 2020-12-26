import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, AppPickerForm, SubmitButton} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import  useLocation from '../hooks/useLocation';
import listingsApi from "../api/listings";
import UploadScreen from './UploadScreen';


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

function ListingEditScreen() {
    const location = useLocation();
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const postData =async  (listing, {resetForm}) =>{
        setProgress(0);
        setVisible(true);
      const result = await  listingsApi.addListing({...listing, location}, progress=>{
         // console.log(progress)
          setProgress(progress)
        })
        
        if(!result.ok){
          setVisible(false);
          return alert("Could not save listing")
      }
      resetForm();
     

    }
    return (
        <Screen style={styles.container}>
            <UploadScreen visible={visible} progress={progress} onDone={()=> setVisible(false)} />
            <AppForm
            initialValues={{
                 title: "",
                 price: "",
                description: "", 
                images:[],
                category: null
            }}
            onSubmit={postData}
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