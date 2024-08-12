import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Lengthconverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const convertToFeet = () => {
    const feet = parseFloat(inputValue) / 30.48;
    setResult(feet.toFixed(2) + ' ft');
  };

  const convertToMeters = () => {
    const meters = parseFloat(inputValue) * 0.01;
    setResult(meters.toFixed(2) + ' m');
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Length Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter length in centimeters"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={convertToFeet}>
        <Text style={styles.buttonText}>Convert to Feet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={convertToMeters}>
        <Text style={styles.buttonText}>Convert to Meters</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Lengthconverter;
