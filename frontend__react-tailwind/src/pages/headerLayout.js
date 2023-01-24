import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const HeaderBackground = styled.div`
    background: url(../../hi.gif);
    background-size: cover;
    font-size: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 10px 2fr 10px;
    grid-template-rows: .5fr 1fr 20px;

    article {
        grid-column: 2/3;
        grid-column: 2/3;
    }
    article h1 {
        font-size: 50px;
    }

    article  p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        /* color */
    }
    img {
        margin: auto;
        grid-row: 1/2;
        grid-column: 2/3;
        padding-top: 1rem;
        height: 165px;
    }

    button {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        background-color: transparent;
    }

`
export default function HeaderLayout() {
  return (
    <HeaderBackground>
      <img src='/wand.png' alt='star butterfly' />
      <article>
        <h1> Star Butterfly </h1>
        <p> I'm a magical princess, from another dimension! </p>
        <button> gettin' started <FontAwesomeIcon icon={faAngleDoubleRight}/></button>
      </article>
    </HeaderBackground>
  )
}
