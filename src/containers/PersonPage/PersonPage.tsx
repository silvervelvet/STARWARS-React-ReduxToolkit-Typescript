import styles from './PersonPage.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { API_PERSON } from '../../constants/constants';
import { getApiRequest } from '../../utils/networkRequest';
import { getPeopleImage } from '../../services/getPeopleData';

import PersonImg from '../../components/PersonPage/PersonImg';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';

import React, { Suspense } from 'react';
const PersonFilms = React.lazy(
  () => import('../../components/PersonPage/PersonFilms')
);
import UiLoading from '../../components/UI-Kit/UILoading';

const PersonPage = () => {
  const { id } = useParams();

  const [personImg, setPersonImg] = useState(null);
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiRequest(`${API_PERSON}/${id}/`);

      setPersonInfo([
        { title: 'Height', data: res.height },
        { title: 'Mass', data: res.mass },
        { title: 'Hair Color', data: res.hair_color },
        { title: 'Skin Color', data: res.skin_color },
        { title: 'Eye Color', data: res.eye_color },
        { title: 'Birth Year', data: res.birth_year },
        { title: 'Gender', data: res.gender },
      ]);
      setPersonImg(getPeopleImage(id));
      setPersonName(res.name);
      setPersonFilms(res.films);
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <span>{personName}</span>
      <PersonImg personImg={personImg} personName={personName} />
      <PersonInfo personInfo={personInfo} />
      {personFilms && (
        <Suspense fallback={<UiLoading />}>
          <PersonFilms personFilms={personFilms} />
        </Suspense>
      )}
    </>
  );
};

export default PersonPage;
