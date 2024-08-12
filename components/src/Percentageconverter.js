import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PercentageConverter = () => {
  const [marks, setMarks] = useState('');
  const [total, setTotal] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const parsedMarks = parseFloat(marks);
    const parsedTotal = parseFloat(total);

    if (!isNaN(parsedMarks) && !isNaN(parsedTotal)) {
      const calculatedPercentage = (parsedMarks / parsedTotal) * 100;
      setResult(`Percentage is ${calculatedPercentage.toFixed(2)}%`);
    } else {
      setResult('Please enter valid numeric values');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Percentage Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Numbers"
        keyboardType="numeric"
        value={marks}
        onChangeText={(value) => setMarks(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter total Numbers"
        keyboardType="numeric"
        value={total}
        onChangeText={(value) => setTotal(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        <Text style={styles.buttonText}>Calculate Percentage</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PercentageConverter;
