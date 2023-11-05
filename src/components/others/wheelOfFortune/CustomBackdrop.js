import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {modal_color_don_hang} from '../../../utils/contanst';

export const CustomBackdrop = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      {/* Add your icon to the backdrop */}
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, marginLeft: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, alignSelf: 'center', marginRight: 20}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-end', marginRight: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-start', marginLeft: 80}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'center', marginLeft: 80}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, marginLeft: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, alignSelf: 'center', marginRight: 20}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-end', marginRight: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-start', marginLeft: 80}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'center', marginLeft: 80}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, marginLeft: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.gift}
        style={{marginTop: 20, alignSelf: 'center', marginRight: 20}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-end', marginRight: 20}}
      />
      <Icon
        name="gift"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'flex-start', marginLeft: 80}}
      />
      <Icon
        name="cake-candles"
        size={40}
        color={modal_color_don_hang.button}
        style={{marginTop: 20, alignSelf: 'center', marginLeft: 80}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  floatingGift: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  floatingGiftLeft: {
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
});
