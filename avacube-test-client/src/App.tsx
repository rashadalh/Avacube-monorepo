import React, {useState, useEffect} from 'react';
import './App.css';
// import Avacube from '/Users/coda/GitHub/Avacube-monorepo/packages/avacube-node/src/index';
import { sendEthSepoliaViaAvacubeAtTime } from '../../packages/avacube-node/examples/sepolia-holesky';

// Define the functional component using React.FC (Functional Component)
const App: React.FC = () => {
  // State variables to hold the input values
  const [sendAmt, setSendAmt] = useState<number>(0);
  const [toAddress, setToAddress] = useState<string>("");
  const [epochToStartAt, setEpochToStartAt] = useState<number>(0);
  const [currentEpochTime, setCurrentEpochTime] = useState<number>(Math.floor(Date.now() / 1000));

  // Update the current epoch time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEpochTime(Math.floor(Date.now() / 1000));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function for sending ETH via Sepolia at a specific time
  const _sendEthSepoliaViaAvacubeAtTime = (sendAmt: number, toAddress: string, epochToStartAt: number): void => {
    console.log("sendEthSepoliaViaAvacubeAtTime Called");
    console.log(`Sending ${sendAmt} ETH to ${toAddress} at epoch time ${epochToStartAt}`);
    alert(`Sending ${sendAmt} ETH to ${toAddress} at epoch time ${epochToStartAt}`);
    // Add your implementation for sending ETH here
    sendEthSepoliaViaAvacubeAtTime(sendAmt, toAddress, epochToStartAt);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Send ETH via Avacube</h1>
        
        {/* Input Field for Send Amount */}
        <div style={{ margin: '10px' }}>
          <label>Send Amount (ETH): </label>
          <input
            type="number"
            value={sendAmt}
            onChange={(e) => setSendAmt(Number(e.target.value))}
          />
        </div>
        {/* Input Field for To Address */}
        <div style={{ margin: '10px' }}>
          <label>To Address: </label>
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder="0x..."
          />
        </div>
        {/* Input Field for Epoch Start Time */}

        <div style={{ margin: '10px' }}>
          <label>Epoch Start Time: </label>
          <input
            type="number"
            value={epochToStartAt}
            onChange={(e) => setEpochToStartAt(Number(e.target.value))}
            placeholder="e.g., 1672531200"
          />
        </div>
        {/* Display the Current Epoch Time */}
        <div style={{ margin: '10px' }}>
          <div style={{fontSize: '10px'}}>Current Epoch Time: </div>
          <span>{currentEpochTime}</span>
        </div>

        {/* Button to Call the Function */}
        <div style={{ margin: '20px' }}>
          <button onClick={() => _sendEthSepoliaViaAvacubeAtTime(sendAmt, toAddress, epochToStartAt)}>
            Send ETH via Sepolia at Specified Time
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
