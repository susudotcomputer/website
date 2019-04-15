import React, { useState } from 'react';
import { Span, Paragraph } from '../components/Text';
import styles from '../utils/css';

const quiztions = [
  {
    q: 'What are the names of the three casinos that the crew sets out to rob?',
    a: 'Bellagio, Mirage and the MGM Grand'
  },
  {
    q:
      'At the beginning of the film Danny Ocean is in prison. What object did he try to steal that put him there?',
    a: 'Incan Matrimonial Headmasks'
  },
  {
    q:
      'What is the one personal item Danny Ocean received when he was released from jail?',
    a: 'Wedding Ring'
  },
  {
    q:
      'Topher Grace is a celebrity client of Rusty. Name 2 other real actors in the group.',
    a: 'Joshua Jackson, Shane West, Holly Marie Combs, Barry Watson'
  },
  {
    q: 'What does Tess do for a living?',
    a: 'Art Curator'
  },
  {
    q: 'How much money is going to be in the vault on fight night?',
    a: '~$157,000,000'
  },
  {
    q:
      'What is the name of the device Basher steals to knock out the power in Vegas?',
    a: 'A Pinch'
  },
  {
    q:
      'What item did Linus bring as a backup that Danny suddenly needed to get into the vault?',
    a: 'Batteries'
  },
  {
    q:
      'In the vault, what did the crew fill the black bags with instead of money?',
    a: 'Flyers for "Hookers"'
  },
  {
    q:
      'Danny asks Rusty whether the job can be done. Rusty then lists a series of cons to pull it off. Name two of them.',
    a: 'Bowski, Jim Brown, Miss Daisy, Jethro, Leon Spinks, Ella Fitzgerald'
  },
  {
    q: 'What is the scent of the air freshener in the S.W.A.T. van?',
    a: 'Royal Pine'
  }
];

const Quiz = () => {
  return (
    <ol className="quiz-list p1 p5-md">
      {quiztions.map((item, idx) => {
        const itemIndex = idx + 1;
        const qNumber =
          itemIndex.toString().length === 1 ? `0${itemIndex}` : itemIndex;
        const [answerHidden, setAnswerVisibility] = useState(true);
        const wrapperClasses = styles(
          'min-h120px w100p',
          answerHidden ? 'hov-target' : undefined
        );

        return (
          <li className={wrapperClasses} key={`qanda-${idx}`}>
            <div className="relative h100p">
              {answerHidden ? (
                <button
                  className="pointer"
                  onClick={() => setAnswerVisibility(!answerHidden)}
                >
                  <div className="flex justify-between items-baseline mb1">
                    <Span
                      className="block text-uppercase archive-brown-400"
                      kind="vulfpeck"
                    >
                      Question {qNumber}
                    </Span>
                    <Span
                      className="inline-block o0p hov-item-o100p archive-brown-400 bg-archive-beige rounded-medium p1 px2"
                      kind="vulfpeck"
                    >
                      Show answer
                    </Span>
                  </div>
                  <span className="block w15p h5px mb2 bg-archive-brown-400" />
                  <Span kind="danny">{item.q}</Span>
                </button>
              ) : (
                <button
                  className="pointer border-none bg-archive-brown-400 archive-beige block h100p w100p relative text-left p3 flex flex-column justify-between"
                  onClick={() => setAnswerVisibility(!answerHidden)}
                >
                  <div className="flex justify-between">
                    <Paragraph kind="chromesparks">{item.a}</Paragraph>
                    <Span className="o5p mt-3" kind="kishibashi">
                      {qNumber}
                    </Span>
                  </div>
                  <div>
                    <hr className="borderwidth-none border-color-none w15p h5px bg-archive-beige m0 mb2" />
                    <Paragraph className="archive-brown-900" kind="reuben">
                      {item.q}
                    </Paragraph>
                  </div>
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Quiz;
