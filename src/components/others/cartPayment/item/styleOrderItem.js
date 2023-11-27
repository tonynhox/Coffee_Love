import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON_COLOR} from '../../../../utils/contanst';

export const styles = StyleSheet.create({


  imageTopping: {
    
    marginVertical: 5,
    marginRight: 10,
  },


  textTenTopping: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },

  textSize: {
    fontSize: 13,
    color: '#404040',
    fontWeight: '400',
  },

  toppingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thongTinSanPhamVaGiaContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  tenSanPhamVaSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: 'red',
  },
  giaTienContainer: {
    flexDirection: 'row',
  },
  amount: {
    textDecorationLine: 'line-through', // Add a line-through text decoration
  },

  textGiaTopping: {
    fontSize: 13,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '400',
  },
  tenSanPhamVaGiaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
  },
  separateLine: {
    height: 0.3,
    width: '70%',
    backgroundColor: 'transparent',
    marginVertical: 7,
    alignSelf: 'center',
  },
});
