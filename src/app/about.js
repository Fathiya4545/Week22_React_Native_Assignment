import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Do Step 1 first so the words are easy to read. Then do Step 2.
export default function About() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* STEP 1 — Add style={styles.content} to the View below. */}
      <View>
        <Text style={styles.title}>About</Text>
        <Text style={styles.note}>Add a style to the sentence below.</Text>

        {/* STEP 1 — Add style={styles.body} to the Text below. */}
        {/* STEP 2 — Then replace the words with one or two sentences
            about the five daily prayers. */}
        <Text>
          Replace this sentence with one or two sentences about the five daily prayers.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0b1a16" },
  content: { flex: 1, padding: 20, gap: 12 },
  title: { color: "#f4f1e8", fontSize: 28, fontWeight: "700" },
  note: { color: "#d5e4dc", fontSize: 16, lineHeight: 22 },
  body: { color: "#d5e4dc", fontSize: 16, lineHeight: 24 },
});
