import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState,useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions, Linking } from 'react-native';
import NumberArea from './components/NumberArea'
import OperatorArea from './components/OperatorArea';
import Button from './components/CustomButton';
// import LinearGradient from 'react-native-linear-gradient'


const { windowWidth, windowHeight, fontScale } = Dimensions.get('window');


export default function App() {
  const [displayVal, setDisplayVal] = useState('0');

  const openLink = useCallback((link)=>{
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }
    });
  },[])

  const lastCharIsOperator = useCallback((isMinus=false) => {
    //checks if the last nonblank char in displayVal is an operator
    
    const lastOperatorPosition = displayVal.length-1;
    const lastOperator = displayVal.substring(lastOperatorPosition);
    const secondLastCharacter = displayVal.substring(lastOperatorPosition-1,lastOperatorPosition);
    if (+(lastOperator)===(NaN||null||undefined)){
      //remove character if previous was a double minus
      if ((+(secondLastCharacter)===(NaN||null||undefined))&&lastOperator!=='-'&&isMinus === false){
        setDisplayVal(oldVal => oldVal.slice(0,oldVal.length-1));
        return true;
      }

      //allow a minus...
      //and this isn't the second character
      // and isMinus is true (meaning current character is also a minus)
      //AND if the secondlastcharacter is not an operator;
      if(isMinus &&(displayVal.length>1)&&(+(secondLastCharacter)!==(NaN||null||undefined))){
        return false;
      }
      return true;
    }
    return false;
  }, [displayVal, setDisplayVal]);

  const isOperatorInDisplayVal = useCallback(()=>{
    return (displayVal.indexOf(('+'||'-'||'/'||'x')))?true:false;
  },[displayVal])
  const lastCharIsNumber = useCallback(()=> {
    return +(displayVal.substring(displayVal.length));
  },[displayVal])

  const evaluate = useCallback(()=> {
    //generally called when '=' is pressed

    //if there is no operator, just return the value that is already there
    if (!isOperatorInDisplayVal()) return;

    //create operator sequence
    const regexOperators = new RegExp(/[\D^\s]/g);
    let execOnOperators = [];
    const operatorSequence = [];
    const operatorIndexes = [];
    while (execOnOperators = regexOperators.exec(displayVal)){
      operatorIndexes.push(execOnOperators.index);
      operatorSequence.push(execOnOperators[0]);
    }

    //create number sequence
    const regexNumbers = new RegExp(/\d+/g);
    let execResult = [];
    const numberSequence = [];
    const numberIndexes = [];
    //loop to find the numbers and their indexes
    while (execResult = regexNumbers.exec(displayVal)){
      numberIndexes.push(execResult.index);
      numberSequence.push(execResult[0]);
  }
    //detect and adjust negative numbers
    numberSequence.forEach((num,index) => {
      const thisIndex = numberIndexes[index];
      //should this be a negative number
      // first is there a - in front of it
      //if so, is it the first number in the sequence, or is there some other operator previous to the minus
      if (displayVal[thisIndex-1]==='-'&&(thisIndex<2||(+(displayVal[thisIndex-2])===(NaN||null||undefined)))){
        //this should be a negative number...
        //adjust the number sequence
        numberSequence[index] = numberSequence[index]*(-1.0);
        //adjust the operator sequence
        //remove the - operator at thisIndex-1
        const removalIndex = operatorIndexes.findIndex((index)=>index===thisIndex-1);
        operatorSequence.splice(removalIndex,1);
        operatorIndexes.splice(removalIndex,1);
      }
    });
  
    //if last char was an operator, remove it and evaluate the expression before it
    if (lastCharIsOperator()) {operatorSequence.pop();}

    const resultVal = getResultFromSequence(numberSequence,operatorSequence);
    setDisplayVal((resultVal).toString()); 
  },[displayVal, isOperatorInDisplayVal,lastCharIsOperator,getResultFromSequence]);

  const getResultFromSequence = useCallback((numbers, operators) => {
    let result;
    const originalOperatorsLength= operators.length;
    //make sure all numbers are floats
    numbers = numbers.map(number => number*1.0);

    //apply bedmas calculation order
    const brackets = [];
    const exponents = [];
    const division = [];
    const multiplication = [];
    const addition = [];
    const subtraction = [];
    //distribute to sub arrays
    operators.forEach((operator,index) =>{
       switch (operator) {
         case ('('||')'):
           brackets.push(index);
           break;
          case '^':
            exponents.push(index);
            break;
          case '/':
            division.push(index);
            break;
          case 'x':
            multiplication.push(index);
            break;
          case '+':
            addition.push(index);
            break;
          case '-':
            subtraction.push(index);
            break;
          default:
            console.log('no valid operators, in getResultFromSequence');
            return;
       }
      return;
    });

    const updateWithCalc = (index, calculate) => {
      const newNumber = calculate(numbers[index],numbers[index+1]);
      numbers.splice(index,2,newNumber);
      operators.splice(index,1);
      return;
    }
    //handle brackets
    //handle exponents
    //handle the rest...
    //divide
    const divide = (num1,num2)=>{
      return num1 / num2;
    }
    division.forEach(index => {
      index = index-(originalOperatorsLength-operators.length); //accounts for the removal of operaters from the operators array
      updateWithCalc(index,divide);
    });
    //multiply
    const multiply = (num1,num2)=>{
      return num1*num2;
    }
    multiplication.forEach(index => {
      index = index-(originalOperatorsLength-operators.length); //accounts for the removal of operaters from the operators array
      updateWithCalc(index,multiply)
    });
    //add
    const add = (num1,num2)=>{
      return num1+num2;
    }
    addition.forEach(index=> {
      index = index-(originalOperatorsLength-operators.length); //accounts for the removal of operaters from the operators array
      updateWithCalc(index,add)
    });
    //subtract
    const subtract = (num1,num2)=>{
      return num1-num2;
    }
    subtraction.forEach(index=>{
      index = index-(originalOperatorsLength-operators.length); //accounts for the removal of operaters from the operators array
      updateWithCalc(index,subtract)
    });


    return numbers[0];
  },[]);

  //master method, parent to the calculator logic
  const onPress = useCallback((type) => {
    if (type=== (null || undefined)) return;
    type = (type).toString();
    switch (type) {
      case ('+'):
        if (!displayVal  || displayVal === '0') return; //cannot start with an operator
        lastCharIsOperator()?setDisplayVal(oldVal => (oldVal.substring(0,oldVal.length-1)+type).toString()):setDisplayVal(oldVal=>(oldVal+type).toString());
        return;
      case ('-'):
        //CAN start with a minus
        if (displayVal === '0') {
          setDisplayVal('-');
          return;
        }
        lastCharIsOperator(true)?setDisplayVal(oldVal => (oldVal.substring(0,oldVal.length-1)+type).toString()):setDisplayVal(oldVal=>(oldVal+type).toString());
        return;
      case ('/'):
        if (!displayVal || displayVal === '0') return; //cannot start with an operator
        lastCharIsOperator()?setDisplayVal(oldVal => (oldVal.substring(0,oldVal.length-1)+type).toString()):setDisplayVal(oldVal=>(oldVal+type).toString());
        return;
      case ('x'):
        if (!displayVal || displayVal === '0') return; //cannot start with an operator
        lastCharIsOperator()?setDisplayVal(oldVal => (oldVal.substring(0,oldVal.length-1)+type).toString()):setDisplayVal(oldVal=>(oldVal+type).toString());
        return;
      case ('CE'):
        if (!displayVal || displayVal === '0') return; //cannot start with an operator
        setDisplayVal('0');
        return;
      case ('='):
        if (!displayVal || displayVal === '0') return; //cannot start with an operator
        evaluate();       
        return;
      default:
        //if its a number
        //if already an operator on there, but no numbers, remove it (unless its a minus)
        if (lastCharIsOperator()&& (displayVal.length<2)&&(displayVal[0]!=='-')){
          setDisplayVal(type.toString());
          return;
        }
        setDisplayVal(oldVal => (oldVal==='0'?type:oldVal+''+type).toString());
        return;
    }
  },[evaluate, lastCharIsOperator, displayVal, setDisplayVal]);

  return (
    
    <View style={styles.app}>
      <View style={styles.statusBarBackground}>
      </View>
      <View style={styles.header}>
        <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>Simple Mobile Calculator</Text>
        <View style={styles.headerButtons}>
        <Button title="By Sheldon Frith" backgroundColor={'#C04CFD'}fontSize={15} onPress={()=> openLink('https://sheldonfrith.com')}/>
        <Button title="View on GitHub" backgroundColor={'#FC6DAB'}fontSize={15} onPress={()=>openLink('https://github.com/Sheldonfrith/simple-mobile-calculator')}/>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.display}>
        <Text style={{fontSize: 48}} adjustsFontSizeToFit={true} numberOfLines={1}>
          {displayVal}
        </Text>
      </View>
      <View style={styles.input}>
        <NumberArea onPress={onPress} backgroundColor={'#C04CFD'}/>
        <OperatorArea onPress={onPress} backgroundColor={'#FC6DAB'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    maxHeight: windowHeight,
    flex: 1,
    backgroundColor: '#3d1952',
  },
  header: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#F7F6C5',
    fontSize: 30/fontScale,
  },  
  headerButtons: {
    flexDirection: 'row',
  },  
  display: {
    flex: 0.33,
    backgroundColor: '#F7F6C5',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 10,
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'nowrap',
  },
  statusBarBackground: {
    backgroundColor: 'white',
    flex: 0.07,
  }
});
