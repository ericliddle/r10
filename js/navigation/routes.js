import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About';
import Faves from '../scenes/Faves';
// import Maps from '../scenes/Maps'; 
import Schedule from '../scenes/Schedule';
import Sessions from '../scenes/Sessions';
import Speaker from '../scenes/Speaker';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  // home: () => HomeScreen,
  schedule: () => Schedule,
  sessions: () => Sessions,
  about: () => About,
  faves: () => Faves,
  // maps: () => Maps,
  speaker: () => Speaker,
  navigation: () => NavigationLayout
}));

export default Router;