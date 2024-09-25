// App.tsx

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// 사용자 정보의 타입을 정의합니다.
interface User {
  name: string;
  age: number;
  count: number;
}

// App 컴포넌트를 정의합니다.
const App = () => {
  // 상태를 객체로 관리합니다. 사용자 정보와 메시지를 포함합니다.
  const [state, setState] = useState<User>({
    name: '',
    age: 0,
    count: 0,
  });

  // 사용자 이름을 업데이트하는 함수입니다.
  const updateName = (name: string) => {
    setState(prevState => ({
      ...prevState, // 기존 사용자 정보를 유지합니다.
      name, // 새로운 이름으로 업데이트합니다.
    }));
  };

  // 사용자 나이를 업데이트하는 함수입니다.
  const updateAge = (age: number) => {
    setState(prevState => ({
      ...prevState, // 기존 사용자 정보를 유지합니다.
      age, // 새로운 나이로 업데이트합니다.
    }));
  };

  // 카운트를 증가시키는 함수입니다.
  const incrementCount = () => {
    setState(prevState => ({
      ...prevState, // 기존 사용자 정보를 유지합니다.
      count: prevState.count + 1, // 카운트를 1 증가시킵니다.
    }));
  };

  // 카운트를 감소시키는 함수입니다.
  const decrementCount = () => {
    setState(prevState => ({
      ...prevState, // 기존 사용자 정보를 유지합니다.
      count: prevState.count - 1, // 카운트를 1 감소시킵니다.
    }));
  };

  // 카운트를 리셋하는 함수입니다.
  const resetCount = () => {
    setState(prevState => ({
      ...prevState, // 기존 사용자 정보를 유지합니다.
      count: 0, // 카운트를 0으로 리셋합니다.
    }));
  };

  // 컴포넌트의 UI를 반환합니다.
  return (
    <View style={styles.container}>
      {/* 사용자 이름 입력 */}
      <TextInput
        style={styles.input}
        placeholder="이름을 입력하세요"
        value={state.name}
        onChangeText={updateName} // 사용자 이름 업데이트
      />
      {/* 사용자 나이 입력 */}
      <TextInput
        style={styles.input}
        placeholder="나이를 입력하세요"
        keyboardType="numeric" // 숫자 키패드 표시
        value={state.age ? state.age.toString() : ''} // 나이를 문자열로 변환하여 표시
        onChangeText={text => updateAge(Number(text))} // 사용자 나이 업데이트
      />
      {/* 현재 사용자 정보를 표시 */}
      <Text style={styles.infoText}>이름: {state.name}</Text>
      <Text style={styles.infoText}>나이: {state.age}</Text>
      <Text style={styles.infoText}>카운트: {state.count}</Text>
      <View style={styles.buttonContainer}>
        {/* 카운트 증가 버튼 */}
        <Button title="증가" onPress={incrementCount} />
        {/* 카운트 감소 버튼 */}
        <Button title="감소" onPress={decrementCount} />
        {/* 카운트 리셋 버튼 */}
        <Button title="리셋" onPress={resetCount} />
      </View>
    </View>
  );
};

// 스타일을 정의합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0a0a0',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

// App 컴포넌트를 내보냅니다.
export default App;
