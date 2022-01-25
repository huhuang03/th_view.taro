import React from 'react';
import {View, Text} from '@tarojs/components';

export interface SwipeLeftViewProps {
  right: React.ReactNode;
}

const SwipeLeftView: React.FC<SwipeLeftViewProps> = props => {
  return (
    <View>
      {props.children}
      {props.right}
    </View>
  );
};

export default SwipeLeftView;
