import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    searchWrapper: {
        flex: 1,
        backgroundColor: "#F3F4F8",
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        height: "100%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: "#FF7754",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "#F3F4F8",
      },
      searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        height: 50,
      }
})

export default styles