import React from "react";
import ApiCard from "./ApiCard";

const ListUser = ({ listOfUser }) => {
  return (
    <div style={{display  : "flex", gap : 10, flexWrap :"wrap", justifyContent : "center"}}>
      
        {listOfUser.map((user) => (
          <ApiCard user={user} key={user.id}/>
        ))}
     
    </div>
  );
};

export default ListUser;
