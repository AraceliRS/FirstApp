import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Professor = props => {
  const randomNumber = Math.floor(Math.random()*100+50);
  return (
    <View style = {styles.profContainer}>
      <Image style = {styles.profImages} source={{uri : `https://picsum.photos/${randomNumber}`, width:100, height: 100}}/>
      <Text> Hello, I am {props.name} and I like {props.food} </Text> 
    </View>
  );
} 

const App = () => {
  return [
    <ScrollView>
      <Professor name="Mario" food="sandwiches"/>
      <Professor name="Mariana" food="jello" />
      <Professor name="Martina" food = "tamales" /> 
      <Professor name="Mario" food="sandwiches"/>
      <Professor name="Mariana" food="jello" />
      <Professor name="Martina" food = "tamales" /> 
    </ScrollView>
  ];
}

const styles = StyleSheet.create({
  profImages: {
    width:50, height: 50, borderRadius:25,
  },
  profContainer:{
    flexDirection: "row", 
    padding: 10,
    margin:10,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

  }

});

export default App