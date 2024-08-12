import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';

const CoinTossApp = () => {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleToss = () => {
    const random = Math.random();
    const side = random < 0.5 ? 'Heads' : 'Tails';
    setResult(side);
    setHistory([...history, side]);
  };

  const handleReset = () => {
    setResult('');
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToss} style={styles.button}>
        <Text style={styles.buttonText}>Toss the Coin!</Text>
      </TouchableOpacity>
      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Result: {result}</Text>
          <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.historyButton}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.crossButton}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>History</Text>
          </View>
          <ScrollView contentContainerStyle={styles.historyModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.backButton}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {history.map((item, index) => (
              <Text key={index} style={styles.historyItem}>
                - {item}
              </Text>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  historyButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  crossButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  historyModal: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CoinTossApp;
