import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Linking } from 'react-native';
export default function TypicalScreen() {
  const [url, setUrl] = useState(''); // Создаём состояние для хранения введённого URL

  // Функция для проверки и открытия URL
  const checkAndOpenURL = async () => {
    if (!url) { // Если поле пустое
      Alert.alert('Ошибка', 'Введите URL'); // Показать предупреждение
      return; // Прервать функцию
    }

    try {
      const supported = await Linking.canOpenURL(url); // Проверить, поддерживается ли URL на устройстве
      if (supported) {
        await Linking.openURL(url); // Открыть URL, если поддерживается
      } else {
        Alert.alert('Недоступно', 'Данный URL не поддерживается на этом устройстве'); // Сообщение, если нельзя открыть
      }
    } catch (error) { // При ошибке
      Alert.alert('Ошибка', 'Произошла ошибка при попытке открыть URL'); // Показать ошибку
    }
  };

  const resetInput = () => setUrl(''); // Функция для очистки поля ввода

  return (
    <View style={styles.container}> {/* Контейнер с отступами и центрированием */}
      <Text style={styles.title}>Добро пожаловать на типовой экран!</Text> {/* Заголовок */}

      <Text style={styles.label}>Введите URL для проверки и открытия:</Text> {/* Подсказка */}
      <TextInput
        style={styles.input} // Стили для поля ввода
        placeholder="https://example.com" // Текст подсказки внутри поля
        value={url} // Текущее значение из состояния
        onChangeText={setUrl} // Обновляем состояние при вводе
        autoCapitalize="none" // Отключаем автокапитализацию
        keyboardType="url" // Клавиатура для ввода URL
      />

      <View style={styles.buttonsContainer}> {/* Контейнер для кнопок в строку */}
        <Button title="Открыть URL" onPress={checkAndOpenURL} /> {/* Кнопка открытия URL */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' }, // Отступы, занимает весь экран, центр по вертикали
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }, // Стиль заголовка
  label: { fontSize: 16, marginBottom: 10 }, // Стиль текста подсказки
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 20 }, // Стиль поля ввода
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-around' }, // Расположение кнопок в строку с отступами
});
