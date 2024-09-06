import { OneSignal } from "react-native-onesignal";

export function tagUserIndoCreate() {
  OneSignal.User.addTags({
    user_name: "Davi",
    user_email: "cadwvk@gmail.com"
  })
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount)
}