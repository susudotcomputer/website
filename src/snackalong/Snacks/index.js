import React from 'react';
import Note from '../Note';
import Snack from './Snack';
import Grid from '../../components/Grid';
import snacks from './snackdata';
import styles from '../../utils/css';

const Snacks = () => {
  return (
    <div className="relative">
      <div className="bg-archive-brown-900 h15vw w100p clip-triangle absolute t-15vw l0 r0 z10" />
      <div className="bg-archive-brown-900 pb20 clip relative">
        <Grid lines={false}>
          {snacks.map((snack, i) => {
            const noteClasses = styles(
              snack.noteClasses || 'col-4 col-offset-1'
            );
            return (
              <React.Fragment key={`snack-${i}`}>
                <Snack {...snack} />
                {snack.note && (
                  <div className={styles('mt10', noteClasses)}>
                    <Note direction={'leftUpUp'}>{snack.note}</Note>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Snacks;
