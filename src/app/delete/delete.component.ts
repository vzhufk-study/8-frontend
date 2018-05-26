import { Component, OnInit } from "@angular/core";
import { deleteEstate } from "../data";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  estate = {};
  id = "";
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      deleteEstate(params.id).then(res => (this.id = params.id))
    );
  }

  ngOnInit() {}
}
