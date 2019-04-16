import React from 'react';
import { StatusBar,Text, View} from 'react-native';
import { Root, Container, Spinner, Button } from 'native-base';
import { Font, AppLoading} from "expo";
import styles from './style.js';

class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = { loading: true };
    }
  
    async componentWillMount() {
      await Font.loadAsync({
        'Planet Kosmos': require("../assets/fonts/PlanetKosmos.ttf"),
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }
    
    render() {
      if (this.state.loading) {
        return (          
          <Root>
            <Spinner color='black' />
            <AppLoading />
          </Root>
        );
      }
      return (      
        <View style={styles.view}>
          <StatusBar backgroundColor="#00BCD4" hidden = {false} barStyle="dark-content" translucent = {true}/>
          
          <Container style={styles.container}>
            <Text style={styles.text}> welcome </Text>
            <Text style={styles.text}> to </Text>
            <Text style={styles.text}> concept </Text>
            <Button style={styles.buttonSmall} onPress={() => this.props.navigation.navigate('Main',{title:"store ",isInCart:false})}>
              <Text style={styles.buttonText}> join </Text>
            </Button>
          </Container> 
        </View>      
      );
    }
}

export default HomeScreen;