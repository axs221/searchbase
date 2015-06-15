/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import $ = require('jquery');

@Component({
  selector: 'home',
})
@View({
  templateUrl: './templates/home.html',
  directives: [NgFor]
})

class SampleApp {
  detailFrame: string;
  note: string;
  searchTerm: string;

  search(terms) {
    this.searchTerm = terms;
    this.detailFrame = 'http://searchbase.shawnaxsom.com/search?q=' + terms;
  }

  saveNote(note) {
    var mySearchData = {
      "key": "f",
      "value": "g"
    };
    $.ajax({
            url: "http://searchbase.shawnaxsom.com/api",
            type: "POST",
            crossDomain: true,
            data: mySearchData,
            dataType: "json",
            success: function (response) {
                var resp = JSON.parse(response)
                alert(resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
  }

  getPreviousSearches() {
  //    fetch('https://gratipay.com/~Gratipay/public.json', {mode: 'cors'})  
  //      .then(function(text) {  
  //        alert('Request successful', text);  
  //      })  
  //      .catch(function(error) {  
  //        log('Request failed', error)  
  //      });
  }
}

bootstrap(SampleApp);
