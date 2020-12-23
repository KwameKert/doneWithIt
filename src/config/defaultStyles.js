import { Platform } from 'react-native';
import Colors from './colors';

export default {
    text:{
        color: Colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir"
    }
}