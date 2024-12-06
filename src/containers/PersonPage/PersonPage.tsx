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
        const res: PersonApiResponse = await getApiRequest(
          `${API_PERSON}/${id}/`
        );

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
        setPersonId(res.url);
      })();
    }
  }, [id]);

  if (personId === null || personImg === null || personName === null) {
    return <div>Sorry</div>;
  }

  console.log(personImg);

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
