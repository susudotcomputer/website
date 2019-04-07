import React from 'react';
import Note from '../Note';
import Snack from './Snack';
import Grid from '../../components/Grid';
import snacks from './snackdata';
import styles from '../../utils/css';

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 pb40vh clip">
      <Grid lines={false}>
        {snacks.map((snack, i) => {
          const noteClasses = styles(snack.noteClasses || 'col-4 col-offset-2');
          return (
            <>
              <Snack {...snack} />
              {snack.note && (
                <div key={`note-${i}`} className={noteClasses}>
                  <Note direction={'rightAbove'}>{snack.note}</Note>
                </div>
              )}
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default Snacks;
