import React, {useRef, forwardRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@app/utils/colors';

const AppTextInput = props => {
  const inputRef = useRef(null);
  console.log('inputRef = ', inputRef);
  return (
    <View style={styles.container}>
      <Icon
        name={'email'}
        color={Colors.labelInput}
        size={scale(22)}
        style={styles.icon}
      />
      <View style={styles.inputAndLabel}>
        <Text style={styles.label}>Email</Text>
        <TextInput ref={inputRef} />
      </View>
    </View>
  );
};

const labelText = {
  fontSize: '14@ms',
  fontWeight: 'bold',
  color: Colors.labelInput,
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '50@vs',
    borderRadius: '10@ms',
    borderColor: Colors.borderTextInput,
    borderWidth: '1@ms',
    marginVertical: '10@vs',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: '15@ms',
  },
  inputAndLabel: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: '7@vs',
  },
  label: {
    ...labelText,
  },
});

export default forwardRef((props, ref) => (
  <AppTextInput {...props} forwardedRef={ref} />
));
