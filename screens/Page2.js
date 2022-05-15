import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen')

export default function Page2({ navigation }) {
    const [arr, setarr] = useState(["سبحان الله ", "الحمد لله ", "الله اكبر", "اتمم المئه بقول لا اله الا هو وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو علي كل شيئ قدير "])
    const [num, setnum] = useState(0)
    const [index, setindex] = useState(0)
    function plus() {

        setnum(num + 1)

    }
    function change() {
        if (num == 33) {
            setindex(index + 1)
            setnum(0)
        }
    }
    function change2() {
        if (index == 3 && num == 1) {
            setnum(0)
            setindex(0)
        }
    }


    return (
        <>
            <View
                style={{ width: width, height: height, backgroundColor: "#fff", alignItems: "center" }}
            >
                <View
                    style={{ width: width, height: 60, backgroundColor: "#4b3681", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}
                >

                    <TouchableOpacity
                        onPress={() =>
                            navigation.goBack()
                        }

                        style={{ width: 60, height: 60, backgroundColor: "#4b3681", alignItems: "center", justifyContent: "center" }}
                    >
                        <Icon
                            name={"backspace"}
                            size={25}
                            color="#bbe0f9"
                        />
                    </TouchableOpacity>
                    <View
                        style={{ width: 80, height: 60, backgroundColor: "#4b3681", alignItems: "center", justifyContent: 'center', }}
                    >
                        <Text
                            style={{ fontSize: 22, fontFamily: "ElMessiri-VariableFont_wght", color: "#fff" }}
                        >
                            سبحه
                        </Text>
                    </View>
                </View>
                <View
                    style={{ width: width * 0.5, backgroundColor: "#bbe0f9", borderRadius: 10, height: 70, marginTop: 35, borderWidth: 1.5, borderColorWidth: "#000", alignItems: "center", justifyContent: "center" }}
                >
                    <Text
                        style={{ fontSize: 50, fontFamily: "Shizuru-Regular", color: "#000" }}
                    >
                        {num}
                    </Text>
                </View>
                <Text
                    style={{ fontSize: 16, fontFamily: "ElMessiri-VariableFont_wght", color: "#4b3681", marginTop: 15 }}
                >
                    {arr[index]}
                </Text>
                <View
                    style={{ width: width, height: 70, backgroundColor: "#fff", alignItems: "flex-end" }}
                >
                    <View
                        style={{ width: 150, height: 70, backgroundColor: "#fff", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
                    >
                        <Text
                            style={{ fontSize: 16, fontFamily: "ElMessiri-VariableFont_wght", color: "#4b3681", marginRight: 20 }}
                        >
                            اعاده تعين
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setnum(0)
                                setindex(0)
                            }}
                            style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}
                        >
                            <Icon
                                name='sync-alt'
                                size={35}
                                color="#4b3681"
                            />
                        </TouchableOpacity>


                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        plus()
                        change()
                        change2()
                    }}
                    style={{ width: 250, height: 250, borderRadius: 125, backgroundColor: "#ccc" }}
                ></TouchableOpacity>
            </View>
        </>
    )
}