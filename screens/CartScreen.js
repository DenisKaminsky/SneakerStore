import React from 'react';
import { View,Image,TouchableOpacity,ListView } from 'react-native';
import { Text, List, ListItem, Button,Icon } from 'native-base';
import styles from './style.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import { cart } from '../models/programData.js';
import Images from '../assets/products_uri.js';

class CartScreen extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        cart.deleteItem(rowId);
        this.props.callbackFunc(cart.getTotalCount());
    }

    async incItemCount(rowID){
        cart.incItemCountByIndex(rowID)
        await this.props.callbackFunc(cart.getTotalCount());
    }

    async decItemCount(rowID){
        cart.decItemCountByIndex(rowID)
        await this.props.callbackFunc(cart.getTotalCount());
    }

    //component render
    render() {
        return (
            <View style={styles.view}>
                {/*<ScrollView  keyboardShouldPersistTaps="always">*/}
                    <List style={styles.list}
                        stopRightSwipe={-75}
                        rightOpenValue={-75}
                        disableRightSwipe = {true}
                        dataSource={this.ds.cloneWithRows(cart.getItems())}
                        renderRow = {(rowData,sectionID, rowID) => 
                            <ListItem style={styles.listItem}>
                                <Grid style={styles.grid}>
                                    <Col style={{width:'25%',aspectRatio: 1}}>
                                        <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={() => this.props.navigate('ProductDetail',{id: rowData.product.id,returnCartCount: this.props.callbackFunc})}>     
                                            <View style={styles.view}>          
                                                <Image style={styles.imageList} source={ {uri : Images["_"+rowData.product.id]["_1"]+"300.jpg",cache: 'only-if-cached'} }/>                            
                                            </View> 
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <Row style={{borderBottomWidth:1,borderColor:"#d3d3d3"}}>
                                            <Text ellipsizeMode={"tail"} numberOfLines={1} style={[styles.label,{marginBottom:0}]}>{rowData.product.producer} </Text>
                                        </Row>
                                        <Row style={{borderBottomWidth:1,borderColor:"#d3d3d3"}}>
                                            <Text ellipsizeMode={"tail"} numberOfLines={1} style={[styles.labelRegular,{textAlignVertical:"top"}]}>{rowData.product.name} </Text>
                                        </Row>
                                        <Row>
                                            <Col style={{flexDirection:"row"}}>
                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>                                                
                                                <Icon style={styles.icon} name="add" onPress={_ => this.incItemCount(rowID)} />
                                                
                                                <Text style={[styles.labelRegular]}> {cart.getItemCountById(rowData.product.id)} </Text>
                                                
                                                <Icon style={styles.icon} name="remove" onPress={_ => this.decItemCount(rowID)}/>                                                
                                            </View>
                                                {/*<Button transparent >
                                                    <Icon style={styles.icon} name="add" />
                                                </Button>
                                                <Text style={[styles.labelRegular,{alignSelf:"flex-start"}]}> {cart.getItemCountById(rowData.product.id)} </Text>
                                                <Button transparent vertical>
                                                    <Icon style={styles.icon} name="remove" />
                                                </Button>*/}
                                                {/*<Text style={[styles.labelRegular,{alignSelf:"flex-start"}]}>Count: {cart.getItemCountById(rowData.product.id)} </Text>*/}
                                            </Col>
                                            <Col>
                                                <Text style={[styles.label,{marginBottom:0,alignSelf:"flex-end"}]}>${rowData.product.price} </Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Grid>
                            </ListItem> 
                        }  
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full style={styles.buttonHidden} onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon style={styles.icon} name="close" />
                            </Button>
                        }                     
                    />             
                {/*</ScrollView>*/}
                <View style={[styles.container,styles.footer]}>
                    <Text>
                        <Text style={[styles.label,{marginBottom:0}]}>Total Price: </Text> 
                        <Text style={[styles.labelRegular,{fontFamily:'Planet Kosmos'}]}>${cart.getTotalPrice()} </Text>
                    </Text> 
                </View>
            </View>
        );
    }
}

export default CartScreen;