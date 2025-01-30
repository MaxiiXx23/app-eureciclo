import { LegacyRef, useRef, useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, CameraPictureOptions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CameraRotate, Check, X } from 'phosphor-react-native';

import { CollectStackParamList } from 'shared/routes/stacksParamsList';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState<string | null>(null); // Para armazenar a foto capturada

  const navigation = useNavigation<NavProps>()

  function handleNavBack() {
    navigation.navigate('Request')
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionText}>Conceder Permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      
      const options: CameraPictureOptions = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      setPhoto(data.uri);
      // Armazena o URI da imagem capturada
    }
  };

  const retakePicture = () => {
    setPhoto(null); // Reseta a foto para capturar novamente
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleCameraVisibility() {
    handleNavBack()
  }

  async function handleConfirmPicture() {
    const uriPhotoJson = JSON.stringify(photo);
    await AsyncStorage.setItem('@EuReciclo:uri', uriPhotoJson);
    handleNavBack()
  }

  return (
    
    <View style={styles.container}>
        {
          photo ? (
            <View style={styles.camera}>
              <TouchableOpacity style={styles.closeButtonRemove} onPress={retakePicture}>
                  <Text style={styles.closeText}><X color='#FFF' size={24} /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.switchButtonConfirm} onPress={handleConfirmPicture}>
                  <Text style={styles.switchText}><Check color='#FFF' size={24} /></Text>
                </TouchableOpacity>
              <Image source={{ uri: photo }} style={styles.previewImage} />
            </View>
          )
          : (
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                {/* Botão para fechar a câmera */}
                <TouchableOpacity style={styles.closeButton} onPress={toggleCameraVisibility}>
                  <Text style={styles.closeText}><X color='#FFF' size={24} /></Text>
                </TouchableOpacity>

                {/* Botão para alternar entre câmera frontal e traseira */}
                <TouchableOpacity style={styles.switchButton} onPress={toggleCameraFacing}>
                  <Text style={styles.switchText}><CameraRotate color='#FFF' size={24} /></Text>
                </TouchableOpacity>

                {/* Botão de captura */}
                <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                  <View style={styles.innerCircle} />
                </TouchableOpacity>
              </CameraView>
          )
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    backgroundColor: "#FFF4",
    width: '100%',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  permissionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  openButton: {
    backgroundColor: '#25D366',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  openText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonRemove: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: "#FFF9",
    padding: 10,
    borderRadius: 999,
  },
  closeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButtonConfirm: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderColor: "#12A454",
    padding: 10,
    borderRadius: 999,
  },
  switchButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  switchText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderColor: '#4ADE80',
    borderWidth: 8
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    marginTop: 20,
    width: 410,
    height: 720,
    resizeMode: 'contain',
    zIndex: -1,
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
