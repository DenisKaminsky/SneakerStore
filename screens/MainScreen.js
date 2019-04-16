import React from 'react';
import { View,StatusBar} from 'react-native';
import { Button, Footer,FooterTab,Text,Badge,Icon } from 'native-base';
import styles from './style.js';
import { cart } from '../models/programData.js';
import StoreScreen from "./StoreScreen.js";
import CartScreen from "./CartScreen.js";

class MainScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title : navigation.getParam('title'),
            headerTitleStyle: {
                fontSize: 18,
                fontWeight:"normal",
                fontFamily:'Planet Kosmos',
            },
            headerRight: (   
                <View style={{ flexDirection:'row' }}>
                    {navigation.getParam('isInCart') &&
                        <FooterTab style={{backgroundColor:"white"}}>       
                            <Button style={{backgroundColor:"white"}} onPress={navigation.getParam('clearCart')} vertical>
                                <Icon style={styles.icon} name="trash" />
                            </Button>
                        </FooterTab>
                    }
                </View>    
            ),
        }
    };
    
    state = {
        activeFooterTab : 1,
        cartCount : cart.getTotalCount()
    }
    
    //callback func for detail screen
    returnCartCount(count) {
        this.setState({cartCount:count});
    }

    //clear button listener for cart
    clearCart = () => {
        cart.clear();
        this.setState({cartCount : 0});
    }

    //after component render
    componentDidMount() {
        this.props.navigation.setParams({ clearCart: this.clearCart});
    }

    //select Store on tab bar
    selectStoreScreen(){
        this.setState({activeFooterTab: 1});
        this.props.navigation.setParams({title:"store ",isInCart:false});
    }

    //select Cart on tab bar
    selectCartScreen(){
        this.setState({activeFooterTab: 2});
        this.props.navigation.setParams({title:"cart ",isInCart:true});
    }

    //component render
    render() {  
        let StoreComponent = StoreScreen;
        let CartComponent = CartScreen;

        return (
            <View style={styles.view}>
                <StatusBar backgroundColor="#00BCD4" hidden = {false} barStyle="dark-content" translucent = {true}/>
                
                {this.state.activeFooterTab == 1 ? <StoreComponent callbackFunc={this.returnCartCount.bind(this)} navigate={this.props.navigation.navigate}/> : <CartComponent callbackFunc={this.returnCartCount.bind(this)} navigate={this.props.navigation.navigate}/> }
                
                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button style={{backgroundColor:"white"}} active={this.state.activeFooterTab == 1} onPress={()=>this.selectStoreScreen()} vertical>
                            <Icon style={{color: this.state.activeFooterTab == 1 ? "black" : "#d3d3d3"}} name="briefcase"/>
                            <Text style={{color: this.state.activeFooterTab == 1 ? "black" : "#d3d3d3"}}>Store</Text>
                        </Button>
                        <Button style={{backgroundColor:"white"}} active={this.state.activeFooterTab == 2} onPress={()=>this.selectCartScreen()} badge vertical>
                            <Badge style={{backgroundColor:"#d3d3d3"}}><Text style={{color:"black",fontSize:10}}>{this.state.cartCount}</Text></Badge>
                            <Icon style={{color: this.state.activeFooterTab == 2 ? "black" : "#d3d3d3"}} name="cart" />
                            <Text style={{color: this.state.activeFooterTab == 2 ? "black" : "#d3d3d3"}}>Cart</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

export default MainScreen;