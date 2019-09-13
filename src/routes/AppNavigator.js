/* eslint-disable prettier/prettier */
import React from 'react' 
import { Icon } from 'native-base'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

//Splash Screen for loading and authentication
import AuthLoadingScreen from '../screens/AuthPage/AuthLoading'
import SplashScreen from '../screens/AuthPage/Splash'

//AuthPage
import LoginScreen from '../screens/AuthPage/Login'
import SignUpScreen from '../screens/AuthPage/SignUp'

import HomeScreen from '../screens/HomePage/Home'
//HomePage screen
import FriendScreen from '../screens/HomePage/FriendScreen'
import ProfileScreen from '../screens/HomePage/Profile'
import LocationScreen from '../screens/HomePage/Location'
import ChatScreen from '../screens/HomePage/ChatScreen'
import FriendProfile from '../screens/HomePage/FriendProfile'

const HomeTabNavigator = createBottomTabNavigator(
    {
        Friend: {
            screen: FriendScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (  
                <Icon type="FontAwesome5" name="user-friends" style={{fontSize:25 , color:`${tintColor}`}} />
                ),
                title: 'Friends'
            },
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (  
                <Icon type="MaterialCommunityIcons" name="chat" style={{fontSize:25 , color:`${tintColor}`}} />
                ),
                title: 'Chats'
            },
        },
        Location: {
            screen: LocationScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                <Icon type="MaterialIcons" name="location-on" style={{fontSize:25, color:`${tintColor}`}}/>
                ),
                title: 'Location'
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome5" name="user" style={{fontSize:25, color:`${tintColor}`}}/>
                ),
                title: 'Profile'
            },
        },
    },{
        tabBarOptions: { 
            showIcon: true,
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            activeBackgroundColor: '#232b2b',
            inactiveBackgroundColor: '#232b2b',
            borderTopWidth: 0,
        },
    }
)

const HomePage = createStackNavigator(
    {
        Home: { screen: HomeTabNavigator },
        Chat: { screen: ChatScreen },
        FriendProfile : { screen: FriendProfile },
    },{
        headerMode: "none",
    }
)

const AppNavigation = createSwitchNavigator(
    {
        AuthLoading: { screen: AuthLoadingScreen },
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        Tabs: { screen: HomePage }
    }
)

const InitialNavigation = createSwitchNavigator(
    {
        Splash: { screen: SplashScreen },
        App: { screen: AppNavigation }
    }
)

export default createAppContainer( InitialNavigation )