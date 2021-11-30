import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Button,TextInput, ScrollView,} from "react-native";

const Calificaciones = () => {

    const [estudiantess, setEstudiantess] = useState<string[]>([])
    const [estudiantes, setEstudiantes] = useState<string>('')

    const [IPnota, setIParcial] = useState('')
    const [IIPnota, setIIParcial] = useState('')

    const [notaFinales, setnotaFinales] = useState<string[]>([])

    const [result, setResult] = useState<number>(0);
    
    const crearEstudiante = () => {

        const divisor = 2;
        const notafinal = (parseInt(IPnota) + parseInt(IIPnota)) / divisor;
        setResult(notafinal);

        setEstudiantess([...estudiantess, estudiantes])
        setnotaFinales([...notaFinales,notafinal.toString() ])
        
    }
    // useEffect(crearEstudiante, [IIPnota]);

    return (
      <View style={styles.containerBase}>
        <Text style={styles.text}>Nombre del Estudiante</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.inputs}
            placeholder={"Nombre del Estudiante"}
            onChangeText={setEstudiantes}
          />
        </View>
        <View style={styles.fixToImput}>

        <View style={styles.p}>
          <TextInput placeholder={"IP"} 
          onChangeText={setIParcial} 
          />
        </View>

        <View style={styles.p}>
          <TextInput placeholder={"IIP"} 
          onChangeText={setIIParcial} 
          />
        </View>

        <View style={styles.p}>
          <Text>{result.toString()}</Text>
        </View>
        <View style={styles.container2}>
        <Button color="#8C8A8A" 
        title="Agregar" 
        onPress={crearEstudiante}
         />
         </View>
         </View>
        <ScrollView>
          {
        //   estudiantess.map((lista, index) => (
        //     <View style={styles.container} key={index}>
        //       <Text style={styles.text}>{lista}</Text>
        //       <Text>Nota Final:{result.toString()}</Text>

        estudiantess.map((estudiantess, index) => (
            <View style={styles.container} key={index}>
                <Text style={styles.text} >{estudiantess}</Text>
                <Text style={[notaFinales[index] < '60' ? styles.textReprobado : styles.textAprobado]}>Nota Final :{notaFinales[index]}</Text>
            </View>
          ))
          }
        </ScrollView>
      </View>
    );
}

export default Calificaciones

const styles = StyleSheet.create({
    text: {
        marginTop: "20%",
        fontSize: 20,
      },
      inputs: {
        borderRadius: 5,
        padding: 15,
        fontSize: 20,
        backgroundColor: "#FFFFFF",
      },
      container: {
        borderRadius: 8,
        marginLeft: 8,
        width: '95%',
        flexDirection: 'row',
        borderWidth: 3,
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderColor: '#8C8A8A',
        marginTop: 10,
        marginBottom: 10,
      },
      containerBase: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
    textReprobado: {
        fontSize: 24,
        color: '#B52222',
    },
    textAprobado: {
        fontSize: 24,
        color: '#05786A',
    },
      p:{
        width: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 9,
        marginLeft: 10,
        marginTop: 10,
        borderWidth: 3,
        borderColor: "#8C8A8A",
    },
    container1: {
        width: '25%',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginLeft: 5,
        borderColor: '#8C8A8A',
        borderWidth: 3
    },
    fixToImput: {
        flexDirection: 'row',
    },
    container2: {
        width: '25%',
        marginBottom: 5,
        marginLeft: 5,

    }
});
