import React from 'react';
import { View,Image,TouchableOpacity } from 'react-native';
import { Text,Input,Icon,Item } from 'native-base';
import styles from './style.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import { products } from '../models/programData.js';
import Images from '../assets/products_uri.js';

class StoreScreen extends React.Component {

    state = {
        elementsInRowCount : 3,
        products : products
    }
    
    isContainSubstring(str,subStr){
        var reg = new RegExp(subStr, 'i');
        if(str.search(reg) + 1) 
            return true;
        else
            return false;
    }

    onChangeSearchText(text){
        if (text.length == 0)
            this.setState({products: products});
        if (text.length >= 2){
            var searchResult = products.filter(product => (this.isContainSubstring(product.producer+" "+product.name,text)));
            this.setState({products:searchResult});
        }
    }

    generateCell(index){
        return (
            <Col style={styles.tableCell} key={index+1} >  
                <TouchableOpacity style={{width:'100%'}} onPress={() => this.props.navigate('ProductDetail',{id: this.state.products[index].id,returnCartCount: this.props.callbackFunc})}>     
                    <View style={styles.view}>          
                        <Image style={styles.image} source={ {uri : Images["_"+this.state.products[index].id]["_1"]+"300.jpg",cache: 'only-if-cached'} }/>
                        <Text style={[styles.labelBold,{textAlign: 'center'}]}>{this.state.products[index].producer}</Text>
                        <Text style={[styles.labelRegular,{textAlign: 'center',marginBottom:50}]}>{this.state.products[index].name}</Text>
                    </View> 
                </TouchableOpacity>
                <Text style={[styles.label,{alignSelf: 'center',position:'absolute',bottom:0}]}> ${this.state.products[index].price} </Text>   
            </Col>
        );
    }

    generateRow(counter,maxElementsCount,realElementsCount){
        var row = [];

        for (var i = 0; i < maxElementsCount; i++) {
            if (i < realElementsCount){
                row.push(
                    this.generateCell(counter+i)
                );  
            }else{
                row.push(
                    <Col key={i+1}></Col>
                );  
            }       
        }

        return row;
    }

    generateTable(){
        var maxElementsInRowCount = this.state.elementsInRowCount;
        var rowsCount = this.state.products.length % maxElementsInRowCount == 0 ? 
            Math.floor(this.state.products.length/maxElementsInRowCount) : (Math.floor(this.state.products.length/maxElementsInRowCount)+1);
        var lastRowElementsCount = this.state.products.length % maxElementsInRowCount == 0 ? 
            maxElementsInRowCount : (this.state.products.length % maxElementsInRowCount);

        var rows = [];        
        var counter = 0;
        for (var i = 0; i < rowsCount; i++) {
            rows.push(
                <Row key={i+1}>
                    {this.generateRow(counter,maxElementsInRowCount, i == (rowsCount-1) ? lastRowElementsCount : maxElementsInRowCount )}
                </Row>);   
                counter += maxElementsInRowCount;  
        } 

        return rows;
    }

    //render component
    render() {     
        return (
            <View style={styles.view}>
                <View style={[styles.container,{borderColor:"black",borderBottomWidth:2}]}>
                    <Item style={{width:'90%'}}>
                        <Icon name="ios-search" />
                        <Input
                            onChangeText={this.onChangeSearchText.bind(this)}
                            placeholder="Search"
                        />
                    </Item> 
                </View>
                <ScrollView  keyboardShouldPersistTaps="always">
                    <Grid>
                        {this.generateTable()}
                    </Grid>             
                </ScrollView>
            </View>
        );
    }
}

export default StoreScreen;