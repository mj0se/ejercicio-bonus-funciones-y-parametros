'use strict';


fetch('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let result of data.results) {

      document.body.innerHTML += `<p>${result.text}</p> <p>${result.total}</p>`;
    }
  });
