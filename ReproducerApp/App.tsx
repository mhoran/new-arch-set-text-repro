import * as React from 'react';
import {TextInput, SafeAreaView, Button} from 'react-native';

const App = () => {
  const ref = React.useRef<TextInput>(null);

  const setText = () => {
    ref.current?.setNativeProps({text: 'bananas'});
  };

  return (
    <SafeAreaView>
      <TextInput
        ref={ref}
        placeholder="input"
        submitBehavior="submit"
        returnKeyType="send"
      />
      <Button onPress={setText} title="Press me!" />
    </SafeAreaView>
  );
};

export default App;
