import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Star } from "phosphor-react-native";

interface StarRatingProps {
  onRate: (rating: number) => void;
}

export function StarRating({ onRate }: StarRatingProps) {
  const [rating, setRating] = useState(0);

  const handlePress = (value: number) => {
    setRating(value);
    onRate(value); // Chama a função passando o valor da avaliação
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((value) => (
        <TouchableOpacity key={value} onPress={() => handlePress(value)}>
          <Star
            size={40}
            weight={value <= rating ? "fill" : "regular"}
            color={value <= rating ? "#FFD700" : "#A9A9A9"} // Amarelo quando selecionado
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  star: {
    marginHorizontal: 5,
  },
});
