import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ── TODO (UI) ─────────────────────────────────────────────────────────
          Build a simple About screen: a title and a sentence or two about the
          five daily prayers. Just practice <View>, <Text>, and StyleSheet —
          no logic needed here. */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1a16" },
  // add your styles here (title, body, etc.)
});
