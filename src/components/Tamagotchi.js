
import React, { useState, useEffect } from 'react';
import './Tamagotchi.css'

function Tamagotchi() {
  const [name, setName] = useState('Tamagotchi');
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(age => {
        if (age >= 100) {
          clearInterval(interval);
          return 100;
        } else {
          return age + 1;
        }
      });
      setHealth(health => Math.max(0, health - 1));
      setHappiness(happiness => Math.max(0, happiness - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const feed = () => {
    setHealth(health => Math.min(100, health + 5));
  };
  const play = () => {
    setHappiness(happiness => Math.min(100, happiness + 5));
  };

  const getBarColor = value => {
    if (value > 80) {
      return 'green';
    } else if (value > 20) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  const getBarColor2 = value => {
    if (value < 40) {
      return 'green';
    } else if (value > 65) {
      return 'red';
    } else {
      return 'yellow';
    }
  }

  return (
    <div className='articulo'>
      <h1>{name}</h1>
      <p>
        <p>Age:</p>
        <div
          className='progress-bar'
          style={{
            width: `${age}%`,
            backgroundColor: getBarColor2(age),
          }}
        >
          {age}
        </div>
      </p>
      <p>
        <p>Health:</p>
        <div
          className='progress-bar'
          style={{
            width: `${health}%`,
            backgroundColor: getBarColor(health),
          }}
        >
          {health}
        </div>
      </p>
      <p>
        <p>Happiness:</p>
        <div
          className='progress-bar'
          style={{
            width: `${happiness}%`,
            backgroundColor: getBarColor(happiness),
          }}
        >
          {happiness}
        </div>
      </p>
      {health === 0 || happiness === 0 ? (
        <p>Your Tamagotchi is died.</p>
      ) : (
        <>
          <button onClick={feed} className='button-54'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z" /></svg></button>
          <button onClick={play} className='button-54'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M17.422 20.394c-.177-.415-.219-.698-.289-1.118.625-.697 1.189-1.432 1.692-2.204.58-.196 1.271-.438 2.281-.956-.795 1.756-2.08 3.239-3.684 4.278m-8.181 1.212c1.039-.558 1.89-1.193 2.831-1.899 1.012.253 2.079.395 3.194.443l.001.007c.083.435.205.803.362 1.153-1.987.777-4.182.93-6.388.296m-7.24-9.619l1.273 1.217c-.194 1.076-.248 2.069-.234 3.214-.659-1.334-1.04-2.83-1.04-4.418l.001-.013m11.371-9.882l-.758 1.737c-2.139.56-3.384 1.125-5.214 2.107l-2.863-.586c2.128-2.389 5.337-3.74 8.835-3.258m-1.804 11.769c-1.083-.726-1.941-1.464-3.466-2.727l.546-3.576c1.446-.848 2.566-1.239 4.477-1.849.999.687 1.984 1.428 2.934 2.216l-.002.023c-.138 1.739-.42 3.066-.845 4.495-1.196.524-2.41.998-3.644 1.418m-4.758 6.661c-.555-.339-1.072-.728-1.549-1.164-.256-1.921-.361-3.89-.003-5.865l.001-.004 1.716-.745c1.211 1.126 2.346 2.004 3.676 2.928l.063 2.525c-1.323 1.046-2.369 1.738-3.904 2.325m15.108-7.311c-1 .722-1.776 1.225-3.025 1.683l-1.734-2.007c.451-1.449.738-3 .866-4.727l2.499-1.381c1.147 1.872 1.681 4.066 1.394 6.432m-9.918-13.224c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12" /></svg></button>

        </>
      )}
    </div>
  )
}

export default Tamagotchi;
