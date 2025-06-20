import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { Tabs } from "expo-router"
import { Image, ImageBackground, Text, View } from "react-native"

export default function TabsLayout() {
  const TabIcon = (props: any) => {
    if (props.focused) {
        return (
            <ImageBackground 
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={props.icon} tintColor={"#151312"} className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">{props.title}</Text>
            </ImageBackground>
        )
  } else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image source={props.icon} tintColor={"#A8B5DB"} className="size-5" />
            </View>
        )
    }
  }

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#0f0d23",
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0f0d23",
            },
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }
        }}>
        <Tabs.Screen 
            name="index"
            options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.home} title="Home" />
            )
            }}
        />
        <Tabs.Screen 
            name="search"
            options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.search} title="Search" />
            )
            }}
        />
        <Tabs.Screen 
            name="saved"
            options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.save} title="Saved" />
            )
            }}
        />
        <Tabs.Screen 
            name="profile"
            options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={icons.person} title="Profile" />
            )
            }}
        />
    </Tabs>
  )
}