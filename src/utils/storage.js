import nativeStore from 'react-native-simple-store'

// nativeStore.delete('accessToken')

export const getAccessToken = () => nativeStore.get('accessToken')
export const setAccessToken = (token) => nativeStore.save('accessToken', token)
