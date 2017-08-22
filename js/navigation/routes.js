import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About'; 
import NavigationLayout from './NavigationLayout';
 
const Router = createRouter(() => ({
  // home: () => HomeScreen,
  about: () => About,
  navigation: () => NavigationLayout
}));

export default Router;