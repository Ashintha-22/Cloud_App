import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Register" />
      <Stack.Screen
        name="Login"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          animationDuration: 200,
        }}
      />
      <Stack.Screen name="FaceRef" />
    </Stack>
  );
};

export default StackLayout;
