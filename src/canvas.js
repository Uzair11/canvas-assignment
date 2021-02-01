import React, {useRef, useEffect, useState} from 'react'

const Canvas = props => {
    const [state, setState] = useState('');
    const canvasRef = useRef(null)


    useEffect(() => {

        function getFont() {
            let ratio = 9 / state.length;   // calc ratio
            let size = 20 * ratio;   // get font size based on current width
            return (size | 0) + 'px sans-serif'; // set font
        }

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const image = new Image();
        image.src = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80";
        image.onload = () => {
            context.drawImage(image, 0, 0);
            context.font = getFont();
            context.fillText(state, 20, 48);
            context.strokeRect(20, 30, 100, 20)
        };
    }, [state])
    return <div style={{marginTop: '20px'}}>
        <input type={"text"} value={state} maxLength={9} onChange={(e) => {
           setState(e.target.value)
        }}/>
        <p>Characters left = {9 - (state.length || 0)}</p>
        <canvas ref={canvasRef} style={{border: '1px solid black'}} width={200} height={200} {...props}/>

    </div>
}

export default Canvas