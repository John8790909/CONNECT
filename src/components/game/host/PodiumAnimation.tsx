//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import Confetti from 'react-confetti'
import '../../../style/podiumAnimation.css'
import { Howl, Howler } from 'howler'
import soundEffect from '../../../audio/drum_roll.mp3'
import { Button } from '@mui/material'
import useTranslations from '../../../hooks/useTranslations'

function PodiumAnimation({ podium, maxPodiumPlayers }) {
  const translations = useTranslations()
  //{ podium, maxPodiumPlayers }

  // const podium = [
  //   {
  //     player: "John Doe π³ππ",
  //     position: "1",
  //     time: "10s",
  //   },
  //   {
  //     player: "Smith π°πβ",
  //     position: "2",
  //     time: "11s",
  //   },
  //   {
  //     player: "Mike π‘π₯π",
  //     position: "3",
  //     time: "13s",
  //   },
  //   {
  //     player: "Price πβ¨π",
  //     position: "4",
  //     time: "15s",
  //   },
  //   {
  //     player: "Joyce β‘οΈπ©βπ«π°",
  //     position: "5",
  //     time: "16s",
  //   },
  //   {
  //     player: "Claire π³π",
  //     position: "6",
  //     time: "17s",
  //   },
  //   {
  //     player: "Derek πΆππ",
  //     position: "7",
  //     time: "18s",
  //   },
  //   {
  //     player: "James Bond π£π£π£",
  //     position: "8",
  //     time: "177s",
  //   },
  //   {
  //     player: "Tony Stark π°π",
  //     position: "9",
  //     time: "178s",
  //   },
  //   {
  //     player: "Ethan Hunt ππ€ͺ",
  //     position: "10",
  //     time: "179s",
  //   },
  //   {
  //     player: "John Wick βοΈπ΅",
  //     position: "11",
  //     time: "180s",
  //   },
  //   {
  //     player: "Jason Bourne πͺπͺ",
  //     position: "12",
  //     time: "182s",
  //   },
  // ];

  // const maxPodiumPlayers = 10;

  const PlaySound = (mp3) => {
    let sound = new Howl({
      src: mp3,
    })
    sound.play()
  }

  const FirstPlace = ({ name }) => {
    return (
      <motion.div
        initial={{ height: 60 }}
        animate={{ height: 450 }}
        exit={{ height: 60 }}
        transition={{ duration: 2, delay: 5, type: 'spring', stiffness: 50 }}
        onAnimationComplete={() => {
          document.getElementById('podium__confetti').style.visibility =
            'visible'
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 5 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 12, -12, 12, -12, 12, -12, 12, -12, 12, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, delay: 6 }}
            >
              <h1
                style={{
                  color: 'white',
                  width: '200px',
                  textAlign: 'center',
                  zIndex: '10',
                }}
              >
                {name}
              </h1>
            </motion.div>
          </motion.div>
          <div
            style={{
              backgroundColor: '#FCC73E',
              padding: '5px',
              width: '200px',
              marginLeft: '10px',
              borderRadius: '5px',
              height: '450px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              1st π₯
            </h1>
          </div>
        </div>
      </motion.div>
    )
  }

  const SecondPlace = ({ name }) => {
    return (
      <motion.div
        initial={{ height: 60 }}
        animate={{ height: 350 }}
        exit={{ height: 60 }}
        transition={{ duration: 2, delay: 2, type: 'spring' }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 3 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 12, -12, 12, -12, 12, -12, 12, -12, 12, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, delay: 6 }}
            >
              <h1
                style={{
                  color: 'white',
                  width: '200px',
                  textAlign: 'center',
                  zIndex: '10',
                }}
              >
                {name}
              </h1>
            </motion.div>
          </motion.div>
          <div
            style={{
              backgroundColor: '#2D93F0',
              padding: '5px',
              width: '200px',
              marginLeft: '10px',
              borderRadius: '5px',
              height: '350px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              2nd π₯
            </h1>
          </div>
        </div>
      </motion.div>
    )
  }

  const ThirdPlace = ({ name }) => {
    return (
      <motion.div
        initial={{ height: 60 }}
        animate={{ height: 300 }}
        exit={{ height: 60 }}
        transition={{ duration: 2 }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, delay: 2 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 12, -12, 12, -12, 12, -12, 12, -12, 12, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, delay: 6 }}
            >
              <h1
                style={{
                  color: 'white',
                  width: '200px',
                  textAlign: 'center',
                  zIndex: '10',
                }}
              >
                {name}
              </h1>
            </motion.div>
          </motion.div>
          <div
            style={{
              backgroundColor: '#CE3EE5',
              padding: '5px',
              width: '200px',
              marginLeft: '10px',
              borderRadius: '5px',
              height: '300px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              3rd π₯
            </h1>
          </div>
        </div>
      </motion.div>
    )
  }

  useEffect(() => {
    if (podium.length <= 0) return
    PlaySound(soundEffect)
  }, [podium])

  Howler.volume(1.0)

  return (
    <>
      {podium.length > 0 ? (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ visibility: 'hidden' }}
            id="podium__confetti"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {podium.map((podiumPlayer, index) => {
                if (podiumPlayer?.position === '2') {
                  return (
                    <SecondPlace
                      key={index}
                      name={podiumPlayer?.player.replace('β ', '')}
                    />
                  )
                }
              })}
              {podium.map((podiumPlayer, index) => {
                if (podiumPlayer?.position === '1') {
                  return (
                    <FirstPlace
                      key={index}
                      name={podiumPlayer?.player.replace('β ', '')}
                    />
                  )
                }
              })}
              {podium.map((podiumPlayer, index) => {
                if (podiumPlayer?.position === '3') {
                  return (
                    <ThirdPlace
                      key={index}
                      name={podiumPlayer?.player.replace('β ', '')}
                    />
                  )
                }
              })}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, delay: 5.5, type: 'easeInOut' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {podium.map((place, index) => {
                  if (
                    place.position > 3 &&
                    parseInt(maxPodiumPlayers) >= place?.position
                  ) {
                    return (
                      <div key={index} className="other-place">
                        {place?.position}th place{' '}
                        {place?.player.replace('β ', '')}
                      </div>
                    )
                  }
                })}
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => (window.location = '/')}
                >
                  {translations.finishedscreen.return}
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location = '/')}
          >
            {translations.finishedscreen.return}
          </Button>
        </div>
      )}
    </>
  )
}

export default PodiumAnimation
