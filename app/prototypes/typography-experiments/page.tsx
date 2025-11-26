"use client";

import { useState } from 'react';
import styles from './styles.module.css';
import { inter } from '../../fonts';

export default function TypographyExperiments() {
  const [inputText, setInputText] = useState('Type your text here');

  return (
    <div className={`${styles.container} ${inter.variable}`}>
      <main className={styles.main}>
        <div className={styles.inputSection}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className={styles.input}
            placeholder="Type your text here"
          />
        </div>

        <div className={styles.poster}>
          {/* Lava Lamp Text */}
          <div className={styles.experiment}>
            <h2 className={styles.experimentTitle}>Lava Lamp</h2>
            <div className={styles.lavaLampWrapper}>
              <div className={styles.lavaLampText}>{inputText}</div>
              <div className={styles.lavaLampText} style={{ animationDelay: '0.5s' }}>{inputText}</div>
              <div className={styles.lavaLampText} style={{ animationDelay: '1s' }}>{inputText}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

