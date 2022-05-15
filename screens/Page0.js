import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('screen')
export default function Page0({ navigation }) {
    const [timer, settimer] = React.useState(true)
    React.useEffect(() => {
        let x = 0
        setTimeout(() => {
            navigation.replace('Page1')
        }, 2000);
    })
    return (

        <>
            <View
                style={{ width: width, height: height, backgroundColor: "#4b3681", alignItems: "center", justifyContent: "center" }}
            >
                <Image
                    source={require('../img/a1.gif')}
                    style={{ width: width * 0.6, height: height * 0.4, }}
                    resizeMode="cover"
                />
            </View>

        </>
    )
}