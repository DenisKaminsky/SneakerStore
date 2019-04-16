import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button,Form,Text, Item, Input,Segment, DatePicker,Textarea} from 'native-base';
import styles from './style.js';
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';


class RegisterScreen extends React.Component {

    static navigationOptions = {
        title : "REGISTRATION ",
        headerTitleStyle: {
            fontSize: 18,
            fontWeight:"normal",
            fontFamily:'Planet Kosmos',
        }
    };

    constructor(props) {
        super(props);
        //this.setDate = this.setDate.bind(this);
    }

    state = {
        name: '',
        //birthDay: new Date(2000, 1, 1),
        male: true,        
        login: '',
        password: '',
        repeatPassword:'',
        description:'',
        isWrongName: false,
        isWrogLogin: false,
        isWrongPassword: false,
        isPasswordMissmatch: false
    };

    /*setDate(newDate) {
        this.setState({ birthDay: newDate });
    }*/
    
    getInputBorderColor(state){
        if (state)
          return {borderColor: 'red'}
        else
          return {borderColor: '#dcdcdc'} 
    }

    checkFieldOnEmpty(field,fieldProp){
        if (field == ""){
            this.setState({[fieldProp]:true});
            return false;
        }else{
            this.setState({[fieldProp]:false});
            return true;
        }
    }

    checkPassword(){
        var isMissmatch = false;

        if (this.state.password != this.state.repeatPassword){
            isMissmatch = true;
            this.setState({isPasswordMissmatch:true});
        }else{
            this.setState({isPasswordMissmatch:false});
        }
        if (this.state.password.length < 5){
            this.setState({isWrongPassword:true});
            return false;
        }else{
            this.setState({isWrongPassword:false});
            if (!isMissmatch)
                return true;
            else
                return false;
        }
    }

    submitBtnClick(){
        var isWrong = false;

        if (!this.checkFieldOnEmpty(this.state.name,'isWrongName'))
            isWrong = true;
        
        if (!this.checkFieldOnEmpty(this.state.login,'isWrongLogin'))
            isWrong = true;

        if (!this.checkPassword())
            isWrong = true;
        
        if (!isWrong){
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ 
                        routeName: 'Store',
                        params: { login: this.state.login,password: this.state.password }
                    })
                ]
            }));
        }
    }
    
    render() {
        return (            
            <ScrollView  keyboardShouldPersistTaps="always" contentContainerStyle={styles.contentContainer}>
                <KeyboardAvoidingView style={styles.keyboardView} behavior={"padding"} keyboardVerticalOffset={-80} enabled>
                    <Form style={styles.form}>
                        <Text style={styles.label}>name </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isWrongName)]} regular>
                            <Input onChangeText={(name) => this.setState({name})} value={this.state.name}/>
                        </Item>

                        <Text style={styles.label}>login </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isWrongLogin)]} regular>
                            <Input onChangeText={(login) => this.setState({login})} value={this.state.login}/>
                        </Item>
                        
                        <Text style={styles.label}>gender </Text>
                        <Segment style={styles.segment}>
                            <Button active={this.state.male} onPress={()=>this.setState({male: true})} style={[styles.buttonSegment,{borderTopLeftRadius: 10,borderBottomLeftRadius: 10}]} first>
                                <Text style={[styles.label,{color: this.state.male ? "black" : "white"}]} > male </Text>
                            </Button>
                            <Button active={!this.state.male} onPress={()=>this.setState({male: false})} style={[styles.buttonSegment,{borderTopRightRadius: 10,borderBottomRightRadius: 10}]} last>
                                <Text style={[styles.label,{color: this.state.male ? "white" : "black"}]}> female </Text>
                            </Button>
                        </Segment>

                        {/*<Text style={styles.label}>birthday </Text>
                        <View style={{ textAlignVertical: 'center',flexDirection:'row' }}>
                            <Text>Date : </Text>
                            <DatePicker
                                defaultDate={new Date(2000, 1, 1)}
                                minimumDate={new Date(1950, 1, 1)}
                                maximumDate={new Date(2019, 4, 9)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"slide"}
                                androidMode={"default"}
                                placeHolderText="1/1/2000"
                                textStyle={{ color: "blue",marginTop:-10 }}
                                placeHolderTextStyle={{ color: "#d3d3d3",marginTop:-10 }}
                                onDateChange={this.setDate}
                                disabled={false}
                                style={{borderColor:'black',borderWidth:1}}
                            />
                        </View>  */}    

                        <Text style={styles.label}>password </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isWrongPassword)]} regular>
                            <Input onChangeText={(password) => this.setState({password})} value={this.state.password} secureTextEntry={true}/>
                        </Item> 

                        <Text style={styles.label}>repeat password </Text>
                        <Item style={[styles.input,this.getInputBorderColor(this.state.isPasswordMissmatch)]} regular>
                            <Input onChangeText={(repeatPassword) => this.setState({repeatPassword})} value={this.state.repeatPassword} secureTextEntry={true}/>
                        </Item> 

                        <Text style={styles.label}>description </Text>
                        <Textarea onChangeText={(description) => this.setState({description})} value={this.state.description} style={styles.textarea} rowSpan={5} bordered/>
                    </Form>

                    <Button style={styles.buttonBlock} onPress={() => this.submitBtnClick()}>
                        <Text style={styles.buttonText}> submit </Text>
                    </Button>    
                </KeyboardAvoidingView>             
            </ScrollView>            
        );
    }
}

export default RegisterScreen;