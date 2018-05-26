import { Component } from "@angular/core";

import { createEstate, updateEstate } from "../data";

import { Estate } from "../estate";

import { ActivatedRoute } from "@angular/router";

import { getEstate } from "../data";

@Component({
  selector: "app-hero-form",
  templateUrl: "./estate-form.component.html",
  styleUrls: ["./estate-form.component.css"]
})
export class EstateFormComponent {
  id = 0;
  model = new Estate(
    "0",
    " ",
    " ",
    " ",
    1,
    1,
    1,
    false,
    " ",
    " ",
    " ",
    " ",
    1,
    " ",
    1,
    1,
    1,
    " ",
    " ",
    " ",
    " ",
    1,
    " ",
    " "
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
  edited = false;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.edited = true;
        getEstate(params.id).then(res => {
          for (let i in res.data) {
            if (this.model[i]) {
              this.model[i] = res.data[i];
            }
          }
        });
      }
    });
  }

  onSubmit() {
    this.model.id = undefined;
    if (!this.edited) {
      createEstate(JSON.stringify(this.model));
    } else {
      updateEstate(this.id, JSON.stringify(this.model));
    }
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
