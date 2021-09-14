import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import CreateWager from "../screens/CreateWager";
import ViewEditWager from "../screens/ViewEditWager";

const screens = {
  Home: {
    screen: Home,
  },
  "Create Wager": {
    screen: CreateWager,
  },
  "View and Edit Wagers": {
    screen: ViewEditWager,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
