import { IMultiSelectData } from "../types/locationSelection.types";

export const multiSelectData: IMultiSelectData = [
  {
    id: 1,
    title: "Куда?",
    size: "Big",
    placeholder: "клуб, бар, лаундж...",
    value: [],
    options: [
      { text: "Клуб", value: "Клуб", checked: false },
      { text: "Бар", value: "Бар", checked: false },
      { text: "Лаундж", value: "Лаундж", checked: false },
    ],
  },
  {
    id: 2,
    title: "Когда?",
    size: "Big",
    placeholder: "пятница, суббота",
    value: [],
    options: [
      { text: "Клуб", value: "Клуб", checked: false },
      { text: "Бар", value: "Бар", checked: false },
      { text: "Лаундж", value: "Лаундж", checked: false },
    ],
  },
  {
    id: 3,
    title: "Интересы?",
    size: "Big",
    placeholder: "потанцевать, выпить",
    value: [],
    options: [
      { text: "Клуб", value: "Клуб", checked: false },
      { text: "Бар", value: "Бар", checked: false },
      { text: "Лаундж", value: "Лаундж", checked: false },
    ],
  },
];
