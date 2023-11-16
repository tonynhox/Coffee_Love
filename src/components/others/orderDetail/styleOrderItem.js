import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON_COLOR} from '../../../utils/contanst';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF9',
    paddingHorizontal: 5,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#FDD2AD',
    borderRadius: 10,
    paddingTop: 5,
  },
  selectedContainer: {
    flex: 1,
    backgroundColor: '#FEF1E5',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#FBC99B',
  },
  imageSanPham: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imageTopping: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 5,
  },

  textTenSanPham: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  textTenTopping: {
    fontSize: 13,
    color: 'black',
    fontWeight: '400',
  },
  textSoLuong: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  textSize: {
    fontSize: 13,
    color: '#404040',
    fontWeight: '400',
  },
  sanPhamContainer: {
    flexDirection: 'row',
  },
  toppingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thongTinSanPhamVaGiaContainer: {
    flexDirection: 'column',
    paddingRight: 10,
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
  textTien: {
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
  },
  textGiaSale: {
    fontSize: 15,
    color: BACKGROUND_BUTTON_COLOR,
    fontWeight: '500',
    marginLeft: 10,
  },
  textGiaTopping: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '400',
    marginLeft: 10,
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
