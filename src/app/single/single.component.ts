import { Component, OnInit } from "@angular/core";
import { getEstate } from "../data";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.css"]
})
export class SingleComponent implements OnInit {
  estate = {};
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      getEstate(params.id).then(res => (this.estate = res.data))
    );
  }

  ngOnInit() {}
}
