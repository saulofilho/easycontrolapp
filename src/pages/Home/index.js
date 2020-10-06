import React from 'react';

import { MdInsertEmoticon } from 'react-icons/md';

// import React, { useState, useMemo, useEffect } from 'react';
// import {
//   format,
//   subDays,
//   addDays,
//   setHours,
//   setMinutes,
//   setSeconds,
//   setMilliseconds,
//   isBefore,
//   isEqual,
//   parseISO,
// } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
// import pt from 'date-fns/locale/pt';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <MdInsertEmoticon color="#000" />
      <p>
        <span>Easy</span>Control
      </p>
    </Container>
  );
}
