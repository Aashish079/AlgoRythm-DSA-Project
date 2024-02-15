import {createBottomTabNavigator} from 'react-navigation-tabs';

const Tab = createBottomTabNavigator();

function BottomTabs(){
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}