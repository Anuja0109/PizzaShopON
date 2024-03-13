import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root {
        margin: 0 auto;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif; 
        background: #012039;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #ccc;
        width: 100% !important;
        max-width: 100%;
        overflow-x: hidden;
        height: 100% !important;
    }`
