import React from 'react';
import Note from '../Note';
import Snack from './Snack';
import Grid from '../../components/Grid';
import snacks from './snackdata';
import styles from '../../utils/css';

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 pb20 clip">
      <Grid lines={false}>
        {snacks.map((snack, i) => {
          const noteClasses = styles(snack.noteClasses || 'col-4 col-offset-2');
          return (
            <React.Fragment key={`snack-${i}`}>
              <Snack {...snack} />
              {snack.note && (
                <div className={noteClasses}>
                  <Note direction={'rightAbove'}>{snack.note}</Note>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
};

export default Snacks;
