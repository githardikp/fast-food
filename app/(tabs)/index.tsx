import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { verifyInstallation } from 'nativewind';
import { SafeAreaView } from "react-native-safe-area-context";
import { images, offers } from "@/constants";
import { Fragment } from "react";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import CartButton from "@/components/CartButton";

export default function App() {
  // Add NativeWind verification
  // verifyInstallation();
  
  return (

    <SafeAreaView className="flex-1 bg-white"  >
      {/* <View className="flex-row justify-between w-full my-5 px-5">
        <View className="flex justify-start">
          <Text className="small-bold text-primary">Deliver To</Text>
          <TouchableOpacity className="flex-row justify-start items-center gap-x-2">
            <Text className="paragraph-bold text-dark-100">
              Bangalore, India
            </Text>
            <Image 
              source={images.arrowDown}
              className="size-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text>
          Cart
        </Text>
      </View> */}
      <FlatList
        data={offers}
        renderItem={({item, index})=>{
          const isEven = index%2===0
          return(
            <View>
              <Pressable className={isEven?"flex-row-reverse offer-card":"flex-row offer-card"} style={{backgroundColor:item.color}}>
                {()=>(
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image source={item.image} className="size-full" resizeMode="contain"/>
                    </View>
                    <View className={isEven ? "offer-card__info pl-10" : "offer-card__info pr-10"}>
                      <Text className="h1-bold text-white-100 leading-tight">
                        {item.title}
                      </Text>
                      <Image 
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={
          <View className="flex-row justify-between w-full my-5 px-5">
          <View className="flex justify-start">
            <Text className="small-bold text-primary">Deliver To</Text>
            <TouchableOpacity className="flex-row justify-start items-center gap-x-2">
              <Text className="paragraph-bold text-dark-100">
                Bangalore, India
              </Text>
              <Image 
                source={images.arrowDown}
                className="size-3"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <CartButton/>
        </View>
        }
      />
    </SafeAreaView>
  );
}