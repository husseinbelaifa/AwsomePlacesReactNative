import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = value => {
    this.setState({ placeName: value });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState(prevState => {
      return {
        places: [...prevState.places, prevState.placeName]
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <View style={styles.listContainer}>
          <PlaceList places={this.state.places} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 26
  },

  listContainer: {
    width: "100%"
  }
});
