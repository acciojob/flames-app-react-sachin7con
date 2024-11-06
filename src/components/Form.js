import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondName = (e) => {
    setSecondName(e.target.value);
  };

  const calculateRelationship = () => {
    if (!firstName.trim() || !secondName.trim()) {
      setRelationship("Please Enter valid input");
      return;
    }

    // Step 1: Convert strings to arrays for easier manipulation
    let name1Arr = firstName.split("");
    let name2Arr = secondName.split("");

    // Step 2: Remove common letters from both arrays
    name1Arr.forEach((char) => {
      const indexInName2 = name2Arr.indexOf(char);
      if (indexInName2 !== -1) {
        name2Arr.splice(indexInName2, 1); // Remove character from second name array
        name1Arr.splice(name1Arr.indexOf(char), 1); // Remove character from first name array
      }
    });

    // Step 3: Calculate remaining length sum
    const remainingLength = name1Arr.length + name2Arr.length;

    // Step 4: Determine relationship based on modulus result
    const relationshipResult = remainingLength % 6;
    let status = "";
    switch (relationshipResult) {
      case 1:
        status = "Friends";
        break;
      case 2:
        status = "Love";
        break;
      case 3:
        status = "Affection";
        break;
      case 4:
        status = "Marriage";
        break;
      case 5:
        status = "Enemy";
        break;
      case 0:
        status = "Siblings";
        break;
      default:
        status = "Unknown";
    }

    setRelationship(status);
  };

  const clearAll = () => {
    setFirstName("");
    setSecondName("");
    setRelationship("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={handleFirstName}
        />
        <input
          type="text"
          placeholder="Enter second name"
          value={secondName}
          onChange={handleSecondName}
        />

        <button type="button" onClick={calculateRelationship}>
          Calculate Relationship Future
        </button>
        <button type="button" onClick={clearAll}>
          Clear
        </button>
      </form>

      <h3>{relationship}</h3>
    </>
  );
};

export default Form;