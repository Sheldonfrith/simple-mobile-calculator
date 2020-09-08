import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Button from './CustomButton';

export default function NumberArea({onPress, backgroundColor}) {

const getNumbers = (rowNumber) => {
    switch (rowNumber) {
        case (1 || '1'):
            return [1,2,3];
        case (2 || '2'):
            return [4,5,6];
        case (3 || '3'):
            return [7,8,9];
        case (4 || '4'):
            return [0];
        default:
            console.log('invalid input to getNumbers in NumberArea');
            return;
    }
}

return (
<View style={styles.view}>
    {/* row 1 */}
    <View style={styles.row}>
        {getNumbers(1).map((number, index)=> <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={number} key={'numberButtonRow4'+index} title={JSON.stringify(number)}/>)}
    </View>
    {/* row 2 */}
    <View style={styles.row}>
        {getNumbers(2).map((number, index)=> <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={number} key={'numberButtonRow4'+index} title={JSON.stringify(number)}/>)}
    </View>
    {/* row 3 */}
    <View style={styles.row}>
        {getNumbers(3).map((number, index)=> <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={number} key={'numberButtonRow4'+index} title={JSON.stringify(number)}/>)}
    </View>
    {/* row 4, just 0 */}
    <View style={styles.row}>
        {getNumbers(4).map((number, index)=> <Button onPress={onPress} backgroundColor={backgroundColor} onPressParam={number} key={'numberButtonRow4'+index} title={JSON.stringify(number)}/>)}
    </View>
</View>
);
}

const styles = StyleSheet.create({
    view: {
        flex: 0.88,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    }
})