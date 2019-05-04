import React from 'react';
import { Li, Span, Paragraph, Em } from '../components/Text';

const triviaItems = [
  () => (
    <Paragraph>
      Luke & Owen Wilson were lined up to play bickering brothers Virgil and
      Turk, but dropped out at the last minute to do{' '}
      <Em>The Royal Tenenbaums</Em> instead.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      The wig worn by Brad Pitt when he’s in disguise as a doctor was actually
      the same one used 4 years prior by Mike Myers during{' '}
      <Em>Austin Powers: International Man of Mystery</Em>.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      Originally, the casino being brought down by explosives was the New York,
      New York Hotel— but Sept 11 happened 3 months before release. The
      producers scrambled to build a new CGI fake hotel called “The Xanadu” to
      destroy instead.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      The final scene of everyone watching the Bellagio fountain and leaving was
      improvised. Steven Soderbergh wanted Rusty (Brad Pitt) to leave first and
      Saul (Carl Reiner) to leave last. The rest of the actors were told to
      depart in whatever order felt natural.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      In <Em>Ocean’s Twelve</Em>, the Night Fox's mansion is on the shores of
      Lake Como in Italy. The name of the city overlooking Lake Como is
      Bellagio, the hotel the crew robbed in the first movie.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      In <Em>Ocean’s Thirteen</Em>, Linus (Matt Damon) is walking through London
      speaking on the phone. This was shot while he was in London filming{' '}
      <Em>The Bourne Ultimatum</Em>.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      In <Em>Ocean’s Thirteen</Em>, the line 'You shook Sinatra's hand' is
      mentioned several times in the movie. It’s a reference to Frank Sinatra
      who played Danny Ocean in the 1960 original Ocean's 11.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      In the original 1960s <Em>Ocean’s 11</Em>, Sammy Davis Jr. was forced to
      stay at a 'colored only' hotel during the filming because Las Vegas would
      not allow blacks to stay at the major hotels despite his appearing with
      Frank Sinatra, Dean Martin, and the others at the Sands.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      <Em>Ocean’s Eight’s</Em> final scene is Debbie Ocean (Sandra Bullock)
      wearing a black tux with the bow tie open. This is a nod to the opening
      scene of Ocean's Eleven when Danny (George Clooney) leaves prison in the
      same outfit.
    </Paragraph>
  ),
  () => (
    <Paragraph>
      There is a movie called <Em>Ocean’s 7</Em>, but it’s about Beth French, a
      British ultra-marathon open-sea swimmer trying to become the first person
      ever to conquer the world's seven toughest sea crossings in one year.
    </Paragraph>
  )
];

const Trivia = () => {
  return (
    <ul className="trivia-list py5">
      {triviaItems.map((item, i) => {
        return (
          <Li
            className="lh24px px3 px5-md"
            kind="reuben"
            key={`trivia-item-${i}`}
          >
            <Span className="" kind="vulfpeck">
              Did you know…
            </Span>{' '}
            {item()}
            <hr className="mt4 w15p h5px border-none bg-archive-brown-400" />
          </Li>
        );
      })}
    </ul>
  );
};

export default Trivia;
