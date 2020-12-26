import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

export default useLocation = () =>{
  
    const [location, setLocation] = useState(null);

    const getLocation =  async () =>{
        try{
           const {granted} = await Location.requestPermissionsAsync();
            if(!granted) return;
           const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            // const location = await Location.getLastKnownPositionAsync({});
            // console.log("location :", location)
            
            setLocation({latitude, longitude});
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getLocation();
    }, []);

    return location;
}