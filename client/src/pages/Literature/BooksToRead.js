import React from "react";
import Content from "../../Components/ContentDiv";
import BooksToReadList from "./BooksToReadList";
import BooksRead from "./BooksRead";




const BooksToRead = () => {
    return(

    <Content>

    <BooksRead list = {BooksToReadList}/>


    </Content>





    );
};


export default BooksToRead;