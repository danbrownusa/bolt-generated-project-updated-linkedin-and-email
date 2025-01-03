import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2D3748;
    --secondary: #4299E1;
    --accent: #F6AD55;
    --background: #FFFFFF;
    --text: #1A202C;
    --gray-50: #F7FAFC;
    --gray-100: #EDF2F7;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --success: #48BB78;
    --error: #F56565;
    --gradient: linear-gradient(135deg, var(--secondary) 0%, #667EEA 100%);
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: var(--secondary);
    color: white;
  }
`
