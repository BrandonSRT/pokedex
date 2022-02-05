import{Formik,Form, FormikProps} from 'formik';
import React from "react";
import {View, Text, StyleSheet, Button, TextInput,} from "react-native";


interface Values{
    name:string;
    lastName:string;
    email:string;
    password:string
}

const TrainerForm = () =>{
    const values={
        name:"",
        lastName:"",
        email:"email",
        password:"password",
    };
    return(
        <View style={styles.container}>
            <Formik
            initialValues={values} onSubmit={(val)=>console.log(val)}>
                {(props:FormikProps<Values>)=>(
                    <Form>
                        <TextInput placeholder="First Name" onChangeText={props.handleChange("name")}></TextInput>
                        <TextInput placeholder="Last Name"  onChangeText={props.handleChange("lastName")}></TextInput>
                        <TextInput placeholder="Email"  onChangeText={props.handleChange("email")}></TextInput>
                        <TextInput placeholder="Password"  onChangeText={props.handleChange("password")}></TextInput>
                        <Button title="Submit" onPress={()=>props.handleSubmit()}></Button>
                    </Form>
                )}
            </Formik>
        </View>
    )
};

export default TrainerForm;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: "center",
    },
})