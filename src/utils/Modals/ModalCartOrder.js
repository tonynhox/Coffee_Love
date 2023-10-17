import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button,Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import OrderDetail from '../../components/others/orderDetail/OrderDetail';

const { height } = Dimensions.get('window');
const ModalCartOrder = (props) => {
  const { isVisible, setIsVisible } = props;
  const [scrollOffset, setScrollOffset] = useState(null);
  const scrollViewRef = useRef(null);

  const handleOnScroll = (event) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleScrollTo = (p) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const closeModal = () => {
    setIsVisible(false); // Sử dụng hàm setIsVisible để đóng modal
  };

  return (
    <View>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={closeModal}
        swipeDirection={['down']}
        swipeThreshold={height*(1/4)}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        scrollOffsetMax={10000} // content height - ScrollView height
        propagateSwipe={true}
        style={styles.modal}>
        <View style={styles.scrollableModal}>
          <ScrollView
            ref={scrollViewRef}
            onScroll={handleOnScroll}
            scrollEventThrottle={16}>
            <OrderDetail />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  scrollableModal: {
    flex: 0.96,
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
