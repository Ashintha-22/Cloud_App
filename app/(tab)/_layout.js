import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "$Restaurant Name",
        headerTitleStyle: {
          alignSelf: "center",
          color: "grey",
          fontWeight: "normal",
          fontSize: 18,
          marginLeft: 60,
        },
        headerTitleContainerStyle: {
          alignSelf: "center",
        },
        headerStyle: {
          height: 90,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#fff",
        },
        headerLeft: () => {
          return (
            <Ionicons
              name="menu-outline"
              size={24}
              color="grey"
              style={{ marginLeft: 20 }}
            />
          );
        },
        //change this with users profile image
        headerRight: () => {
          return (
            <Image
              source={require("../../assets/profile.png")}
              resizeMode="contain"
              style={{ width: 30, marginRight: 20 }}
            />
          );
        },
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#fff",
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: { marginBottom: 8, marginTop: -10 },
        tabBarActiveTintColor: "#6B3DB6",
        tabBarInactiveTintColor: "#E6D2FF",
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "fast-food" : "fast-food-outline";
            // Adjust the size value to your desired icon size
            const iconSize = 30; // Change this to your preferred size
            // You can return any component that you like here!
            color = focused ? "#6B3DB6" : "#E6D2FF";
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="History/index"
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "library" : "library-outline";
            // Adjust the size value to your desired icon size
            const iconSize = 30; // Change this to your preferred size
            // You can return any component that you like here!
            color = focused ? "#6B3DB6" : "#E6D2FF";
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          tabBarLabel: "Profile",
          //   tabBarIcon: ({ focused }) => {
          //     if (focused) {
          //       return (
          //         <Image
          //           source={require("../../assets/profile.gif")}
          //           style={{ width: 35, height: 35 }}
          //           resizeMode="contain"
          //         />
          //       );
          //     } else {
          //       return <Ionicons name={"person-circle-outline"} size={30} />;
          //     }
          //   },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "person" : "person-outline";
            // Adjust the size value to your desired icon size
            const iconSize = 30; // Change this to your preferred size
            // You can return any component that you like here!
            color = focused ? "#6B3DB6" : "#E6D2FF";
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
