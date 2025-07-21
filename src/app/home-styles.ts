import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d0d2d8",
        alignItems: "center",
        paddingTop: 62,
    },
    logo: {
        height: 34,
        width: 134,
    },
    form: {
        width: '100%',
        paddingHorizontal: 16,
        gap: 7,
        marginTop: 42,
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 32,
        padding: 24,
        marginTop: 24,
    },
    filter: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E4E6EC",
        paddingBottom: 12,
    },
    clearButton: {
        marginLeft: 'auto',
    },
    clearText: {
        fontSize: 12,
        color: "#828282",
        fontWeight: 600,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: "#EEF0F5",
        marginVertical: 12,
    },
    listContent: {
        paddingTop: 18,
        paddingBottom: 62,
    },
    emptyListText: {
        textAlign: "center",
        color: "#828282",
        fontSize: 14,
        marginTop: 20,
    },
});