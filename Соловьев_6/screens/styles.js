import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container:{
    alignItems:"center",
    paddingVertical:"20%"
  },
  title:{
    fontWeight:700,
    fontSize: 24
  },
  text:{
    fontWeight:400,
    fontSize:16,
    marginHorizontal: 32,
    marginVertical: 8,
    textAlign:'center'
  },
  input: {
    width: '80%',
    marginTop: 8,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical:10,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#007aff",
    width: "80%",
    alignItems: "center",
    paddingVertical:10,
    borderRadius: 8,
  },
  buttonText:{
    fontWeight:400,
    fontSize:16,
    color: 'white'
  },
  link: {
    fontWeight:400,
    fontSize:16,
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default Styles
