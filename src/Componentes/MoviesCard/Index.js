import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoviesCard = (props) => {
  return (
    <TouchableOpacity>
      <Image style={StyleSheet.img} source={props.movieURL} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
    paddingRight: 10,
  },
});
