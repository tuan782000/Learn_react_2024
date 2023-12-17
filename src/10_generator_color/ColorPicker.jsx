import { useState } from "react"
import './style.modules.css'

const ColorPicker = () => {
    const [color, setColor] = useState('#fff')

    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }
    const colorPickerContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    // const colorDisplay = {
    //     width: "300px",
    //     height: "300px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     border: "5px solid hsl(0, 0%, 80%)",
    //     borderRadius: "25px",
    //     marginBottom: "25px",
    //     transition: "0.25s ease",
    // }
    return (
        <>
            <div className="colorPickerContainer" style={colorPickerContainer}>
                <h1 style={{ margin: "50px", fontSize: "3rem" }}>Color Picker</h1>
                <div className="colorDisplay" style={{ backgroundColor: color }}>
                    <p style={{ color: "hsl(0,0%,20%)", fontSize: "2rem", textAlign: "center" }}>Selected Color: {color}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }} htmlFor="color">Select a color:</label>
                    <input style={{ width: "75px", height: "50px", padding: "5px", borderRadius: "10px", border: "3px solid hsl(0, 0%, 80%)" }} type="color" id="color" value={color} onChange={(e) => handleChangeColor(e)} />
                </div>
            </div>
        </>
    )
}

export default ColorPicker