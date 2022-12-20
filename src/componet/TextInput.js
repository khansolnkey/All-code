import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
// import Colors from '../value/Colors';
// import ImagePath from '../value/ImagePath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Imagepath from './Imagepath';

export default function TextInputs(navigation) {
    const [click, setclick] = useState('')
    const [chegeimge, setchegeimge] = useState('')
    const { editable, onFocus, placeholder, value, returnKeyType, onChangeText, getfocus,
        keyboardType, secureTextEntry, setfocus, blurOnSubm, maxLength, numberOfLines, rightIcon, onClickRightIcon, onClickLeftIcon,
        leftIcon, textAlignVertical, height, multiline, backgroundColor, placeholderTextColor, color, textContentType } = navigation


    return (
        <View style={[styles.mainViewOffCss, { height: height ? height : hp("7.2%"), backgroundColor: backgroundColor ? backgroundColor : "#00B4C7", }]}>
{leftIcon &&
            <TouchableOpacity onPress={() => { setclick(!click) }}>

                <Image source={click ? Imagepath.attch : Imagepath.man}
                    style={[styles.rightIconCss,{left: 4}]} />
            </TouchableOpacity>
}

            <TextInput
                placeholder={placeholder}
                editable={editable}
                style={[styles.textValue, { color: color ? color : "#98F5FF", width: wp('80%'),},]}
                onFocus={onFocus}
                value={value}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#98F5FF"}
                returnKeyType={returnKeyType}
                onChangeText={onChangeText}
                onSubmitEditing={getfocus}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                ref={setfocus}
                blurOnSubmit={false}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                multiline={multiline}
            />
            {rightIcon &&
                <TouchableOpacity onPress={() => { setchegeimge(!chegeimge) }}>
                    <Image source={chegeimge ? Imagepath.attch : Imagepath.man}
                        style={styles.rightIconCss} />
                </TouchableOpacity>
            }     
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewOffCss: { flexDirection: "row", alignItems: "center", borderRadius: 8, marginHorizontal: 10, },
    textValue: { fontSize: hp("3%"), },
    rightIconCss: { height: hp(6), width: wp(6), resizeMode: "contain" },
})

// export default TextInput;