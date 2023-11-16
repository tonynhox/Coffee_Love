import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const OrderLoadingPlaceholder = () => {
  const newArray = Array.from({length: 5}, (_, index) => index);
  return (
    <>
      <PlaceholderLine
        style={{
          height: 40,
          width: Dimensions.get('window').width / 2,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <PlaceholderLine
          height={20}
          style={{margin: 5, width: Dimensions.get('window').width / 3.5}}
        />
        <PlaceholderLine
          height={20}
          style={{margin: 5, width: Dimensions.get('window').width / 3.5}}
        />
        <PlaceholderLine
          height={20}
          style={{margin: 5, width: Dimensions.get('window').width / 3.5}}
        />
      </View>

      <>
        {newArray.map((item, index) => {
          return (
            <Placeholder
              key={index}
              Animation={Fade}
              style={{
                padding: 5,
                backgroundColor: 'rgba(220,220,220, 0.1)',
                marginVertical: 10,
              }}
                // Left={PlaceholderMedia}
                // Right={PlaceholderMedia}
            >
              {/* hình ảnh sp, tên người nhận, địa chỉ, trạng thái */}

              <View style={{margin: 5}}>
                {/*hinh anh,  ten nguoi nhan va dia chi */}
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <PlaceholderMedia style={{height: 60, width: 60}} />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flex: 1,
                      marginHorizontal: 10,
                    }}>
                    <View style={{width: '70%'}}>
                      <PlaceholderLine width={79} style={styles.textHeight} />
                      <PlaceholderLine width={50} style={{height: 15}} />
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                      }}>
                      <PlaceholderLine style={styles.textHeight} />
                    </View>
                  </View>
                </View>

                <PlaceholderLine style={[styles.textHeight, {marginTop: 15}]} />
                <PlaceholderLine style={[styles.textHeight, {marginTop: 5}]} />
              </View>
            </Placeholder>
          );
        })}
      </>
    </>
  );
};

export default OrderLoadingPlaceholder;

const styles = StyleSheet.create({
  textHeight: {
    height: 20,
  },
});
