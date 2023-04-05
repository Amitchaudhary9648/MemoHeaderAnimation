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
    Animated,
} from 'react-native';
import React, { useRef } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

const App = () => {
    const animatedValue = useRef(new Animated.Value(0)).current
    const scrollViewRef = useRef(null)
    const lastOffsetY = 0
    const scrollDirection = useRef(' ')
    const searchInputAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 50],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                })
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [0, -100],
                    extrapolate: 'clamp'
                })
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }

    const featureNameAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 30],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                })
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }

    const rechargeViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, 36],
                    extrapolate: 'clamp'
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -40],
                    extrapolate: 'clamp'
                })
            },
        ],
    }

    const balanceViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -6],
                    extrapolate: 'clamp'
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -40],
                    extrapolate: 'clamp'
                })
            },
        ],
    }

    const depositViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -46],
                    extrapolate: 'clamp'
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -40],
                    extrapolate: 'clamp'
                })
            },
        ],
    }

    const scanQrViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -86],
                    extrapolate: 'clamp'
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -40],
                    extrapolate: 'clamp'
                })
            },
        ],
    }

    const featuredIconCircleAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
    }

    const featuredIconAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }


    return (
        <View style={styles.container}>
            <StatusBar  barStyle={'light-content'}  />
            <SafeAreaView>
                <View style={styles.upperHeaderPlaceholder} />
            </SafeAreaView>
            <SafeAreaView style={styles.header}>
                <View style={styles.upperHeader}>
                    <View style={styles.searchContainer}>
                        <Image
                            source={require('./src/assets/Images/search.png')}
                            style={styles.searchIcon} />
                        <AnimatedTextInput
                            placeholder='Search'
                            placeholderTextColor={"rgba(255,255,255,0.8)"}
                            style={[styles.searchInput, searchInputAnimation]} />
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
                    <Animated.View style={[styles.feature, rechargeViewAnimation]}>
                        <Animated.View style={[styles.whiteBackground, featuredIconCircleAnimation]}>
                            <Image
                                source={require('./src/assets/Images/logout.png')}
                                style={styles.featureIconCircle} />
                        </Animated.View>
                        <Animated.Image
                            source={require('./src/assets/Images/logout.png')}
                            style={[styles.featureIcon, featuredIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>Recharge</Animated.Text>
                    </Animated.View>

                    <Animated.View style={[styles.feature, balanceViewAnimation]}>
                        <Animated.View style={[styles.whiteBackground, featuredIconCircleAnimation]}>
                            <Image
                                source={require('./src/assets/Images/balance.png')}
                                style={styles.featureIconCircle} />
                        </Animated.View>
                        <Animated.Image
                            source={require('./src/assets/Images/balance.png')}
                            style={[styles.featureIcon, featuredIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>Balance</Animated.Text>
                    </Animated.View>

                    <Animated.View style={[styles.feature, depositViewAnimation]}>
                        <Animated.View style={[styles.whiteBackground, featuredIconCircleAnimation]}>
                            <Image
                                source={require('./src/assets/Images/barcode.png')}
                                style={styles.featureIconCircle} />
                        </Animated.View>
                        <Animated.Image
                            source={require('./src/assets/Images/barcode.png')}
                            style={[styles.featureIcon, featuredIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>Deposit</Animated.Text>
                    </Animated.View>

                    <Animated.View style={[styles.feature, scanQrViewAnimation]}>
                        <Animated.View style={[styles.whiteBackground, featuredIconCircleAnimation]}>
                            <Image
                                source={require('./src/assets/Images/qrcode.png')}
                                style={styles.featureIconCircle} />
                        </Animated.View>
                        <Animated.Image
                            source={require('./src/assets/Images/qrcode.png')}
                            style={[styles.featureIcon, featuredIconAnimation]} />
                        <Animated.Text style={[styles.featureName, featureNameAnimation]}>Scan QR</Animated.Text>
                    </Animated.View>
                </View>
            </SafeAreaView>


            <ScrollView
                onScroll={e => {
                    const offSetY = e.nativeEvent.contentOffset.y
                    scrollDirection.current = offSetY - lastOffsetY.current > 0 ? 'down' : 'up'
                    lastOffsetY.current = offSetY

                    animatedValue.setValue(offSetY)
                }}
                onScrollEndDrag={() => {
                    scrollViewRef.current?.scrollTo({
                        y: scrollDirection.current === 'down' ? 100 : 0,
                        animated: true
                    })
                }}
                scrollEventThrottle={16}
            >
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
        height: 16,
        marginLeft: 10
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
    feature: {
        alignItems: 'center',
    },
    whiteBackground: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10
    },
    featureIconCircle: {
        height: 38,
        width: 38,
        tintColor: '#AF0C6E',
    },
    featureIcon:{
        height: 16,
        width: 16,
        tintColor: '#fff',
        position: 'absolute',
        top: 8
    },
    featureName: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#fff',
        marginTop: 12,
        marginBottom: 5
    },
    paddingForHeader: {
        height: LOWER_HEADER_HEIGHT,
    },
    scrollViewContent: {
        height: windowHeight * 2,
        backgroundColor: '#fff',
    },
});

export default App;
