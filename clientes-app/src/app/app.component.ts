import { Component, AfterViewInit} from '@angular/core';
const jQuery = require('jquery')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'clientes-app';

 ngAfterViewInit(){
    (function($) {
      "use strict";
  
      
      var path = window.location.href; 
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function(this:any) {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      
      $("#sidebarToggle").on("click", function(e:any) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
    }
  }

