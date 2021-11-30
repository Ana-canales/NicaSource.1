import React, { useState } from "react";
import {StyleSheet, Text, View, Button,TextInput, ScrollView,} from "react-native";

const Calificaciones = () => {

    const [estudiantess, setEstudiantess] = useState<string[]>([])
    const [estudiantes, setEstudiantes] = useState<string>('')
    
    const crearEstudiante = () => {
        setEstudiantess([...estudiantess, estudiantes])
    }

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
            {/* <Text style={styles.text}>IP</Text> */}
                 <TextInput
                    style={styles.p}
                    placeholder={"IP"}
                    onChangeText={setEstudiantes}
                    />
                     <TextInput
                    style={styles.p}
                    placeholder={"IIP"}
                    onChangeText={setEstudiantes}
                    />
                     <TextInput
                    style={styles.p}
                    placeholder={"NF"}
                    onChangeText={setEstudiantes}
                    />
            
            <Button
                color="#8C8A8A"
                    title="Agregar"
                    onPress={crearEstudiante}
                />
            <View>
                
                
            </View>
            <ScrollView>

                {
                    estudiantess.map((lista, index) => (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text} >{lista}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
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
    });
