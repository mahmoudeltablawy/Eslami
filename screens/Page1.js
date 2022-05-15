import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, Image, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen')
import * as Animatable from 'react-native-animatable';
export default function Page1({ navigation }) {

    return (
        <>
            <View
                style={{ width: width, height: height, backgroundColor: "#4b3681", alignItems: "center", padding: 15 }}
            >
                <View
                    style={{ width: width * 0.8, height: height * 0.25, backgroundColor: "#fff", borderRadius: 25 }}
                >
                    <View
                        style={{ width: width * 0.8, backgroundColor: "#fff", height: height * 0.20, borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: "center", justifyContent: "center" }}
                    >
                        <Image source={require('../img/33.jpg')}
                            style={{
                                width: 150, height: 150, marginTop: 10,
                                resizeMode: "stretch"
                            }}
                        />
                    </View>
                    <View
                        style={{ width: width * 0.8, height: height * 0.05, backgroundColor: "#caffce", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, alignItems: "center" }}
                    >
                        <Text
                            style={{ fontSize: 30, fontFamily: "ElMessiri-VariableFont_wght", color: "#4b3681" }}
                        >
                            ذكرني
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Page2")
                    }
                    activeOpacity={0.8}
                    style={{ width: width * 0.8, height: height * 0.25, backgroundColor: "#fff", marginTop: 35, borderRadius: 25 }}
                >
                    <View
                        style={{ width: width * 0.8, backgroundColor: "#fff", height: height * 0.20, borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: "center", justifyContent: "center" }}
                    >
                        <Image source={require('../img/34.jpg')}
                            style={{
                                width: 100, height: 100, marginTop: 10,
                                resizeMode: "stretch"
                            }}
                        />
                    </View>
                    <View
                        style={{ width: width * 0.8, height: height * 0.05, backgroundColor: "#caffce", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, alignItems: "center" }}
                    >
                        <Text
                            style={{ fontSize: 22, fontFamily: "ElMessiri-VariableFont_wght", color: "#4b3681" }}
                        >
                            سبحه
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Page3")
                    }
                    activeOpacity={0.8}
                    style={{ width: width * 0.8, height: height * 0.25, backgroundColor: "#fff", marginTop: 35, borderRadius: 25 }}
                >
                    <View
                        style={{ width: width * 0.8, backgroundColor: "#fff", height: height * 0.20, borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: "center", justifyContent: "center" }}
                    >
                        <Image source={require('../img/35.jpg')}
                            style={{
                                width: 100, height: 100, marginTop: 10,
                                resizeMode: "stretch"
                            }}
                        />
                    </View>
                    <View
                        style={{ width: width * 0.8, height: height * 0.05, backgroundColor: "#caffce", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, alignItems: "center" }}
                    >
                        <Text
                            style={{ fontSize: 22, fontFamily: "ElMessiri-VariableFont_wght", color: "#4b3681" }}
                        >
                            احاديث شريفه
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </>
    )





}