import React from 'react';
import { View,Image } from 'react-native';
import { Button,Text,Container } from 'native-base';
import styles from './style.js';
import { ScrollView } from 'react-native-gesture-handler';
import Images from '../assets/products_uri.js';
import { products,cart } from '../models/programData.js';
import Swiper from 'react-native-swiper';

class ProductDetailScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title : "product ",
            headerTitleStyle: {
                fontSize: 18,
                fontWeight:"normal",
                fontFamily:'Planet Kosmos',
            }
        }
    };
    
    addToCartBtnClick(product){
        cart.addItem(product);
        var count = cart.getTotalCount();
        this.props.navigation.state.params.returnCartCount(count);
        this.props.navigation.goBack();
    }
        
    getItemById(id){
        var searchResult = products.filter(product => (product.id === id));
        return searchResult[0];
    }

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        const product = this.getItemById(id);
        const images = Images["_"+product.id];

        return (     
            <View style={styles.view}>       
                <ScrollView>
                    <Container style={{width:'100%',height:390,borderBottomColor:"black" , borderBottomWidth:1 }}>
                        <Swiper activeDotColor={"black"}  style={styles.view}>
                            <View style={styles.view}>
                                <Image style = {styles.image} source={ {uri : images["_1"]+"600.jpg",cache: 'only-if-cached'} }/>
                            </View>
                            <View style={styles.view}>
                                <Image style = {styles.image} source={ {uri : images["_2"]+"600.jpg",cache: 'only-if-cached'} }/>
                            </View>
                            <View style={styles.view}>
                                <Image style = {styles.image} source={ {uri : images["_3"]+"600.jpg",cache: 'only-if-cached'} }/>
                            </View>
                        </Swiper>
                    </Container>
                    
                    <Text style={[styles.label,{marginTop:5,marginBottom:0,marginLeft:"5%"}]}>brand </Text>  
                    <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos',marginLeft:"10%"}]}>{product.producer} </Text>
                    
                    <Text style={[styles.label,{marginBottom:0,marginLeft:"5%"}]}>model </Text>  
                    <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos',marginLeft:"10%"}]}>{product.name} </Text>

                    <Text style={[styles.label,{marginBottom:0,marginLeft:"5%"}]}>country </Text>  
                    <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos',marginLeft:"10%"}]}>{product.country} </Text>

                    <Text style={[styles.label,{marginBottom:0,marginLeft:"5%"}]}>price </Text>  
                    <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos',marginLeft:"10%"}]}>${product.price} </Text>

                    <Text style={[styles.label,{marginBottom:0,marginLeft:"5%"}]}>count </Text>  
                    <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos',marginLeft:"10%"}]}>{product.count} </Text>

                    <Button style={[styles.buttonBlock,{alighSelf:'center'}]} onPress={()=>this.addToCartBtnClick(product)}>
                        <Text style={[styles.buttonText,{fontSize:20}]}> add to cart </Text>
                    </Button> 
                            
                </ScrollView> 
            </View>        
        );
    }
}

export default ProductDetailScreen;