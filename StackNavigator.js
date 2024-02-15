import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Liked" component={LikedSongsScreen} options={{headerShown:false}}/> 
                <Stack.Screen name="Info" component={SongInfoScreen} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
