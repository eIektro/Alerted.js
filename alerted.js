/*!
 *  Name: Alerted.js
 *  Description: Sweetalert2 depended semi customizable alert and confirmation dialogs.
 *  License: MIT License
 *  (c) 2020-2021 M. Emre Koral
 */



/**
 * Usage: FOR CONFIRMATION ALERT. 
 * @param {any} description Displays on the body of alert dialog
 * @param {any} title Alert dialog title
 * @param {any} handleResponse function to be run when you click Yes
 */

var confirmationAlert = (description, title, handleResponse) => {

  title = (title === undefined) ? "Emin misiniz?" : title;
  handleResponse = (handleResponse === undefined || handleResponse === null) ? () => { } : handleResponse;

  Swal.fire({

    title: title,
    html: `<span style="color:#214B6A">${description}</span>`,
    showCloseButton: false,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: "#00D373",
    confirmButtonText: "Evet",
    cancelButtonText: "Vazgeç",

  }).then(result => {
    handleResponse(result.value)
  });

}



/**
 * Usage: BEFORE DELETE REQUEST. Description: Sweetalert2 depended semi customizable alert and confirmation dialogs. -M.E.K.
 * @param {any} description Displays on the body of alert dialog
 * @param {any} title Alert dialog title
 * @param {any} handleResponse function to be run when you click Yes
 */

var deleteRequestAlert = (description, title, handleResponse) => {

  title = (title === undefined) ? "Silmeye emin misiniz!" : title;
  handleResponse = (handleResponse === undefined || handleResponse === null) ? () => { } : handleResponse;

  Swal.fire({

    title: title,
    html: `<span style="color:red">${description}</span>`,
    showCloseButton: false,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Sil",
    cancelButtonText: "Vazgeç",

  }).then(result => {
    handleResponse(result.value)
  });

}

/**
 * Usage: AFTER FAIL RESPONSE. Description: Sweetalert2 depended semi customizable alert and confirmation dialogs. -M.E.K.
 * @param {any} description Displays on the body of alert dialog
 * @param {any} title Alert dialog title
 * @param {any} handleResponse function to be when dialog closing
 */

var failResponseAlert = (description, title, afterClosing) => {

  title = (title === undefined) ? "İşlem başarısız!" : title;
  afterClosing = (afterClosing === undefined || afterClosing === null) ? () => { } : afterClosing;
  Swal.fire({

    title: title,
    html: `<span style="color:red">${description}</span>`,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: "Tamam",

  }).then(() => {
    afterClosing()
  });
}

/**
 * Usage: AFTER SUCCESS RESPONSE. Description: Sweetalert2 depended semi customizable alert and confirmation dialogs. -M.E.K.
 * @param {any} description Displays on the body of alert dialog
 * @param {any} title Alert dialog title
 * @param {any} handleResponse function to be when dialog closing
 */

var successResponseAlert = (description, title, afterClosing) => {

  title = (title === undefined) ? "İşlem başarılı!" : title;
  afterClosing = (afterClosing === undefined || afterClosing === null) ? () => { } : afterClosing;

  Swal.fire({

    title: title,
    html: `<span style="color:green">${description}</span>`,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: "Tamam",

  }).then(() => {
    afterClosing();
  });


}