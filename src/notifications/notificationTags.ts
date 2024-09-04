import { OneSignal } from "react-native-onesignal";

export function tagUserIndoCreate() {
  OneSignal.User.addTags({
    user_name: "Davi",
    user_email: "cadwvk@gmail.com"
  })
}