import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Button, Label} from './styles';

export default function PayButton({onPress, focused}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={{x: 1, y: 0.2}}>
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#ffffff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
