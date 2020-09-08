import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

export default function CustomButton({onPress, onPressParam, title, fontSize, margin, backgroundColor, fontColor, style}) {

//set default background and font colors and reformat into style code
if (!backgroundColor) backgroundColor='white';
if(!fontColor) fontColor='black';

//responsive font sizing
const {fontScale} = Dimensions.get('window');
fontSize = (!fontSize)?30/fontScale: fontSize/fontScale;

(!margin)?margin = 3:margin=margin;

//default styles
let styles = {
    buttonContainer: {
        backgroundColor: backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 5,
        margin: margin,
        overflow: 'visible',
    },
    buttonText: {
        fontSize: fontSize,
        justifyContent:'center',
        alignItems: 'center',
        textTransform:'uppercase',
        color: fontColor,
        overflow: 'visible',
    },
};
//apply custom styles
styles = {
    ...styles,
    ...style,
}

return (
<TouchableOpacity onPress={()=> onPress(onPressParam)} style={styles.buttonContainer}>
    <Text style={styles.buttonText} adjustsFontSizeToFit={true} numberOfLines={1}>{title}</Text>

</TouchableOpacity>
);
}

