import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { CameraRotate, X } from 'phosphor-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CollectStackParamList } from 'shared/routes/stacksParamsList';

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraVisible, setIsCameraVisible] = useState(false);

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

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleCameraVisibility() {
    handleNavBack()
  }

  function captureImage() {
    // Função para capturar imagem - será implementada
    console.log('Imagem capturada!');
  }

  return (
    <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing}>
          {/* Botão para fechar a câmera */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleCameraVisibility}>
            <Text style={styles.closeText}><X color='#FFF' size={24} /></Text>
          </TouchableOpacity>

          {/* Botão para alternar entre câmera frontal e traseira */}
          <TouchableOpacity style={styles.switchButton} onPress={toggleCameraFacing}>
            <Text style={styles.switchText}><CameraRotate color='#FFF' size={24} /></Text>
          </TouchableOpacity>

          {/* Botão de captura */}
          <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
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
  closeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
});
