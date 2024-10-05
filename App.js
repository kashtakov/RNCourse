
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [enterdGoalText, setEnterdGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

   function goalInputHandler(enterdText){
    setEnterdGoalText(enterdText);
   };
   
   function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      enterdGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goals!' onChangeText={goalInputHandler}/>
        <Button title='Add goal!' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <FlatList 
      alwaysBounceVertical={false} 
      data={courseGoals} 
      renderItem={(itemData) =>
        {
          return(
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
          )
        }}
       
      />
       
  
      </View>
 
    </View> 
  );
}

const styles = StyleSheet.create({
   appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

   },
   inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

   },
   textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
   },
   goalsContainer:{
    flex:4,
   },
   goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
      
  },
  goalText:{
    color: 'white', 
  }

 
});
