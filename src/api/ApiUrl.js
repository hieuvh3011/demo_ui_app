import Config from 'react-native-config';
const _baseUrl = Config.API_URL;

export const baseAuthUrl = `${_baseUrl}/auth/login`;
export const loginUrl = `${_baseUrl}/custom/login`;
export const fetchClassroomUrl = `${_baseUrl}/custom/classroom/get`;
