import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle` 
    ${reset}

    @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      src: local('Noto Sans KR'),
        url('../fonts/NotoSans-Regular.woff2') format('woff2'),
        url('../fonts/NotoSans-Regular.woff') format('woff'),
        url('../fonts/NotoSans-Regular.eot?#iefix') format('embedded-opentype'),
        url('../fonts/NotoSans-Regular.otf') format('opentype');
    }

    ul,
    li,
    dt,
    dd {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    i.bx {
      line-height: normal;
      display: inline-flex;
      align-items: center;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont,
        system-ui, Roboto, 'Helvetica Neue', 'Segoe UI';
    }

    button,input,select,textarea {
      box-sizing: border-box;
      appearance: none;
      outline: none;
      border: none;
    }

`

export default GlobalStyles
