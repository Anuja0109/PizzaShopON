import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin: 0 auto;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        width: 100% !important;
        font-family: 'Open Sans', sans-serif; 
        max-width: 100%;
        overflow-x: hidden;
        height: 100% !important;
    }`
