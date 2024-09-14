import React, { useState } from 'react';
import './App.css';

function App() {
  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div >
      <h1>Voting Application</h1>
      <div >
       <table>
        <thead><tr>
        <th>SLNO</th>
          <th>CANDIDATE NAME</th>
          <th>sybmol</th>
          <th>VOTES</th>
          <th>vote count</th>

        </tr>
         
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>
    <td>modi</td>
    <td><img src="bjp.png" alt="bjp"></img></td>
    <td><button onClick={()=>handleVote('option1')}>BJP</button></td>
    <td><span>{votes.option1}</span></td>
          </tr>
          <tr>
            <td>
              2
            </td>
    <td>rahul</td>
    <td><img src="congress.png" alt="congress"></img></td>
    <td><button onClick={()=>handleVote('option2')}>CONGRESS</button></td>
    <td><span>{votes.option2}</span></td>
          </tr>
          <tr>
            <td>
              3
            </td>
    <td>vinutha</td>
    <td><img src="jo.png" alt="aap"></img></td>
    <td><button onClick={()=>handleVote('option3')}>AAP</button></td>
    <td><span>{votes.option3}</span></td>
          </tr>
        </tbody>
       </table>
      </div>
    </div>
  );
}


export default App;