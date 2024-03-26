import { ref } from "vue";

export function useNavigationDrawer() {
  const object_user_data_template = ref({
    icon_link:
      "https://firebasestorage.googleapis.com/v0/b/messangercloud.appspot.com/o/01.jpg?alt=media&token=435f5c47-1f5c-4173-931a-b0790cd49745",
    title: "Eric Leonhard",
    subtitle: "ericleonhard@gmail.com",
  });

  const navList = [
    { id: "1", value: "1", title: "Главная", icon: "dashboard.png" },
    { id: "2", value: "2", title: "Заявки", icon: "requests.png" },
    { id: "3", value: "3", title: "Чаты", icon: "chats.png" },
    { id: "4", value: "4", title: "Сделки", icon: "contracts.png" },
    { id: "5", value: "5", title: "Проекты", icon: "projects.png" },
    { id: "6", value: "6", title: "Команда", icon: "developers.png" },
    { id: "7", value: "7", title: "Настройки", icon: "settings_.png" },
  ];

  return {
    object_user_data_template: object_user_data_template,
    navList: navList,
  };
}
