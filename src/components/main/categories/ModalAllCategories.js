import {
  Dimensions,
  ScrollView,
  StyleSheet,
  stylesheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
const {height} = Dimensions.get('window');
const ModalAllCategories = props => {
  const {data, setIndex} = props;
  const {isVisible, setIsVisible} = props;

  //test
  const componentBRef = useRef(null);
  //end
  const [scrollOffset, setScrollOffset] = useState(null);
  const scrollViewRef = useRef(null);

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const closeModal = () => {
    setIsVisible(false); // Sử dụng hàm setIsVisible để đóng modal
    // dispatch(setIsVisibleModalCart(false));
  };

  const renderItem = (item, index) => {
    const {ten_loai_san_pham, hinh_anh} = item;

    return (
      <TouchableOpacity
        onPress={() => {
          setIndex(index);
          closeModal();
        }}
        style={styles.card}>
        <View style={[styles.imgCard]}>
          <Image
            style={[
              styles.imgCardBackground,
              {width: 65, height: 65, resizeMode: 'center'},
            ]}
            source={{
              uri: hinh_anh,
            }}></Image>
        </View>
        <Text numberOfLines={2} style={styles.nameCard}>
          {ten_loai_san_pham}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      testID={'modal'}
      zIndex={1000}
      isVisible={isVisible}
      onSwipeComplete={closeModal}
      swipeDirection={['down']}
      swipeThreshold={height * (1 / 4)}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={10000} // content height - ScrollView height
      propagateSwipe={true}
      style={styles.modal}
      onBackdropPress={closeModal}
      useNativeDriver={true}>
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 16,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#000',
            paddingVertical: 12,
          }}>
          Danh mục
        </Text>
        <ScrollView ref={scrollViewRef}>
          <View style={styles.row}>
            {data.map((item, index) => {
              // if (index < firstFlatListItems) {
              return <View key={index}>{renderItem(item, index)}</View>;
              // }
            })}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalAllCategories;

const styles = StyleSheet.create({
  nameCard: {
    color: '#6D3805',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '400',
  },

  imgCardBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  card: {
    marginVertical: 4,
    alignItems: 'center',
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1, // Add this line
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Add this line
    flexWrap: 'wrap',
  },
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    marginHorizontal: 0,
    marginTop: height / 2.3,
  },
});
