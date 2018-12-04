import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import UserItem from '../UserItem';

class UserList extends Component {
    render() {
        return (
            <ScrollView style={[styles.repoList]}>
                {
                    this.props.users && this.props.users.length === 0 &&
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text >{'No records found'}</Text>
                    </View>
                }
                {
                    this.props.users &&
                    this.props.users.map(user =>
                        <UserItem item={user} key={user.id} navigation={this.props.navigation} />
                    )
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    repoList: {
        flex: 1,
        flexDirection: 'column'
    }
});

const mapStateToProps = state => { /*debugger;*/ return { users: state.userInfo.userList }; };

export default connect(mapStateToProps)(UserList);
