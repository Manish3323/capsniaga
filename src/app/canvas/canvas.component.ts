import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanvasService } from './canvas.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnDestroy {
  canvasContent: string;
  showCanvas = false;
  subscribeTocanvasService: Subscription;
  difficulties = ['Beginneer', 'Amateur', 'Expert' , 'Unstoppable'];
  constructor(private canvasService: CanvasService) { }
  ngOnInit() {
    this.subscribeTocanvasService = this.canvasService.canvasSubject.subscribe((content: string) => {
      this.canvasContent = this.canvasService.currentContentOnCanvas ? this.canvasService.currentContentOnCanvas : ''; 
      if (this.canvasContent)
      {
        this.showCanvas = true;
      }
    });
  }
  ngOnDestroy() {
      // Called once, before the instance is destroyed.
      // Add 'implements OnDestroy' to the class.
      this.subscribeTocanvasService.unsubscribe();
  }
}
