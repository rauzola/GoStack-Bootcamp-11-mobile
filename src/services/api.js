import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.132:3333",
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com físico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico : IP da maquina (ipconfig)
 */
