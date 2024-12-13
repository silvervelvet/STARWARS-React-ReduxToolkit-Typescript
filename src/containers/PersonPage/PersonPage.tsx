import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { API_PERSON } from '../../constants/constants';
import { getApiRequest, PersonApiResponse } from '../../utils/networkRequest';
import { getPeopleImage } from '../../services/getPeopleData';

import PersonImg from '../../components/PersonPage/PersonImg';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import UiLoading from '../../components/UI-Kit/UILoading';

import React, { Suspense } from 'react';
import UIButton from '../../components/UI-Kit/UIButton/UIButton';
import { useTheme } from '../../context/ThemeContext';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(
  () => import('../../components/PersonPage/PersonFilms')
);

interface PersonInfoData {
  title: string;
  data: string;
}

export interface PersonImgProps {
  personId: string;
  personImg: string;
  personName: string;
}

const PersonPage: React.FC = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [personId, setPersonId] = useState<string | null>(null);
  const [personImg, setPersonImg] = useState<string | null>(null);
  const [personInfo, setPersonInfo] = useState<PersonInfoData[]>([]);
  const [personName, setPersonName] = useState<string | null>(null);
  const [personFilms, setPersonFilms] = useState<string[] | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await getApiRequest(`${API_PERSON}/${id}/`);

        if ('name' in res) {
          const personData = res as PersonApiResponse;
          setPersonInfo([
            { title: 'Height', data: personData.height },
            { title: 'Mass', data: personData.mass },
            { title: 'Hair Color', data: personData.hair_color },
            { title: 'Skin Color', data: personData.skin_color },
            { title: 'Eye Color', data: personData.eye_color },
            { title: 'Birth Year', data: personData.birth_year },
            { title: 'Gender', data: personData.gender },
          ]);
          setPersonImg(getPeopleImage(id));
          setPersonName(personData.name);
          setPersonFilms(personData.films);
          setPersonId(personData.url);
        } else {
          console.error('Unexpected response format');
        }
      })();
    }
  }, [id]);

  if (personId === null || personImg === null || personName === null) {
    return <div>Sorry, we couldn't find the person.</div>;
  }

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className={styles.person_container}>
      <UIButton
        text={'Go back'}
        onClick={handleGoBack}
        disabled={false}
        theme={theme}
        classes={
          theme === 'light'
            ? styles.linkBackLightButton
            : styles.linkBackDarkButton
        }
      />
      <span>{personName}</span>
      <PersonImg
        personId={personId}
        personImg={personImg}
        personName={personName}
      />
      <PersonInfo personInfo={personInfo} />
      {personFilms && (
        <Suspense fallback={<UiLoading />}>
          <PersonFilms personFilms={personFilms} />
        </Suspense>
      )}
    </section>
  );
};

export default PersonPage;
