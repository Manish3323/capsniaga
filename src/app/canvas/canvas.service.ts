import { Subject } from 'rxjs/Subject';

export class CanvasService{
    canvasSubject = new Subject<string>();
    currentContentOnCanvas: string;
    onAddToCanvas(content: string){
        this.currentContentOnCanvas = content;
        this.canvasSubject.next(this.currentContentOnCanvas);
    }
}