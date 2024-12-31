import CallListScreen from "../screens/CallListScreen";
import ChatListScreen from "../screens/ChatListScreen";
import StatusListScreen from "../screens/StatusListScreen";

export const TabBarData = [
  {
    id: 1,
    route: ChatListScreen,
    name: "Chat", // Nom unique pour cet onglet
  },
  {
    id: 2,
    route: StatusListScreen,
    name: "Status", // Nom unique pour cet onglet
  },
  {
    id: 3,
    route: CallListScreen,
    name: "Calls", // Nom unique pour cet onglet
  },
];
