import css from 'styled-jsx/css'

const styles = css`

    .container {
        display: grid;
        grid-template-columns: 15% 85%;
    }

    .header-menu {
        padding: 12px;
    }

    .groups {
        background-color: #212429;
        height: 100vh;
    }

    .list-group {
        padding-left: 0;
        position: relative;
    }

    .group {
        padding: 20px;
        transition: all ease 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: #313434;
    }

    .line {
        position: absolute;
        width: 2px;
        background-color: #4a4e50;
        left: 13%;
        top: 0;
        bottom: 0;
        z-index: 4;
    }

    .group:hover {
        background-color: rgb(0, 0, 0);
    }

    .list-group li a {
        position: relative;
        z-index: 5; 
        margin-left: 12px;
        color: #fff;
        text-decoration: none;
    }

    h1 {
        color: #fff;
    }

`

export default styles
