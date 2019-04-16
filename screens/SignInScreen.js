import React from 'react';
import { View } from 'react-native';
import { Button,Form,Text, Item, Input, Container } from 'native-base';
import styles from './style.js';
import { StackActions, NavigationActions } from 'react-navigation';

class SignInScreen extends React.Component {

    static navigationOptions = {
        title : "SIGN IN"
    };

    state = {
        isLoginWrong: false,
        isPasswordWrong: false,
        login: '',
        password: ''
    };

    checkFieldOnEmpty(field,fieldProp){
        if (field == ""){
            this.setState({[fieldProp]:true});
            return false;
        }else{
            this.setState({[fieldProp]:false});
            return true;
        }
    }

    submitBtnClick(){
        var isWrong = false;

        if (!this.checkFieldOnEmpty(this.state.login,'isLoginWrong'))
            isWrong = true;

        if (!this.checkFieldOnEmpty(this.state.password,'isPasswordWrong'))
            isWrong = true;

        if (!isWrong){
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ 
                        routeName: 'Store',
                        params: { login: this.state.login, password: this.state.password }
                    })
                ]
            }));
        }
    }
    
    //here is user validation
    
    getInputBorderColor(state){
        if (state)
            return {borderColor: 'red'}
        else
            return {borderColor: '#dcdcdc'} 
    }

    render() {
        return (
            <View style={styles.view}>
                <Container style={styles.container}>
                    <Form style={styles.form}>
                        <Text style={styles.label}>login </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isLoginWrong)]} regular>
                            <Input onChangeText={(login) => this.setState({login})} value={this.state.login} />
                        </Item>

                        <Text style={styles.label}>password </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isPasswordWrong)]} regular>
                            <Input onChangeText={(password) => this.setState({password})} value={this.state.password} secureTextEntry={true}/>
                        </Item>  
                    </Form>

                    <Text>
                        <Text style={styles.textSmall}>If you dont have account you can </Text>
                        <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.textSmallBlue}>Register </Text>
                    </Text>

                    <Button onPress={() => this.submitBtnClick()} style={styles.buttonBlock} >
                        <Text style={styles.buttonText}> submit </Text>
                    </Button> 
                </Container>
            </View>
        );
    }
}

export default SignInScreen;