import { StyleSheet,StatusBar} from 'react-native';

const styles = StyleSheet.create({
    view: {
      flex: 1
    },
    container:{
      justifyContent: "center",
      alignItems: "center"
    },
    contentContainer: {
      paddingTop: 10,
      alignItems: "center",
    },
    tableCell:{
      flex:1,
      flexDirection: 'column',
      alignItems:'center',
      borderBottomWidth:1,
      borderRightWidth:1,
      borderColor: '#d3d3d3'
    },
    keyboardView:{
      flex:1,
      width:'100%',
      alignItems: "center"
    },
    text:{
      fontFamily:'Planet Kosmos',
      fontSize: 23
    },
    segment:{
      borderRadius:10,
      width: '100%',
      borderColor:'white',
      marginBottom:5,
      backgroundColor: 'black'
    },
    buttonSmall:{
      borderRadius:10,
      marginTop:10,
      backgroundColor:'#000000',
      width:'40%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonBlock:{
      borderRadius:10,
      marginTop:10,
      marginBottom: 20,
      backgroundColor:'#000000',
      width:'90%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonSegment:{
      borderWidth:1,
      borderColor:'#d3d3d3',
      width:'50%',
      height:'100%',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonText:{
      fontSize: 23,
      fontFamily:'Planet Kosmos',
      color: "#fff"
    },
    buttonHidden:{
      backgroundColor:"white",
      borderColor:"black",
      borderBottomWidth:1,
      borderLeftWidth:1
    },
    form:{
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width : '90%'
    },
    label:{
      fontSize: 18,
      fontFamily:'Planet Kosmos',
      marginBottom : 5
    },
    labelBold:{
      fontSize: 18,
      fontWeight: 'bold'
    },
    labelRegular:{
      fontSize: 18,
      color: '#d3d3d3'
    },
    input:{
      borderWidth: 1,
      marginBottom : 5,
      borderRadius : 10
    },
    textarea:{
      borderRadius:10,
      width : '100%'
    },
    textSmall:{
      fontSize: 16
    },
    textSmallBlue:{
      fontSize: 16,
      color : 'blue'
    },
    image:{
      width:'100%',
      resizeMode: 'contain',
      aspectRatio: 0.9
    },
    imageList:{
      width:'90%',
      height:'90%'
    },
    icon:{
      color:"black"
    },
    list:{
      flex:1,
      width:'100%'
    },
    listItem:{
      width:'100%',
      aspectRatio: 4,
      borderBottomWidth:1,
      borderBottomColor:"black",
      alignItems:'flex-end',
      justifyContent:"flex-end"
    },
    grid:{
      width:'100%',
      position:"absolute",
      top:0
    },
    footer:{
      backgroundColor:"white",
      borderTopWidth:2,
      borderTopColor:"black"
    }
  });

export default styles;