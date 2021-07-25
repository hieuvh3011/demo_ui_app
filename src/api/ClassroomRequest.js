import {postApi} from '@app/api/ApiRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_ID} from '@app/utils/StorageKeys';
import {fetchClassroomUrl} from '@app/api/ApiUrl';

export const getClassroomList = async () => {
  const userId = await AsyncStorage.getItem(USER_ID);
  const data = {
    user_id: userId,
  };
  return await postApi(fetchClassroomUrl, data);
};
