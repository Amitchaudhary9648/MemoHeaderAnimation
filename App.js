import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Dimensions,
    ScrollView,
    Image,
    TextInput,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView>
                <View style={styles.upperHeaderPlaceholder} />
            </SafeAreaView>
            <SafeAreaView style={styles.header}>
                <View style={styles.upperHeader}>
                    <View style={styles.searchContainer}>
                        <Image
                            source={require('./src/assets/Images/search.png')}
                            style={styles.searchIcon} />
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"rgba(255,255,255,0.8)"}
                            style={styles.searchInput} />
                    </View>
                    <Image
                        source={require('./src/assets/Images/bell.png')}
                        style={styles.bellIcon} />
                    <Image
                        resizeMode='cover'
                        source={require('./src/assets/Images/ith.png')}
                        style={styles.avatarIcon} />
                </View>
                <View style={styles.lowerHeader}>
                    <View style={styles.feature}>
                        <View style={styles.whiteBackground}>
                        <Image
                            source={require('./src/assets/Images/logout.png')}
                            style={styles.featureIconCircle} />
                        </View>
                        <Text style={styles.featureName}>Recharge</Text>
                    </View>

                    <View style={styles.feature}>
                    <View style={styles.whiteBackground}>
                        <Image
                            source={require('./src/assets/Images/balance.png')}
                            style={styles.featureIconCircle} />
                        </View>
                        <Text style={styles.featureName}>Balance</Text>
                    </View>

                    <View style={styles.feature}>
                    <View style={styles.whiteBackground}>
                        <Image
                            source={require('./src/assets/Images/barcode.png')}
                            style={styles.featureIconCircle} />
                        </View>
                        <Text style={styles.featureName}>Deposit</Text>
                    </View>

                    <View style={styles.feature}>
                    <View style={styles.whiteBackground}>
                        <Image
                            source={require('./src/assets/Images/qrcode.png')}
                            style={styles.featureIconCircle} />
                        </View>
                        <Text style={styles.featureName}>Scan</Text>
                    </View>
                </View>
            </SafeAreaView>


            <ScrollView>
                <View style={styles.paddingForHeader} />
                <View style={styles.scrollViewContent} />
            </ScrollView>
        </View>
    );
};

const UPPER_HEADER_HEIGHT = 40
const LOWER_HEADER_HEIGHT = 96

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceholder: {
        height: UPPER_HEADER_HEIGHT,
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#AF0C6E',
    },
    upperHeader: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: '#fff',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32
    },
    searchIcon: {
        width: 16,
        height: 16
    },
    bellIcon: {
        width: 16,
        height: 16,
        marginHorizontal: 32
    },
    avatarIcon: {
        width: 28,
        height: 28,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 2
    },
    lowerHeader: {
        height: LOWER_HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16
    },
    feature:{
        alignItems: 'center',
    },
    whiteBackground:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10
    },
    featureIconCircle:{
        height: 40,
        width: 40,
        tintColor: '#AF0C6E',
    },
    featureName:{
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#fff',
        marginTop: 12
    },
    paddingForHeader: {
        height: LOWER_HEADER_HEIGHT ,
    },
    scrollViewContent: {
        height: windowHeight * 2,
        backgroundColor: '#fff',
    },
});

export default App;
