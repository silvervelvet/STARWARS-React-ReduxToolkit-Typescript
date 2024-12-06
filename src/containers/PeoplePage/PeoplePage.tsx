import styles from './PeoplePage.module.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation'
import PeopleList from '../../components/PeoplePage/PeopleList'
import { PeopleApiResponse, getApiRequest } from '../../utils/networkRequest'
import { API_PEOPLE } from '../../constants/constants'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'

export interface People {
  id: string
  name: string
  img: string
}

const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<People[] | null>(null)
  const [prevPage, setPrevPage] = useState<string | null>(null)
  const [nextPage, setNextPage] = useState<string | null>(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '1')

  const getResourse = async (url: string) => {
    const res: PeopleApiResponse = await getApiRequest(url)

    const peopleList: People[] = res.results.map(({ name, url }) => {
      const id = getPeopleId(url)
      const img = getPeopleImage(id)

      return {
        id,
        name,
        img,
      }
    })

    setPeople(peopleList)
    setPrevPage(res.previous)
    setNextPage(res.next)
  }

  useEffect(() => {
    const url = currentPage === 1 ? API_PEOPLE : `${API_PEOPLE}?page=${currentPage}`
    getResourse(url)
  }, [currentPage])

  const switchPage = (pageUrl: string | null) => {
    if (pageUrl) {
      const newPage = new URL(pageUrl).searchParams.get('page')
      setSearchParams({ page: newPage || '1' })
    }
  }

  return (
    <>
      <PeopleNavigation
        onPrevious={() => switchPage(prevPage)}
        onNext={() => switchPage(nextPage)}
        switchBack={!!prevPage}
        switchNext={!!nextPage}
      />
      {people && <PeopleList people={people} />}
    </>
  )
}

export default PeoplePage