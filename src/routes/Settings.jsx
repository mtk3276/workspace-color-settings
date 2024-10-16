import { useContext } from "react"
import { ColorThemeContext } from "../contexts/ColorThemeContext"

const colorPairs = [['#F2BAC9', '#ED4C4C'], ['#B1F8F2', '#188991'], ['#FFF3B0', '#EF946C'], ['#F2BAC9', '#4357AD'], ]

export default function Settings() {
    const { colorTheme, setColorTheme } = useContext(ColorThemeContext);
    return (
        <>
            <h1>Settings</h1>
            <h2>Select your favourite theme:</h2>
            {colorPairs.map(pair => (
                <button
                    key={`${pair[0]},${pair[1]}`}
                    onClick={() => { setColorTheme(pair) }}
                    style={{ backgroundColor: [pair[0]], border: `solid 15px ${pair[1]}`, margin: '20px', padding: '50px', }}
                />
            ))}
        </>
    )
}