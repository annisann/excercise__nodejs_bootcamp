import React from "react";
import styled from "styled-components";

const FlexLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  header {
    background-color: salmon;
    font-size: 3rem;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main article {
    background-color: brown;
    flex: 1;
  }

  main aside {
    background-color: #F4B52B;
  }

  footer {
    background-color: #ccc;
  }

  @media(min-width: 768px) { // ubah posisi
    main {
      display: 80%;
      margin: 0 auto;
      flex-direction: row;
    }

    main aside {
      flex: 0 0 20%;
    }

    .leftSidebar {
      order: -1;
    }
  }

`

export default function FlexboxLayout() {
  return (
    <FlexLayout>
      <header> Header </header>
      <main>
        <article> Main Article </article>
        <aside> Right Sidebar </aside> 
        <aside className="leftSidebar"> Left Sidebar </aside> 
      </main>
      <footer> Footer </footer>
    </FlexLayout>
  );
}

// pakai className untuk ngespecify aja.