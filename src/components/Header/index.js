import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Text style={
                    {
                        fontSize: 25,
                        color: 'white'
                    }
                }>{this.props.title}</Text>
            </View>
        );
    }
}