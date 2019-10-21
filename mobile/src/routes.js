import { createAppContainer, createSwitchNavigation } from 'react-native-navigation'

import Login from './pages/Login';
import List from '.pages/List'; 
import Book from '.pages/Book';

const Routes = createAppContainer(
    createSwitchNavigation({
        Login,
        List,
        Book
    })
);

export default Routes;