// Import stylesheets
import './style.css';
import data from './file.json';

// Import stylesheets
// import './style.css';
// import { File } from './file.json';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// const data = JSON.stringify(Data);
// for (var i = 0; i < data.length; i++) {
//   appDiv.innerHTML = `<img src="">${data[i].Image}</img>`;
// }

// fetch('file.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);

//     // navigator page
//     function getPageList(totalPages, page, maxLength) {
//       function range(start, end) {
//         return Array.from(Array(end - start + 1), (_, i) => i + start);
//       }

//       var sideWidth = maxLength < 9 ? 1 : 2;
//       var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//       var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

//       if (totalPages <= maxLength) {
//         return range(1, totalPages);
//       }

//       if (page <= maxLength - sideWidth - 1 - rightWidth) {
//         return range(1, maxLength - sideWidth - 1).concat(
//           0,
//           range(totalPages - sideWidth + 1, totalPages)
//         );
//       }

//       if (page >= totalPages - sideWidth - 1 - rightWidth) {
//         return range(1, sideWidth).concat(
//           0,
//           range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
//         );
//       }

//       return range(1, sideWidth).concat(
//         0,
//         range(page - leftWidth, page + rightWidth),
//         0,
//         range(totalPages - sideWidth + 1, totalPages)
//       );
//     }

//     $(function () {
//       var numberOfItem = $('.emp .emps').length;
//       var limitPerPage = 12;
//       var totalPages = Math.ceil(numberOfItem / limitPerPage);
//       var paginationSize = 5;
//       var currentPage;

//       function showPage(whichPage) {
//         if (whichPage < 1 || whichPage > totalPages) return false;
//         currentPage = whichPage;
//         $('.emp .emps')
//           .hide()
//           .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
//           .show();
//         $('.pagination li').slice(1, -1).remove();

//         getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
//           $('<li>')
//             .addClass('page-item')
//             .addClass(item ? 'current-page' : 'dots')
//             .toggleClass('active', item === currentPage)
//             .append(
//               $('<a>')
//                 .addClass('page-link')
//                 .attr({ href: 'javascript:void(0)' })
//                 .text(item || '...')
//             )
//             .insertBefore('.next-page');
//         });

//         $('.previous-page').toggleClass('disable', currentPage === 1);
//         $('.next-page').toggleClass('disable', currentPage === totalPages);
//         return true;
//       }

//       $('.pagination').append(
//         $('<li>')
//           .addClass('page-item')
//           .addClass('previous-page')
//           .append(
//             $('<a>')
//               .addClass('page-link')
//               .attr({ href: 'javascript:void(0)' })
//               .text('Prev')
//           ),
//         $('<li>')
//           .addClass('page-item')
//           .addClass('next-page')
//           .append(
//             $('<a>')
//               .addClass('page-link')
//               .attr({ href: 'javascript:void(0)' })
//               .text('Next')
//           )
//       );

//       $('.emp').show();
//       showPage(1);

//       $(document).on(
//         'click',
//         '.pagination li.current-page:not(.active)',
//         function () {
//           return showPage(+$(this).text());
//         }
//       );

//       $('.next-page').on('click', function () {
//         return showPage(currentPage + 1);
//       });
//       $('.previous-page').on('click', function () {
//         return showPage(currentPage - 1);
//       });
//     });
//     // end
//   })
//   .catch(function (err) {
//     console.log('error:' + err);
//   });
appendData(data);

// navigator page
function getPageList(totalPages, page, maxLength) {
  function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
    return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    );
  }

  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  );
}

$(function () {
  var numberOfItem = $('.emp .emps').length;
  var limitPerPage = 5;
  var totalPages = Math.ceil(numberOfItem / limitPerPage);
  var paginationSize = 5;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;
    currentPage = whichPage;
    $('.emp .emps')
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();
    $('.pagination li').slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
      $('<li>')
        .addClass('page-item')
        .addClass(item ? 'current-page' : 'dots')
        .toggleClass('active', item === currentPage)
        .append(
          $('<a>')
            .addClass('page-link')
            .attr({ href: 'javascript:void(0)' })
            .text(item || '...')
        )
        .insertBefore('.next-page');
    });

    $('.previous-page').toggleClass('disable', currentPage === 1);
    $('.next-page').toggleClass('disable', currentPage === totalPages);
    return true;
  }

  $('.pagination').append(
    $('<li>')
      .addClass('page-item')
      .addClass('previous-page')
      .append(
        $('<a>')
          .addClass('page-link')
          .attr({ href: 'javascript:void(0)' })
          .text('Prev')
      ),
    $('<li>')
      .addClass('page-item')
      .addClass('next-page')
      .append(
        $('<a>')
          .addClass('page-link')
          .attr({ href: 'javascript:void(0)' })
          .text('Next')
      )
  );

  $('.emp').show();
  showPage(1);

  $(document).on(
    'click',
    '.pagination li.current-page:not(.active)',
    function () {
      return showPage(+$(this).text());
    }
  );

  $('.next-page').on('click', function () {
    return showPage(currentPage + 1);
  });
  $('.previous-page').on('click', function () {
    return showPage(currentPage - 1);
  });
});
// end

function appendData(data) {
  var len = data.length;
  var appDiv = document.getElementById('emp');

  for (var i = 0; i < len; i++) {
    // var random = Math.floor(Math.random() * data.length);
    var div = document.createElement('div');
    div.className = 'emps col-6 col-sm-4 col-md-3';
    // div.style.display = 'none';
    div.innerHTML += `<img class="gallery img-fluid shadow p-0 mb-1 bg-body rounded" data-bs-toggle="modal" data-bs-target="#${data[i].id}" src="${data[i].Image}" width="350" height="250" />
    <p class="fs-6">${data[i].Description}</p>`;

    div.innerHTML += `<div class="modal fade" id="${data[i].id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-2">

          <div class="shadow">
            <img class="img-fluid mb-2" width="427" src="${data[i].Image}">
            <h6><b>${data[i].Description}</b></h6>
          </div>
            
          <div class="modal-footer justify-content-center">
          <p class="fw-bold">สนใจสมัคร! ติดต่อ--></p></div>
          <div class="modal-footer justify-content-center">
          <a href="tel:${data[i].Tel}" class="btn btn-floating btn-md btn-success shadow"><i class="bi bi-line"></i>&nbsp;&nbsp;LINE</a>
          <!--Twitter-->
          <a href="tel:${data[i].Tel}" class="btn btn-floating btn-md btn-info shadow disabled"><i class="bi bi-messenger"></i>&nbsp;&nbsp;MESSENGER</a>
          <!--Google +-->
          <a href="tel:${data[i].Tel}" class="btn btn-floating btn-md btn-primary shadow"><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;${data[i].Tel}</a>
          </div>
          <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-outline-danger btn-rounded btn-md ml-4" data-bs-dismiss="modal">Close</button>
          </div>
          </div>
        </div>
      </div>
    </div>`;

    // data.splice(random, 1);
    appDiv.appendChild(div);
  }
}
// -------------------------------------------------------------------------------------------------
