import { Text, View, Image, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Styles from './styles'

function check() {
  alert("Начинается проверка");
} 

const Login = (props) => {
  return (
    <View style = {Styles.container}>
      <Text style = {Styles.title}>
        Вход в систему
      </Text>
      <Text style = {Styles.text}>
        Введите логин и пароль, которые вы создавали при регистрации
      </Text>
      <TextInput style = {Styles.input} placeholder="Логин"/>
      <TextInput style = {Styles.input} placeholder="Пароль" secureTextEntry/>
      <TouchableOpacity onPress={() => check()} style = {Styles.button}>
        <Text style = {Styles.buttonText}>
          Войти
        </Text>
      </TouchableOpacity>
      <Text style = {Styles.text, Styles.link} onPress={() => props.navigation.navigate('Register')}>
        Зарегистрироваться
      </Text>
    </View>
  );
};

export default Login;
