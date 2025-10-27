import { Text, View, Image, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Styles from './styles'

function check() {
  alert("Ваши данные приняты");
}

const Reg = (props) => {
  return (
    <View style = {Styles.container}>
      <Text style = {Styles.title}>
        Регистрация
      </Text>
      <Text style = {Styles.text}>
        Введите свои данные для регистрации и придумайте пароль
      </Text>
      <TextInput style = {Styles.input} placeholder="Имя"/>
      <TextInput style = {Styles.input} placeholder="Логин"/>
      <TextInput style = {Styles.input} placeholder="Пароль" secureTextEntry/>
      <TouchableOpacity style = {Styles.button} onPress={() => check()}>
        <Text style = {Styles.buttonText}>
          Зарегистрироваться
        </Text>
      </TouchableOpacity>
      <Text style = {Styles.text, Styles.link} onPress={() => props.navigation.goBack()}>
        Войти
      </Text>
    </View>
  );
};

export default Reg;
