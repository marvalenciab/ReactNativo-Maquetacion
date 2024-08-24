import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.containerA}>A</View>
        <View style={styles.containerB}>B</View>
        <View style={styles.container211}>
          <View style={styles.containerC}>C</View>
          <View style={styles.containerD}>D</View>
          <View style={styles.containerE}>E</View>
        </View>
        <View style={styles.containerF}>F</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d2f7ff',
  },
  container1: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d2f7ff',
  },
  containerA: {
    height: '18%', // Ocupa una parte del espacio disponible
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    margin: 5,
    borderRadius: 15,
    padding: 10,
  },
  containerB: {
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    flex: 1,
    margin: 5,
    height: '30%',
    borderRadius: 15,
  },
  container211: {
    flex: 1, // Ocupa el espacio restante dentro de container21
    flexDirection: 'row',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    margin: 0,
    width: '100%',
    padding: 5,
  },
  containerC: {
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    flex: 1,
    height: '70%',
    borderRadius: 20,
    margin: 10,
  },
  containerD: {
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    flex: 1,
    margin: 5,
    height: '70%',
    borderRadius: 20,
    margin: 10,
  },
  containerE: {
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    flex: 1,
    height: '70%',
    borderRadius: 20,
    margin: 10,
  },
  containerF: {
    height: '18%',
    backgroundColor: '#9eecff',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  },
});
