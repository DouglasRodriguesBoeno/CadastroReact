import React from "react";
import './Header.css';
import Header from "./Header";

export default props => {
   return <React.Fragment> 
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>
}