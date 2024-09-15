import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function QrCodeScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isReadyToScan, setIsReadyToScan] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");

      setTimeout(() => {
        setIsReadyToScan(true);
      }, 2000);
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress = {() => navigation.goBack()}
      >
        
      <AntDesign name="left" size={18} color="black" style = {styles.leftArrow} />
      </TouchableOpacity>

        <View style={styles.qrText}>
          <Image source={require('../../../assets/images/qrIcon.png')} style={styles.qrImg} />
          <Text style={styles.qrCodeText}>Scan QR code</Text>
        </View>

      <CameraView
        onBarcodeScanned={scanned || !isReadyToScan ? undefined : handleBarcodeScanned} // Prevent scanning if not ready
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={styles.MyViewCamera}
      />

      <View style={styles.box}>
        <View style={styles.anotherbox} />
      </View>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },

  leftArrow: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    marginTop: 30
  },

  qrText: {
    flex: 1,
    top: 50,
    alignItems: 'center',
  },

  qrImg: {
    height: 40,
    width: 40,
    marginBottom: 10
  },

  qrCodeText: {
    fontSize: 18,
    fontWeight: '900',
  },

  MyViewCamera: {
    position: 'absolute',
    top: 300,
    alignSelf: "center",
    height: 290,
    width: 290
  },

  box: {
    position: 'absolute',
    top: 290,
    height: 310,
    width: 310,
    alignSelf: "center",
    borderWidth: 50,
    borderRadius: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)'
},

anotherbox: {
  position: 'absolute',
  height: 310,
  width: 310,
  top: -50,
  alignSelf: "center",
  borderWidth: 10,
  borderRadius: 0.5,
  borderColor: 'rgba(255, 255, 255, 0.9)'
},


});
