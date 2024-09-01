import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    header:{
        width: "100%",
        padding: 16,
        gap: 12,
        flexDirection: "row",
        position: 'absolute',
        backgroundColor: colors.navigationBackground,
    }
})

export default styles
