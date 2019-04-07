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
    <ol className="quiz-list p3">
      {quiztions.map((item, idx) => {
        const itemIndex = idx + 1;
        const qNumber =
          itemIndex.toString().length === 1 ? `0${itemIndex}` : itemIndex;
        const [answerHidden, setAnswerVisibility] = useState(true);
        const wrapperClasses = styles(
          'min-h120px',
          answerHidden ? 'hov-target' : undefined
        );

        return (
          <li className={wrapperClasses} key={`qanda-${idx}`}>
            <div className="relative h100p">
              <div className="hide hov-item-flex absolute bg-white_85 h100p w100p">
                <button
                  onClick={() => setAnswerVisibility(!answerHidden)}
                  className="pointer m-auto bg-archive-beige p3 border-none rounded-medium"
                >
                  <Span kind="vulfpeck">Show answer</Span>
                </button>
              </div>
              {answerHidden ? (
                <div>
                  <Span className="block text-uppercase mb2" kind="reuben">
                    Question {qNumber}
                    <span className="block w15p h3px mt1 bg-archive-brown-900" />
                  </Span>
                  <Span className="" kind="vulfpeck">
                    {item.q}
                  </Span>
                </div>
              ) : (
                <button
                  className="pointer border-none bg-archive-brown-400 archive-beige block h100p w100p relative text-left p3 flex flex-column justify-between"
                  onClick={() => setAnswerVisibility(!answerHidden)}
                >
                  <div className="flex justify-between">
                    <Paragraph>{item.a}</Paragraph>
                    <Span className="o5p mt-3" kind="kishibashi">
                      {qNumber}
                    </Span>
                  </div>
                  <div>
                    <hr className="border-none w15p h3px bg-archive-beige m0 mb2" />
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
