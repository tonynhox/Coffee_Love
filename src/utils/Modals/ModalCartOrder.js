import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import OrderDetail from '../../components/others/orderDetail/OrderDetail';
import CartPayment from '../../components/others/cartPayment/CartPayment';
import {useDispatch, useSelector} from 'react-redux';
import BottomMuaSanPhamCategories from '../../components/main/categories/BottomMuaSanPhamCategories';
import {setIsVisibleModalCart} from '../../redux/reducers/slices/utilSlice';
import {formatCurrency} from '../formatCurrency';
import IconF from 'react-native-vector-icons/FontAwesome';
const {height} = Dimensions.get('window');
const ModalCartOrder = () => {
  // const {isVisible, setIsVisible} = props;
  //test
  const componentBRef = useRef(null);
  //end
  const [scrollOffset, setScrollOffset] = useState(null);
  const scrollViewRef = useRef(null);
  const isVisibleModalCart = useSelector(
    state => state.utils.isVisibleModalCart,
  );
  const dispatch = useDispatch();

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const closeModal = () => {
    // setIsVisible(false); // Sử dụng hàm setIsVisible để đóng modal
    dispatch(setIsVisibleModalCart(false));
  };

  const cart = useSelector(state => state.cartPayment.cart);

  const [price, setPrice] = useState(0);

  const dataCart = useSelector(state => state.cartPayment.data);
  useEffect(() => {
    if (dataCart.length < 1) {
      closeModal();
    }
  }, [dataCart]);

  return (
    <Modal
      testID={'modal'}
      coverScreen={false}
      // zIndex={1000}
      isVisible={isVisibleModalCart}
      onSwipeComplete={closeModal}
      swipeDirection={['down']}
      swipeThreshold={height * (1 / 4)}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={10000} // content height - ScrollView height
      propagateSwipe={true}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
              {/* separate line */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <IconF
          name="chevron-down"
          size={25}
          color="#F65C09"
          style={{paddingVertical: 7}}
          alignSeft="center"
        />
      </View>
        <ScrollView
          style={{
            backgroundColor: 'white',

          }}
          ref={scrollViewRef}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}>
          <CartPayment ref={componentBRef} setPrice={setPrice} />
        </ScrollView>

        {/* btn Đặt hàng */}
        <View
          style={{
            flexDirection: 'row',
            zIndex: 10,
            width: '100%',
            padding: 16,
            backgroundColor: '#e07900',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'white', fontSize: 15.5, fontWeight: '500'}}>
              Giao hàng • {cart?.quantity || 0} sản phẩm
            </Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '800'}}>
              {formatCurrency(price)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              componentBRef.current?.open();
            }}
            style={{
              borderRadius: 20,
              paddingHorizontal: 18,
              backgroundColor: 'white',
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#e07900',
                fontWeight: '600',
                fontSize: 16,
                padding: 0,
              }}>
              Đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    marginHorizontal: 0,
    marginBottom: 0,
  
  },
  scrollableModal: {
    // flex: 0.96,
    flex: 1,
    marginTop: StatusBar.currentHeight/2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});

export default ModalCartOrder;
