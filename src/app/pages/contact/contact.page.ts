import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  fb = inject(FormBuilder);
  alertButtons = ['Okay'];
  messageData = signal('');
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    mobile: ['', Validators.required],
    message: ['', Validators.required],
    contactMethod: ['', Validators.required],
  });

  onSubmitForm() {
    this.messageData.set(this.contactForm.value.message as string);
    this.contactForm.reset();
  }
}
