import React from 'react';
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
        return <View>
                <SafeAreaView edges={["top"]} />
                <Text>This is home page</Text>
        </View>;
}
