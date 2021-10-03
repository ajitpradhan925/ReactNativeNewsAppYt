import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


const Home = ({...props}) => {

    useEffect(() => {
        console.log("props ", props);
    }, []);

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = (disptach) => { return {} }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
