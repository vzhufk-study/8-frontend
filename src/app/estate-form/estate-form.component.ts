import { Component } from "@angular/core";

import { createEstate } from "../data";

import { Estate } from "../estate";

@Component({
  selector: "app-hero-form",
  templateUrl: "./estate-form.component.html",
  styleUrls: ["./estate-form.component.css"]
})
export class EstateFormComponent {
  model = new Estate(
    "0",
    "",
    "",
    "",
    1,
    1,
    1,
    false,
    "",
    "",
    "",
    "",
    1,
    "",
    1,
    1,
    1,
    "",
    "",
    "",
    "",
    1,
    "",
    ""
  );
  walls = ["Не вказано", "Цегляний", "Дерев'яний", "Панельний"];
  layouts = [
    "Не вказано",
    "Чешка",
    "Київка",
    "Старий фонд",
    "Хрущовка",
    "Сталінка",
    "Новобудова",
    "Особняк",
    "Спецпроект",
    "Гуртожиток"
  ];
  heatings = [
    "Не вказано",
    "Без опалення",
    "Пічне",
    "Централізоване",
    "Конвектор",
    "АГВ",
    "Котельня"
  ];

  furnitures = ["Без меблів", "Старі меблі", "Нові меблі"];
  floorings = [
    "Не вказано",
    "Ламінат",
    "Дерево",
    "Паркет",
    "Плитка",
    "Лінолеум"
  ];
  repairings = [
    "Не вказано",
    "Не потиньковано",
    "Від забудовника",
    "Нежилий стан",
    "Добрий стан",
    "Косметичний ремонт",
    "Євроремонт",
    "Дизайнерський ремонт",
    "Частковий"
  ];
  roomstypes = ["Не вказано", "Суміжні", "Роздільні", "Суміжно-роздільні"];

  submitted = false;

  onSubmit() {
    this.model.id = undefined;
    createEstate(JSON.stringify(this.model));
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
