import React from 'react';

import { useNewMoralisObject } from "react-moralis";

export default function CreateRoom() {
  const { save } = useNewMoralisObject("Propasal_Merge_Inter_DAO");

  const saveObject = async () => {
    const data = {
      strength: 1024,
      ownerName: "Aegon",
      canFly: true,
    };

    save(data, {
      onSuccess: (proposal) => {
        // Execute any logic that should take place after the object is saved.
        alert("New object created with objectId: " + proposal.id);
      },
      onError: (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      },
    });
  };

  return (<button onClick={saveObject}>Call The Code</button>);
}