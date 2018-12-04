import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { getUser } from '../../redux/actions/user';

class UserItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.item} onPress={() => {
                this.props.getUser(this.props.item.url);
                this.props.navigation.navigate('UserDetails');
            }}>
                <View>
                    <Image style={styles.image} source={{ uri: this.props.item.avatar_url }}></Image>
                </View>
                <View style={styles.text}>
                    <Text >{this.props.item.login}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        backgroundColor: '#eee',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
    },
    text: {
        padding: 20,
        flex: 1,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    }
});

export default connect(null, { getUser: getUser })(UserItem);

