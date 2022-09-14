import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


/** Interface Property */
interface ButtonProps {
  title: string;
}


/** Components */
function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonSend}>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


/** Render Components */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World! :D</Text>
      <Button title='BUTTON SEND TEST'/>
      <StatusBar style="auto" />
    </View>
  );
}


/** Style */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 22
  },

  buttonSend: {
    backgroundColor: '#3C3C3C',
    borderRadius: 8,
    padding: 10,
    marginTop: 20
  },

  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
