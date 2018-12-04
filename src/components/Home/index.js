
import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, Text, View, Keyboard, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import UserList from '../UserList';
import SpinnerItem from '../SpinnerItem';
import Header from '../Header';

import { getUsers } from '../../redux/actions/user';
import { updateUsers } from '../../redux/actions/user';
class Home extends Component {
    static navigationOptions = {
        headerTitle: <Header title={"GitHub"} />,
        headerStyle: {
            backgroundColor: '#0096d6',
        }
    }
    state = {
        searchValue: ''
    }

    loadUsers() {
        if (this.state.searchValue && this.state.searchValue.length > 3) {
            Keyboard.dismiss();
            this.props.getUsers(this.state.searchValue);
        }
    }

    updateInput(searchValue) {
        this.setState({ searchValue: searchValue });
        this.props.updateUsers(null);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    onChangeText={(text) => this.updateInput(text)}
                    value={this.state.searchValue} />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => this.loadUsers()}
                    disabled={this.state.searchValue.length < 4} >
                    <Text style={{ padding: 5, fontSize: 22, color: "white" }}>
                        {"Search"}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "column", alignItems: 'center' }}>
                    <SpinnerItem />
                </View>
                <UserList navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 25,
        margin: 10,
        borderRadius:15
    },
    searchBox: {
        flexDirection: "row",
        borderColor: 'black',
        fontSize: 20,
        borderWidth: 1.0,
        height: 42,
        margin: 5,
        borderRadius:5,
        padding: 5
    },
    searchButton: {
        flexDirection: "row",
        justifyContent: "center",
        height: 42,
        margin: 5,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#0096d6',
        borderColor: "#0096d6"
    }
});

export default connect(null, { getUsers: getUsers, updateUsers: updateUsers })(Home);