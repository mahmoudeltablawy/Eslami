import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('screen')

export default function Page3({ navigation }) {
    const [index1, setindex1] = useState(0)
    const [m4, setm4] = useState(false)
    const [data, setdata] = useState([{
        name: "عندالدراسه",
        value: "اللهم أحيني على سنّة نبيّك، وأعذني من الفتن، وأبعد عنّي ما يعيقني في طريق دراستي وتحصيلي العلمي، وارزقني سهولة الفهم وقوّته ولا تصعّب عليّ أمرًا ولا تعقّد عليّ مسألة.",
        Image: require('../img/36.jpg')
    }, {
        name: "الحب",
        value: "إنّي رُزقت حُبّها، في إشارة للسيدة عائشة رضي الله عنها،",
        Image: require('../img/37.jpg')
    },
    {
        name: "الكسل",
        value: " (( «اللَّهمَّ إنِّي أعوذ بك مِن العَجْز، والكَسَل، والجبن، والهرم، والبخل، وأعوذ بك مِن عذاب القبر، ومِن فتنة المحيا والممات» ))",
        Image: require('../img/lazy.png')
    },
    {
        name: "عدم الصبر",
        value: "قال -صلى الله عليه وسلم-: (عَجَبًا لأَمْرِ المُؤْمِنِ، إنَّ أمْرَهُ كُلَّهُ خَيْرٌ، وليسَ ذاكَ لأَحَدٍ إلَّا لِلْمُؤْمِنِ، إنْ أصابَتْهُ سَرَّاءُ شَكَرَ، فَكانَ خَيْرًا له، وإنْ أصابَتْهُ ضَرَّاءُ، صَبَرَ فَكانَ خَيْرًا له).[٣]",
        Image: require('../img/wait.png')
    },
    {
        name: "السعاده",
        value: "قَالَ رَسُولُ اللهِ – صلى الله عليه وسلم -: «أَرْبَعٌ مِنَ السَّعَادَةِ: الْمَرْأَةُ الصَّالِحَةُ، وَالْمَسْكَنُ الْوَاسِعُ، وَالْجَارُ الصَّالِحُ، وَالْمَرْكَبُ الْهَنِيءُ، وَأَرْبَعٌ مِنَ الشَّقَاوَةِ: الْجَارُ السُّوءُ، وَالْمَرْأَةُ السُّوءُ، وَالْمَسْكَنُ الضَّيِّقُ، وَالْمَرْكَبُ السُّوء»",
        Image: require('../img/motivation.png')
    },
    {
        name: "ضعف الايمان ",
        value: "ضعف الخلق مرده إلى ضعف الإيمان وفى هذا المعنى يقول صلى الله عليه وسلم: «والله لا يؤمن والله لا يؤمن والله لا يؤمن، قيل: من يا رسول الله؟ قال: الذي لا يأمن جاره بوائقه.",
        Image: require('../img/weakness.png')
    }
    ])
    return (
        <>
            <View
                style={{ width: width, height: height, backgroundColor: "#324a5b", alignItems: "center" }}
            >
                <View
                    style={{ width: width, height: 60, alignItems: "center", justifyContent: "space-between", backgroundColor: "#4b3681", flexDirection: "row", padding: 15 }}
                >

                    <TouchableOpacity
                        onPress={() =>
                            navigation.goBack()
                        }

                    >
                        <Icon
                            name={"backspace"}
                            size={25}
                            color="#bbe0f9"
                        />
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={{ fontSize: 16, fontFamily: "ElMessiri-VariableFont_wght", color: "#fff", marginRight: 20 }}
                        >
                            احاديث شريفه
                        </Text>
                    </View>
                </View>

                {data.map((item, index) =>
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                setindex1(index)
                                setm4(true)
                            }}
                            style={{ width: width * 0.8, height: height * 0.11, backgroundColor: "#71a2ea", marginTop: 15, borderRadius: 15, alignItems: "center", justifyContent: "space-between", flexDirection: "row", padding: 15 }}
                        >
                            <Image source={item.Image}
                                style={{
                                    width: 60, height: 50, marginTop: 10, borderRadius: 30,

                                }}
                                resizeMode="contain"
                            />
                            <Text
                                style={{ fontSize: 20, fontFamily: "ElMessiri-VariableFont_wght", color: "#324a5b", }}
                            >
                                {item.name}
                            </Text>

                        </TouchableOpacity>
                    </>
                )}

            </View>
            <Modal
                visible={m4}
                transparent={true}
                onRequestClose={() =>
                    setm4(false)
                }
            >
                <View
                    style={{ width: width, height: height, backgroundColor: "#71a2ea", opacity: 0.8, alignItems: "center", justifyContent: "center" }}
                >
                    <Animatable.View
                        duration={1000}
                        animation="slideInDown"
                        style={{ width: width * 0.9, backgroundColor: "#324a5b", }}
                    >
                        <View
                            style={{ width: width * 0.9, height: 30, alignItems: "flex-end", }}
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    setm4(false)
                                }
                            >
                                <Icon
                                    name={"times-circle"}
                                    size={25}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{ fontSize: 22, fontFamily: "ElMessiri-VariableFont_wght", color: "#fff", }}
                        >
                            {data[index1].value}
                        </Text>
                    </Animatable.View>
                </View>
            </Modal>
        </>
    )
}