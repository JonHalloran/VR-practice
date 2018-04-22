import React from 'react';
import {AppRegistry, asset, Pano, Text, View} from 'react-vr';
import NestedMessage from "./nestedMessage.vr";

export default class HelloVirtualWorld extends React.Component {
  render() {
    let states = ['Arizona', 'New Hampshire', 'California', 'Hawaii', 'Texas'];
    let texts = states.map(state => <NestedMessage message={state} />);
    return (
      <View>
        <Pano source={asset('falls-creek.jpg')}/>
        <View style={{
          width: 2,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          transform: [{translate: [0, 0, -5]}],
          layoutOrigin : [0.5, 0.5]
        }}>
          {texts}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
