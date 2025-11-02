import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import Constants from 'expo-constants';

// --- Funções Lógicas (Sem Worker) ---

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findNthPrime = (n) => {
  let count = 0;
  let num = 2;
  while (true) {
    if (isPrime(num)) {
      count += 1;
      if (count === n) {
        return num;
      }
    }
    num += 1;
  }
};


// --- Componente Principal da Aplicação ---

export default function App() {
  const [positionInput, setPositionInput] = useState('');
  const [result, setResult] = useState('Aguardando entrada...');
  const [isLoading, setIsLoading] = useState(false);

  const calculatePrime = () => {
    // Esconde o teclado
    Keyboard.dismiss(); 

    const n = parseInt(positionInput, 10);

    // Validações
    if (isNaN(n) || positionInput.trim() === '' || n <= 0) {
      Alert.alert(
        "Erro de Entrada", 
        "Por favor, insira um número inteiro positivo (maior que zero).",
        [{ text: "OK" }] 
      );
      setResult(''); 
      return;
    }
    
    // Inicia o Carregamento
    setIsLoading(true);
    setResult('Calculando...');

    // Usamos setTimeout para GARANTIR que a tela de "Calculando..." apareça
    // antes de iniciar o loop pesado, sem usar Worker.
    setTimeout(() => {
      try {
        const primeNumber = findNthPrime(n);
        setResult(`O ${n}° número primo é: ${primeNumber}`);

      } catch (e) {
        Alert.alert(
          "Erro", 
          `Ocorreu um erro: ${e.message}`,
          [{ text: "OK" }]
        );
        setResult('');
      } finally {
        setIsLoading(false);
      }
    }, 50); 

  };


  // --- Estrutura da UI (JSX) ---
  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>
        Digite a posição (N) do primo que deseja encontrar:
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setPositionInput}
        value={positionInput}
        keyboardType="numeric"
        placeholder="Ex: 10000"
        maxLength={5} 
        textAlign="center"
      />

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={calculatePrime}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            Calcular Primo
          </Text>
        )}
      </TouchableOpacity>

      <Text style={styles.resultLabel}>
        {result}
      </Text>

    </View>
  );
}

// --- Estilos para a Interface (inalterados) ---
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20, 
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%', 
    padding: 8,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF', 
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultLabel: {
    marginTop: 30,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    minHeight: 20, 
  },
});