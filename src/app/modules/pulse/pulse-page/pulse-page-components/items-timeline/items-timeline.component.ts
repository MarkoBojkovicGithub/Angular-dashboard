import { Component, OnInit, TemplateRef } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-items-timeline',
  templateUrl: './items-timeline.component.html',
  styleUrls: ['./items-timeline.component.scss']
})
export class ItemsTimelineComponent implements OnInit {

  modalRef?: BsModalRef;
  inspectIcon: boolean = false;
  itemsList = null;

  constructor(private storageService: StorageService,  private modalService: BsModalService) { }

  ngOnInit(): void {
    this.itemsList = this.storageService.getItemsList();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg'});

    this.modalRef?.onHidden?.subscribe(() => {
      this.closeInspectModal();
    }) 
  }


  closeInspectModal(): void {
    this.inspectIcon = false;
    this.modalRef?.hide();
  }
}