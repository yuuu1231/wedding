import {useRef} from 'react';


const Canvas = () => {


    const canvasRef = useRef<HTMLCanvasElement>(null);

    return <canvas ref={canvasRef}/>
}
export default Canvas;