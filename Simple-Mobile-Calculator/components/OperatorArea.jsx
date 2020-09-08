import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native'
import Button from './CustomButton';


export default function OperatorArea({onPress, backgroundColor}) {

return (
<View style={styles.view}>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'CE'} fontSize={25} title="CE"/>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'+'} title="+"/>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'-'} title="-"/>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'/'} title="/"/>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'x'} fontSize={25} title="x"/>
    <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={'='} title="="/>
</View>
);
}
const styles = StyleSheet.create({
    view: {
        flex: 0.22,
    }
}
)
