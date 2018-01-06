import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-starboard',
  templateUrl: './starboard.component.html',
  styleUrls: ['./starboard.component.css']
})
export class StarboardComponent implements OnInit {
  isHamClosed = false ;
  @ViewChild('ham') hamburger: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // this.wrapper.nativeElement.classList.toggle('toggled');
    this.renderer.addClass(this.hamburger.nativeElement, 'open');
  }
  onToggle() {
    if (this.isHamClosed) {
      this.renderer.addClass(this.overlay.nativeElement, 'hide');
      this.renderer.removeClass(this.hamburger.nativeElement, 'is-open');
      this.renderer.addClass(this.hamburger.nativeElement, 'is-closed'); 
      this.renderer.setStyle(this.overlay.nativeElement, 'z-index',-1);
    }else {
      this.renderer.addClass(this.overlay.nativeElement, 'show');
      this.renderer.addClass(this.hamburger.nativeElement, 'is-open');
      this.renderer.removeClass(this.hamburger.nativeElement, 'is-closed');
      
    }
    this.isHamClosed = !this.isHamClosed;
    this.wrapper.nativeElement.classList.toggle('toggled');
  }
}



// $(document).ready(function () {
  // $('[data-toggle="offcanvas"]').click(function () {
  //       $('#wrapper').toggleClass('toggled');
  // });  
// });

// $(document).ready(function () {
//   var trigger = $('.hamburger'),
//       overlay = $('.overlay'),
//      isClosed = false;

//     trigger.click(function () {
//       hamburger_cross();      
//     });

//     function hamburger_cross() {

//       if (isClosed == true) {          
//         overlay.hide();
//         trigger.removeClass('is-open');
//         trigger.addClass('is-closed');
//         isClosed = false;
//       } else {   
//         overlay.show();
//         trigger.removeClass('is-closed');
//         trigger.addClass('is-open');
//         isClosed = true;
//       }
//   }
  
//   $('[data-toggle="offcanvas"]').click(function () {
//         $('#wrapper').toggleClass('toggled');
//   });  
// });