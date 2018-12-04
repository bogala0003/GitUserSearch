import React from 'react';
import { View, Image, StyleSheet, Button, Linking, Text } from 'react-native';
import { connect } from 'react-redux';

import SpinnerItem from '../SpinnerItem'
import Header from '../Header';

class UserDetails extends React.Component {
    static navigationOptions = {
        headerTitle: <Header title={"User Information"} />,
        headerStyle: {
            backgroundColor: '#0096d6',
        }
    }

    openBrowser = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    }

    render() {
        return (
            <View style={styles.parent}>
                {
                    this.props.errMsg &&
                    <Text>
                        {this.props.errMsg}
                    </Text>
                }
                {
                    !this.props.user &&
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <SpinnerItem />
                    </View>
                }
                {
                    this.props.user &&
                    <View>
                        <View style={styles.imageView}>
                            <Image style={[styles.image]} source={{ uri: this.props.user.avatar_url }}></Image>
                        </View>
                        <Button style={styles.textView} title={this.props.user.name ? this.props.user.name : this.props.user.login} onPress={() => { this.openBrowser(this.props.user.html_url) }}>
                        </Button>
                    </View>
                }
            </View >
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin:10,
        borderRadius:15,
        backgroundColor: 'white',
    },
    imageView: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10
    },
    textView: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: 'wrap',
        fontSize: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    }
});

const mapStateToProps = state => { /*debugger;*/ return { user: state.userInfo.selectedUser, errMsg: state.userInfo.errInGetUser } };

export default connect(mapStateToProps)(UserDetails);