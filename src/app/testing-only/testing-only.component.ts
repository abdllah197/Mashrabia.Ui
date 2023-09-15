import { Component, TemplateRef } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone:true,
  selector: 'app-testing-only',
  templateUrl: './testing-only.component.html',
  styleUrls: ['./testing-only.component.scss'],
  imports:[NgbDatepickerModule],
})
export class TestingOnlyComponent {

  closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas) {}

	open(content) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
