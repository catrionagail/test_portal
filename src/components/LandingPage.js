import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview';

export default class LandingPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient style={{flex:1,paddingLeft: 20,paddingRight:20}}colors={['#56ccF2','#2F80ED']}>
          <View style={styles.topContainer}>
            <View style={styles.logoutContainer}>
              <Button style={styles.lblStyle} title='Logout'>
                <Icon
                name={Platform.OS === "ios" ? "ios-log-out" : "md-log-out"}
                color="white"
                size={25}
                type="AntDesign"
                style={styles.lblStyle}
                />
              </Button>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.lblStyle}>P O R T A L S S S S S S</Text>
            </View>
            <View style={styles.settingsContainer}>
              <Icon
              name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
              color="white"
              size={25}
              type="AntDesign"
              style={styles.lblStyle}
              />
            </View>
          </View>

          <View style={styles.greetingsContainer}>

           <View style={styles.imageContainer}>
             <Image style={styles.image} source={require('../images/pnb-logo.png')} />
           </View>

           <View style={styles.nameContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.lblName}>Hello, Idiot</Text>
              <Text style={styles.lblText}>Hello, Idiot</Text>
            </View>
            <View style={styles.selectContainer}>
            </View>
           </View>

          </View>

          <ScrollView style={styles.portalsContainer}>
            <CardView
            cardElevation={2}
            cardMaxElevation={5}
            cornerRadius={1}
            style={styles.cardStyle}>
              <View style={styles.portalLogo}>
                <Image style={styles.portalImageLogo} source={require('../images/portal_logo/pnb_logo_c.png')} />
              </View>
              <View style={styles.portalInfo}>
                <View style={styles.portalTitleContainer}>
                  <Text style={styles.portalTitle}>PNB Portal</Text>
                </View>
                <View style={styles.portalDescContainer}>
                  <Text>Portal for monitoring sold products from PNB</Text>
                </View>
              </View>
            </CardView>
            <CardView
            cardElevation={2}
            cardMaxElevation={5}
            cornerRadius={1}
            style={styles.cardStyle}>
              <View style={styles.portalLogo}>
                <Image style={styles.portalImageLogo} source={require('../images/portal_logo/abic_logo_c.png')} />
              </View>
              <View style={styles.portalInfo}>
                <View style={styles.portalTitleContainer}>
                  <Text style={styles.portalTitle}>ABIC Portal</Text>
                </View>
                <View style={styles.portalDescContainer}>
                  <Text>Portal for selling products from ABIC</Text>
                </View>
              </View>
            </CardView>
            <CardView
            cardElevation={2}
            cardMaxElevation={5}
            cornerRadius={1}
            style={styles.cardStyle}>
              <View style={styles.portalLogo}>
                <Image style={styles.portalImageLogo} source={require('../images/portal_logo/abic_logo_c.png')} />
              </View>
              <View style={styles.portalInfo}>
                <View style={styles.portalTitleContainer}>
                  <Text style={styles.portalTitle}>ABIC Portal</Text>
                </View>
                <View style={styles.portalDescContainer}>
                  <Text>Portal for selling products from ABIC</Text>
                </View>
              </View>
            </CardView>
            <CardView
            cardElevation={2}
            cardMaxElevation={5}
            cornerRadius={1}
            style={styles.cardStyle}>
              <View style={styles.portalLogo}>
                <Image style={styles.portalImageLogo} source={require('../images/portal_logo/abic_logo_c.png')} />
              </View>
              <View style={styles.portalInfo}>
                <View style={styles.portalTitleContainer}>
                  <Text style={styles.portalTitle}>ABIC Portal</Text>
                </View>
                <View style={styles.portalDescContainer}>
                  <Text>Portal for selling products from ABIC</Text>
                </View>
              </View>
            </CardView>
            <CardView
            cardElevation={2}
            cardMaxElevation={5}
            cornerRadius={1}
            style={styles.cardStyle}>
              <View style={styles.portalLogo}>
                <Image style={styles.portalImageLogo} source={require('../images/portal_logo/abic_logo_c.png')} />
              </View>
              <View style={styles.portalInfo}>
                <View style={styles.portalTitleContainer}>
                  <Text style={styles.portalTitle}>ABIC Portal</Text>
                </View>
                <View style={styles.portalDescContainer}>
                  <Text>Portal for selling products from ABIC</Text>
                </View>
              </View>
            </CardView>

          </ScrollView>

        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flex:.15,
      flexDirection: 'row'
    },
    greetingsContainer: {
      flex:.50,
      paddingBottom: 50
    },
    portalsContainer: {
      flex:.35,
      // paddingTop: 50,
      paddingBottom: 10
    },
    //inner containers
    logoutContainer: {
      flex:.3,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    },
    titleContainer: {
      flex:.4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    settingsContainer: {
      flex:.3,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    imageContainer: {
      flex: 0.6,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingBottom: 15
    },
    nameContainer: {
      flex: 0.4
    },
    labelContainer:{
      flex: 0.6
    },
    // texts
    btnLogout: {
      color: 'white'
    },
    lblStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
    lblName: {
      fontSize: 35,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 5
    },
    lblText: {
      fontSize: 20,
      color: 'white',
    },
    lblPortalTitle: {
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',

    },
    lblPortalDesc: {
      fontSize: 15,
      color: 'white'
    },
    image: {
      borderRadius: 70/2,
      overflow: 'hidden',
      width: 70,
      height: 70,
      borderWidth: 5,
      borderColor: 'white',
    },
    //card
    cardStyle: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      height: 120,
      flexDirection: 'row',
      marginBottom: 20,
      paddingRight: 15
    },
    portalLogo: {
      flex: .3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    portalInfo: {
      flex: .7,
      paddingTop: 20
    },
    portalImageLogo: {
      width: 50,
      height: 50
    },
    portalTitleContainer: {
      paddingBottom: 6
    },
    portalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#323232'
    },
    portalDescContainer: {
      paddingBottom: 5,
      color: '#666666',
      fontSize: 13
    },
});
