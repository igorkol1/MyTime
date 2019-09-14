import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastComponent {

  private toastOptions = {
    positionClass: 'toast-bottom-right',
    closeButton: true
  };

  constructor(private toast: ToastrService) {
  }

  showToast(type: ToastType, message: string) {
    switch (type) {
      case ToastType.SUCCESS:
        this.toast.success(message, 'Succes', this.toastOptions);
        break;
      case ToastType.ERROR:
        this.toast.error(message, 'Error', this.toastOptions);
        break;
    }
  }

}

export enum ToastType {
  SUCCESS,
  ERROR
}
