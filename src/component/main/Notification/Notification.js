import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles'

const Notification = () => {

    const data = ({ item }) => {
        return (
            <View style={styles.v}>
                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <Text style={styles.t}>Need a caffeine boost? Get a student discount for 50% off in coffee today!</Text>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <Text style={styles.t}>Need a caffeine boost? Get a student discount for 50% off in coffee today!</Text>
                    </View>
                </View>

                <View style={styles.it}>
                    <View style={styles.vtit}>
                        <Image source={require('../../../assets/images/img_cafe.png')}
                            style={styles.imgit} />

                        <Text style={styles.t}>Need a caffeine boost? Get a student discount for 50% off in coffee today!</Text>
                    </View>
                </View>

            </View>
        );

    }

  return (
    <View style={styles.container}>
            {/* <View style={styles.navhd}>
                <Text style={styles.thd}>Thông Báo</Text>
                <Icon name='bell-outline' style={styles.iconhd} />
            </View> */}

            <FlatList
                data={data}
                renderItem={data}
            />

        </View>
  )
}

export default Notification