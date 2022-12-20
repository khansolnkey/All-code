import React, { useState, useEffect } from "react";
import { View, StyleSheet,  ActivityIndicator,  Text,  Image,  } from "react-native";
import Commanbuttion from "../componet/Commanbuttion";
import Imagepath from "../componet/Imagepath";


   const Lodar1 = ({ navigation, route }) => {

    const [data, setData] = useState(route.params?.carData);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000);
    }, []);

    return (
        <View style={styles.View}>
            <View>
                {loader === true ?
                    <ActivityIndicator size="large" color={'#000'} />
                    :
                    <>
                        <View style={styles.button}>
                            <Image source={Imagepath.man} style={{ height: 60, width: 60 }} resizeMode={"cover"} />
                            <View style={{ marginLeft: 30 }}>
                                <Text style={styles.lableText}>Name: <Text style={[styles.lableText, { color: '#000000' }]}>{data?.title}</Text></Text>
                                <Text style={styles.lableText}> addresh: <Text style={[styles.lableText, { color: '#000000' }]}>{data?.address}</Text></Text>
                                <Text style={styles.lableText}> age: <Text style={[styles.lableText, { color: '#000000' }]}>{data?.age}</Text></Text>
                            </View>
                        </View>
                    </>
                }
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    View: { flex: 1  },
   button: { backgroundColor: "#fff", height: 130, borderRadius: 20,justifyContent: 'center', paddingHorizontal: 20, 
    flexDirection: "row", alignItems: "center", paddingVertical: 10, marginHorizontal: 20, marginTop: 10 },
    lableText: { fontSize: 20, color: '#00000090' }
});
export default Lodar1;