import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
class SpinnerItem extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    this.props.loader.show && <Image
                        style={{ width: 150, height: 150, borderRadius: 300, borderWidth: 10 }}
                        source={require('../../assets/images/loading.gif')} />
                }
            </View>
        );
    }
}
const mapStateToProps = state => { /*debugger;*/ return { loader: state.loader }; };

export default connect(mapStateToProps)(SpinnerItem);