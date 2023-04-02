
import { Component, TemplateRef, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {

  //Number of items

  modalRef?: BsModalRef;
  meetings: number = 23;
  items: number = 11;
  actions: number = 15;
  reminders: number = 9;
  notes: number = 18;

  calendarContainer: boolean = false;
  calendarEventNotification: boolean = false;

  // FormGroup 

  quickItemForm = new FormGroup({
    formItemTitle: new FormControl('', [ Validators.required]),
    formType: new FormControl('', [ Validators.required]),
    formBusiness: new FormControl('', [ Validators.required]),
    formDueDate: new FormControl('', [ Validators.required]),
    formPriority: new FormControl('', [ Validators.required]),
    formObjective: new FormControl('', [ Validators.required]),
    formJobTitle: new FormControl('', [Validators.required]),
    formLanguageSpanish: new FormControl(),
    formLanguageChinese: new FormControl(),
    formLanguageArabic: new FormControl()
  })

  formItemTitleError: boolean = false;
  formTypeError: boolean = false;
  formBusinessError: boolean = false;
  formDueDateError: boolean = false;
  formPriorityError: boolean = false;
  formObjectiveError: boolean = false;
  formJobsError: boolean = false;

  newItem: any;

  constructor( private modalService: BsModalService, private storageService: StorageService) {

  }
  
  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg'});
    this.modalRef?.onHidden?.subscribe(() => {
      this.resetFields();
      this.resetFormErrors();
    })
  }

  onSubmit(): void {
    this.checkFormValidation();
  }

  onCancel(): void {
    this.resetFields();
    this.resetFormErrors();
    this.modalRef?.hide();
  }
  
  createItem(): void {
    let ItemTitle = this.quickItemForm.get('formItemTitle')?.value;
    let Type = this.quickItemForm.get('formType')?.value;
    let Business = this.quickItemForm.get('formBusiness')?.value;
    let DueDate = this.quickItemForm.get('formDueDate')?.value;
    let Priority = this.quickItemForm.get('formPriority')?.value;
    let Objective = this.quickItemForm.get('formObjective')?.value;
    let Job = this.quickItemForm.get('formJobTitle')?.value;
    let Languages = [];

    if(this.quickItemForm.get('formLanguageSpanish')?.value == true) {
      Languages.push('Spanish');
    }
    if(this.quickItemForm.get('formLanguageChinese')?.value == true) {
      Languages.push('Chinese');
    }
    if(this.quickItemForm.get('formLanguageArabic')?.value == true) {
      Languages.push('Arabic');
    }

    this.newItem = {
      'ItemTitle': ItemTitle,
      'Type': Type,
      'Business': Business,
      'DueDate': DueDate,
      'Priority': Priority,
      'Objective': Objective,
      'Job': Job,
      'Languages': Languages
    }
    this.storageService.addQuickItem(this.newItem);
    // Object ready for sending into the list of items //
  }


  checkFormValidation(): void {
    if(this.quickItemForm.valid) {  
      window.alert("Item Seccusfully Created")       //Form Valid
      this.createItem();
      this.resetFormErrors();
      this.resetFields();
      this.modalRef?.hide();
    } else {                                         //Form Invalid
      this.resetFormErrors();                     
      this.checkInvalidFieldsOnSubmit();
    }
  }

  checkInvalidFieldsOnSubmit(): void {
    if(!this.quickItemForm.get('formItemTitle')?.valid) {
      this.formItemTitleError = true;
    }
    if (!this.quickItemForm.get('formType')?.valid) {
      this.formTypeError = true;
    }
    if(!this.quickItemForm.get('formBusiness')?.valid) {
      this.formBusinessError = true;
    }
    if (!this.quickItemForm.get('formDueDate')?.valid) {
      this.formDueDateError = true;
    }
    if (!this.quickItemForm.get('formPriority')?.valid) {
      this.formPriorityError = true;
    }
    if (!this.quickItemForm.get('formObjective')?.valid) {
      this.formObjectiveError = true;
    }
    if (!this.quickItemForm.get('formJobTitle')?.valid) {
      this.formJobsError = true;
    }
  }

  resetFormErrors(): void {
    this.formItemTitleError = false;
    this.formTypeError = false;
    this.formBusinessError = false;
    this.formDueDateError = false;
    this.formPriorityError = false;
    this.formObjectiveError = false;
    this.formJobsError = false;
  }

  resetFields(): void {
    this.quickItemForm.get('formItemTitle')?.reset();
    this.quickItemForm.get('formType')?.reset();
    this.quickItemForm.get('formBusiness')?.reset();
    this.quickItemForm.get('formDueDate')?.reset();
    this.quickItemForm.get('formPriority')?.reset();
    this.quickItemForm.get('formObjective')?.reset();
    this.quickItemForm.get('formJobTitle')?.reset();
    this.quickItemForm.get('formLanguageSpanish')?.reset();
    this.quickItemForm.get('formLanguageChinese')?.reset();
    this.quickItemForm.get('formLanguageArabic')?.reset();
  }

  validateItemTitle(): void {
    if(!this.quickItemForm.get('formItemTitle')?.valid) {
      this.formItemTitleError = true;
    } else {
      this.formItemTitleError = false;
    }
  }

  validateType(): void {
    if(!this.quickItemForm.get('formType')?.valid) {
      this.formTypeError = true;
    } else {
      this.formTypeError = false;
    }
  }

  validateBusiness(): void {
    if(!this.quickItemForm.get('formBusiness')?.valid) {
      this.formBusinessError = true;
    } else {
      this.formBusinessError = false;
    }
  }

  validateDueDate(): void {
    if(!this.quickItemForm.get('formDueDate')?.valid) {
      this.formDueDateError = true;
    } else {
      this.formDueDateError = false;
    }
  }

  validatePriority(): void {
    if(!this.quickItemForm.get('formPriority')?.valid) {
      this.formPriorityError = true;
    } else {
      this.formPriorityError = false;
    }
  }

  validateObjective(): void {
    if(!this.quickItemForm.get('formObjective')?.valid) {
      this.formObjectiveError = true;
    } else {
      this.formObjectiveError = false;
    }
  }

  validateJobs(): void {
    if(!this.quickItemForm.get('formJobTitle')?.valid) {
      this.formJobsError = true;
    } else {
      this.formJobsError = false;
    }
  }

  validateSubmitForm(): boolean {
    return !this.quickItemForm.valid;
  }
}