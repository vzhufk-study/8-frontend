import { Component, OnInit } from "@angular/core";
import { getEstates } from "../data";
declare var jquery: any;
declare var $: any;
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  estates = {};
  constructor() {
    getEstates().then(res => (this.estates = res.data.list));
  }

  ngOnInit() {
    $(document).ready(function() {
      $("#search").on("keyup", function() {
        var value = $(this)
          .val()
          .toLowerCase();
        $(".portfolio-item div div ul").filter(function() {
          this.innerText.toLowerCase().indexOf(value) > -1
            ? $(this)
                .parent()
                .parent()
                .parent()
                .show()
            : $(this)
                .parent()
                .parent()
                .parent()
                .hide();
        });
      });
    });
  }
}
