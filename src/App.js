import React from 'react';
import {StyleSheet, View} from 'react-native';
import Payment from "./Payment";

const App = () => {

    return (
        <View style={styles.container}>
            <Payment/>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

