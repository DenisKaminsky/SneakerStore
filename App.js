import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen.js';
//import SignInScreen from './screens/SignInScreen.js'; 
//import RegisterScreen from './screens/RegisterScreen.js';
import transitionConfig from './transitionConfig.js';
import StoreScreen from "./screens/StoreScreen.js";
import ProductDetailScreen from "./screens/ProductDetailScreen.js";
import CartScreen from "./screens/CartScreen.js";
import MainScreen from "./screens/MainScreen.js";

const AppNavigator = createStackNavigator(
{
  Home: HomeScreen,
  //SignIn: SignInScreen,
  //Register: RegisterScreen,
  Store: StoreScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen,
  Main: MainScreen
},
{
  initialRouteName: "Home",
  transitionConfig
});


export default createAppContainer(AppNavigator);
