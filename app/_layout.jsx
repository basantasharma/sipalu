import React, { useEffect } from "react";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { useAuth } from "../context/authContext";

const MainLayout = () => {
  const {isAuthenticated} = useAuth();
  const segments = useSegments();
  const router = useRouter();


  useEffect(() => {
    if(typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(tabs)";
    if(isAuthenticated && !inApp) {
      router.replace('home');
    }else if(isAuthenticated == false){
      // redirect to signIn
      router.replace('signIn');
    }
  },[isAuthenticated])

  return <Slot/>
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
