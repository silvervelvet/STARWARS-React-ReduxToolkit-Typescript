import styles from './PersonPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { API_PERSON } from '../../constants/constants';
import { getApiRequest, PersonApiResponse } from '../../utils/networkRequest';
import { getPeopleImage } from '../../services/getPeopleData';

import PersonImg from '../../components/PersonPage/PersonImg';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import UiLoading from '../../components/UI-Kit/UILoading';

import React, { Suspense } from 'react';
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

  return (
    <>
      <PersonLinkBack />
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
    </>
  );
};

export default PersonPage;
